import Image from "next/image";
import Head from "next/head";
import { UserProvider } from "../context/auth";
import Logo from "./../../public/icon/vbox-vertical-white.png";

export default function RootLayout({ children }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "2rem",
        height: "100vh",
      }}
    >
      <Image src={Logo} width={100} />
      {children}
    </div>
  );
}
