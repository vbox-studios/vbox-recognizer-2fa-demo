import Card from "@/components/Card/Card";
import RootLayout from "@/layouts/layout";
import React from "react";
import SuccessImage from "./../../../../public/img/success.png";
import { Text, Link } from "@nextui-org/react";
import Image from "next/image";
import styles from "@/styles/auth.module.css";
const Success = () => {
  return (
    <RootLayout>
      <div className={styles.mainContainer}>
        <Card>
          <Text h3>Success!</Text>
          <Image src={SuccessImage} alt="success image" width={200} />
          <Text>You've successfully created your account!</Text>
          <Link href="/login">Proceed to Log In →</Link>
        </Card>
      </div>
    </RootLayout>
  );
};

export default Success;
