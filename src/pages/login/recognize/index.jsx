import { useEffect } from "react";
import BorderedButton from "@/components/BorderedButton/BorderedButton";
import Card from "@/components/Card/Card";
import RootLayout from "@/layouts/layout";
import styles from "@/styles/auth.module.css";
import { Text, Spacer } from "@nextui-org/react";
import { useState } from "react";
import LoginCamera from "@/components/Camera/LoginCam";
import Image from "next/image";
import Secure from "./../../../../public/icon/secure.png";
const Recognize = () => {
  const [openCamera, setOpenCamera] = useState(false);
  const [preview, setPreview] = useState(null);

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
        <LoginCamera
          handleClose={handleCloseCamera}
          currentUser={currentRegisteredUser}
        />
      ) : (
        <div className={styles.mainContainer}>
          <Card>
            <Image src={Secure} alt="2fa logo" />
            <Text h3>Two Factor Authentication</Text>
            <Text css={{ textAlign: "center" }}>
              To access your account please scan your face.
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

export default Recognize;
