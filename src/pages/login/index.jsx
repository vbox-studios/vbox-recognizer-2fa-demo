import RootLayout from "./../../layouts/layout";
import { useContext, useState } from "react";
import { Input, Text, Spacer, Button } from "@nextui-org/react";
import styles from "./../../styles/auth.module.css";
import { UserContext } from "./../../context/auth";
import Link from "next/link";
import { useRouter } from "next/router";
import { isValidEmail, updateError } from "./../../utils/formValidation";
import LoadingModal from "./../../components/LoadingModal/LoadingModal";
import BorderedButton from "@/components/BorderedButton/BorderedButton";
import Card from "@/components/Card/Card";

export default function Login() {
  const router = useRouter();

  const { logInUser } = useContext(UserContext);

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = data;

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const handleOnChange = (value, fieldName) => {
    setData({ ...data, [fieldName]: value });
  };
  const handleOnBlur = (value, fieldName) => {
    setData({ ...data, [fieldName]: value.trim() });
  };

  const isValidForm = () => {
    if (!email.trim())
      return updateError("Please enter your email address.", setError);
    if (!isValidEmail(email))
      return updateError("Please enter a valid email address.", setError);
    if (!password.trim())
      return updateError("Please enter your password.", setError);

    return true;
  };

  const transition = () => {
    return router.push("/login/recognize");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidForm()) {
      setLoading(true);
      logInUser(data, transition, setError, setLoading);
    }
    console.log(data);
  };

  return (
    <RootLayout>
      <div className={styles.mainContainer}>
        <Card>
          <Text h2>Log In</Text>
          <Text>Welcome back user!</Text>
          <Spacer y={1.2} />
          <form onSubmit={handleSubmit}>
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
            <Spacer y={0.5} />
            <Text color="error">{error}</Text>

            <Spacer y={0.5} />
            <BorderedButton type="submit">Log In</BorderedButton>
          </form>

          <Spacer y={1} />
          <Text>Don&apos;t have an account?</Text>
          <Link href={"/register"}>Register</Link>
        </Card>
        {loading && (
          <LoadingModal open={loading} onClose={setLoading}>
            Logging In...
          </LoadingModal>
        )}
      </div>
    </RootLayout>
  );
}
