import React from "react";
import RootLayout from "@/layouts/layout";
import Card from "@/components/Card/Card";
import BorderedButton from "@/components/BorderedButton/BorderedButton";
import { Text, Spacer } from "@nextui-org/react";
import Image from "next/image";
import People from "./../../../public/img/header-img.svg";
import styles from "@/styles/auth.module.css";
import Link from "next/link";
const Home = () => {
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
