import React, { useState, useEffect } from "react";
import RootLayout from "@/layouts/layout";
import Card from "@/components/Card/Card";
import BorderedButton from "@/components/BorderedButton/BorderedButton";
import { Text, Spacer } from "@nextui-org/react";
import Image from "next/image";
import People from "./../../../public/img/header-img.svg";
import styles from "@/styles/auth.module.css";
import Link from "next/link";
const Home = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("currentRegisteredUser")));
  }, []);

  const deleteData = () => {
    recogApi.post(
      `/remove_user`,
      {
        identifier: `${user.name} ${user.surname}`,
        group_name: "Auth Test",
      },
      {
        headers: {
          "X-RapidAPI-Key":
            "8df8ab70b7msh0c987753ad5356dp1690d4jsn743ac97bd6e8",
          "X-RapidAPI-Host": "vbox-recognizer.p.rapidapi.com",
        },
      }
    );
  };

  return (
    <RootLayout>
      <div className={styles.mainContainer}>
        <Card>
          <Text h3>Thank you!</Text>
          <Spacer y={1.5} />
          <Image
            src={People}
            alt="people using facial recognition"
            width={250}
          />
          <Spacer y={1.5} />
          <Text css={{ textAlign: "center" }}>
            Thank you for trying out the VBOX. Recognizer 2FA demo! We&apos;d
            appreciate your feedback.
          </Text>
          <Spacer y={1} />
          <Text css={{ textAlign: "center" }}>
            Create a free account and get in touch with us via your dashboard.
          </Text>
          <Spacer y={1.5} />
          <BorderedButton onClick={() => deleteData()}>
            Delete Facial Data
          </BorderedButton>
          <Link href="https://www.vboxrecognizer.com">
            Create a free account!
          </Link>
          <Spacer y={1.5} />
        </Card>
      </div>
    </RootLayout>
  );
};

export default Home;
