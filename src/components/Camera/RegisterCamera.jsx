import { useContext, useEffect, useState } from "react";

import { recogApi } from "@/utils/api";
import DialogBox from "../DialogBox/DialogBox";
import LoadingModal from "../LoadingModal/LoadingModal";
import { Text } from "@nextui-org/react";
import ReactCamera from "./ReactCamera";

const RegisterCamera = ({ setPage, page, currentUser, handleClose }) => {
  const [image, setImage] = useState();
  const [loading, setLoading] = useState(false);
  const [dialog, setDialog] = useState(false);

  const submitHandler = (image) => {
    setLoading(true);
    console.log(currentUser);
    console.log(process.env.NEXT_PUBLIC_APP_ID);
    console.log(image);

    recogApi
      .post(
        `/register`,
        {
          image: image,
          identifier: `${currentUser.name} ${currentUser.surname}`,
          group_name: "Auth Test",
        },
        {
          headers: {
            "X-RapidAPI-Key":
              "8df8ab70b7msh0c987753ad5356dp1690d4jsn743ac97bd6e8",
            "X-RapidAPI-Host": "vbox-recognizer.p.rapidapi.com",
          },
        }
      )
      .then((res) => {
        console.log(res);

        if (res.data.transaction.status === "failed") {
          return setDialog(true);
        }
        console.log(page);

        if (page === 1) {
          console.log("setting page to 2");
          setLoading(false);
          return setPage(2);
        }

        if (page === 2) {
          console.log("setting page to 3");
          setLoading(false);

          return setPage(3);
        }
        setLoading(false);
      })
      .catch((err) => console.log(err));
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
        page={page}
        setState={setImage}
        submitHandler={submitHandler}
      />
    </div>
  );
};

export default RegisterCamera;
