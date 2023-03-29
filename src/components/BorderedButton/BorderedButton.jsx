import { Button, Text } from "@nextui-org/react";

const BorderedButton = ({ children, type, onClick }) => {
  return (
    <Button rounded bordered type={type} onClick={onClick}>
      <Text color="primary">{children}</Text>
    </Button>
  );
};

export default BorderedButton;
