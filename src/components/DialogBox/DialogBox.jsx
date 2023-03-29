import React from "react";
import { Modal, Text, Button } from "@nextui-org/react";

const DialogBox = ({
  open,
  onClose,
  heading,
  children,
  confirmButtonName,
  confirmButtonOnClick,
  canCancel,
}) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Modal.Header>
        <Text h3>{heading}</Text>
      </Modal.Header>
      <Modal.Body>
        <Text>{children}</Text>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={confirmButtonOnClick}>{confirmButtonName}</Button>
        {canCancel && <Button onClick={() => onClose(false)}>Cancel</Button>}
      </Modal.Footer>
    </Modal>
  );
};

export default DialogBox;
