import RootLayout from "@/layouts/layout";
import { useContext, useEffect, useState } from "react";
import { Input, Text, Spacer, Button } from "@nextui-org/react";
import { UserContext } from "@/context/auth";
import styles from "@/styles/auth.module.css";
import { generateId } from "@/utils/idGenerator";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Card from "@/components/Card/Card";
import BorderedButton from "@/components/BorderedButton/BorderedButton";
import {
  updateError,
  isValidEmail,
  isValidPassword,
} from "@/utils/formValidation";

export default function Register() {
  const router = useRouter();
  const { registerUser } = useContext(UserContext);

  const [data, setData] = useState({
    id: "",
    name: "",
    surname: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(generateId());
    setData({ ...data, id: generateId() });
  }, []);

  const { name, surname, email, password } = data;

  const handleOnChange = (value, fieldName) => {
    setData({ ...data, [fieldName]: value });
  };
  const handleOnBlur = (value, fieldName) => {
    setData({ ...data, [fieldName]: value.trim() });
  };

  const transition = () => {
    return router.push("/register/register-face");
  };

  const isValidForm = () => {
    if (!name.trim()) return updateError("Please enter your name.", setError);
    if (!email.trim())
      return updateError("Please enter an email address.", setError);
    if (!isValidEmail(email))
      return updateError("Invalid email address!", setError);
    if (!password.trim() || password.length < 8)
      return updateError(
        "Password must be longer than 8 characters.",
        setError
      );
    if (!isValidPassword(password))
      return updateError(
        "Password must contain atleast: 1 uppercase value[A-Z]\n1 lowercase value[a-z]\n1 numeric value[0-9]\nand 1 special character[!@#$%^&*()]",
        setError
      );

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("working");
    if (!isValidForm()) return;
    registerUser(data, setError, transition);
  };

  return (
    <RootLayout>
      <div className={styles.mainContainer}>
        <Card>
          <Text h2>Register</Text>
          <Text>Let&apos;s get started by creating your account!</Text>
          <Spacer y={2} />
          <form onSubmit={handleSubmit}>
            <Input
              width="100%"
              underlined
              labelPlaceholder="Name"
              onChange={(e) => handleOnChange(e.target.value, "name")}
              onBlur={(e) => handleOnBlur(e.target.value, "name")}
            />
            <Spacer y={2} />
            <Input
              width="100%"
              underlined
              labelPlaceholder="Surname"
              onChange={(e) => handleOnChange(e.target.value, "surname")}
            />
            <Spacer y={2} />
            <Input
              width="100%"
              underlined
              labelPlaceholder="Email Address"
              onChange={(e) => handleOnChange(e.target.value, "email")}
              onBlur={(e) => handleOnBlur(e.target.value, "email")}
            />
            <Spacer y={2} />
            <Input.Password
              underlined
              labelPlaceholder="Password"
              onChange={(e) => handleOnChange(e.target.value, "password")}
              onBlur={(e) => handleOnBlur(e.target.value, "password")}
            />
            <Spacer y={2} />
            <Text color="error">{error}</Text>
            <BorderedButton type="submit">Register</BorderedButton>
          </form>
          <Spacer y={1} />
          <Text>Already have an account?</Text>
          <Link href={"/login"}>Login</Link>
        </Card>
      </div>
    </RootLayout>
  );
}
