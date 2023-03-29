import React from "react";
import { Card as NextUICard } from "@nextui-org/react";
const Card = ({ children }) => {
  return (
    <NextUICard
      css={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "90%",
        height: "max-content",
      }}
    >
      <div
        style={{
          margin: "1rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {children}
      </div>
    </NextUICard>
  );
};

export default Card;
