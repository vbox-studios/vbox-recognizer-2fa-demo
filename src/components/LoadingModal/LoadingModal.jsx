import React from "react";
import { Modal, Loading } from "@nextui-org/react";
const LoadingModal = ({ open, onClose, children }) => {
  return (
    <Modal
      animated={false}
      aria-labelledby="modal-title"
      open={open}
      onClose={onClose}
    >
      <Modal.Body>
        <Loading type="gradient">{children}</Loading>
      </Modal.Body>
    </Modal>
  );
};

export default LoadingModal;
