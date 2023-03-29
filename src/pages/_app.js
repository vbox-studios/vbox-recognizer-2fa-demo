import "./../styles/globals.css";
import { NextUIProvider, createTheme } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";
import { UserProvider } from "@/context/auth";

export default function App({ Component, pageProps }) {
  const lightTheme = createTheme({
    type: "light",
    theme: {
      colors: {
        primary: "#B8F1ED",
        primaryHover: "#ff295a",
        secondary: "#aa223e",
        secondaryHover: "#be4a62",
      },
      fonts: {
        p: "Poppins",
        h1: "Montserrat",
        h2: "Montserrat",
        h3: "Montserrat",
        h4: "Montserrat",
        h5: "Montserrat",
        h6: "Montserrat",
      },
    },
  });

  const darkTheme = createTheme({
    type: "dark",
    theme: {
      colors: {
        primary: "#B8F1ED",
        primaryHover: "#ff295a",
        secondary: "#aa223e",
        secondaryHover: "#be4a62",
      },
      fonts: {
        p: "Poppins",
        h1: "Montserrat",
        h2: "Montserrat",
        h3: "Montserrat",
        h4: "Montserrat",
        h5: "Montserrat",
        h6: "Montserrat",
      },
    },
  });
  return (
    <UserProvider>
      <div id="portal"></div>
      <ThemeProvider
        defaultTheme="system"
        enableSystem={true}
        attribute="class"
        enableColorScheme={false}
        themes={["light", "dark"]}
        value={{ dark: darkTheme.className, light: lightTheme.className }}
      >
        <NextUIProvider>
          <Component {...pageProps} />
        </NextUIProvider>
      </ThemeProvider>
    </UserProvider>
  );
}
