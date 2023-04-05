import { useState } from "react";
import { createPortal } from "react-dom";
import ReactCamera from "./ReactCamera";
import { recogApi } from "@/utils/api";
import { useRouter } from "next/navigation";
import LoadingModal from "../LoadingModal/LoadingModal";
import DialogBox from "../DialogBox/DialogBox";

import { Text } from "@nextui-org/react";
const LoginCamera = ({ handleClose }) => {
  const [image, setImage] = useState();
  const [loading, setLoading] = useState(false);
  const [dialog, setDialog] = useState(false);
  const router = useRouter();

  const submitHandler = (image) => {
    setLoading(true);
    recogApi
      .post(
        `/recognize`,
        {
          image: image,
          group_name: "Auth Test",
        },
        {
          headers: {
            "X-RapidAPI-Key": NEXT_PUBLIC_RAPID_API_KEY,
            "X-RapidAPI-Host": NEXT_PUBLIC_RAPID_API_HOST,
          },
        }
      )
      .then((res) => {
        console.log(res);
        if (res.data.transaction.status === "failed") {
          setLoading(false);
          return setDialog(true);
        }
        if (res.data.transaction.status === "success") {
          setLoading(false);
          router.push("/home");
        }
      })
      .catch((err) => alert(err));
  };
  const closeHandler = () => {
    handleClose();
  };
  return (
    <div
      style={{
        position: "absolute",
        zIndex: 4,
        width: "100vw",
        height: "100vh",
      }}
    >
      {loading ? (
        <LoadingModal open={loading} onClose={setLoading}>
          <Text>Uploading Image</Text>
        </LoadingModal>
      ) : null}
      {dialog ? (
        <DialogBox
          heading={"Error"}
          confirmButtonName={"Retry"}
          confirmButtonOnClick={() => setDialog(false)}
          open={dialog}
          onClose={setDialog}
        >
          {" "}
          <Text>No faces were detected in this image.</Text>
        </DialogBox>
      ) : null}

      <ReactCamera
        page={4}
        imageState={image}
        setState={setImage}
        submitHandler={submitHandler}
        closeHandler={closeHandler}
      />
    </div>
  );
};

export default LoginCamera;
