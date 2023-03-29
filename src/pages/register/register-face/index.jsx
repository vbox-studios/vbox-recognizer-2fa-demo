"use client";
import { useEffect } from "react";
import RootLayout from "@/layouts/layout";
import styles from "@/styles/auth.module.css";
import { Text, Spacer, Input, Button, Modal } from "@nextui-org/react";
import { useState } from "react";
import RegisterCamera from "@/components/Camera/RegisterCamera";
import BorderedButton from "@/components/BorderedButton/BorderedButton";
import Card from "@/components/Card/Card";
import Image from "next/image";
import Secure from "./../../../../public/icon/secure.png";
const TwoFactorAuthentication = () => {
  const [openCamera, setOpenCamera] = useState(false);
  const [preview, setPreview] = useState(null);
  const [page, setPage] = useState(1);
  const [currentRegisteredUser, setCurrentRegisteredUser] = useState();

  const handleCloseCamera = () => {
    setOpenCamera(false);
  };

  useEffect(() => {
    setCurrentRegisteredUser(
      JSON.parse(localStorage.getItem("currentRegisteredUser"))
    );
  }, []);

  return (
    <RootLayout>
      {openCamera && currentRegisteredUser ? (
        <RegisterCamera
          page={page}
          setPage={setPage}
          handleClose={handleCloseCamera}
          setPreview={setPreview}
          currentUser={currentRegisteredUser}
        />
      ) : (
        <div className={styles.mainContainer}>
          <Card>
            <Text h3>Two Factor Authentication</Text>
            <Image src={Secure} alt="2fa icon" />
            <Text css={{ textAlign: "center" }}>
              To protect your account we use facial recognition as our 2FA
              method.
            </Text>
            <Spacer y={1.5} />
            <BorderedButton onClick={() => setOpenCamera(true)}>
              Open Camera
            </BorderedButton>
            <Spacer y={1.5} />
          </Card>
        </div>
      )}
    </RootLayout>
  );
};

export default TwoFactorAuthentication;
