import React, { useCallback, useRef, useState, useEffect } from "react";
import Webcam from "react-webcam";
import { useRouter } from "next/router";
import { Camera as CameraIcon } from "react-iconly";
import styles from "./camera.module.css";
import Image from "next/image";
import { Text, Button, yellow } from "@nextui-org/react";
import BoundingBox from "./../../../public/img/camera-app-bounding-box.svg";
const videoConstraints = {
  width: 1920,
  height: 720,
  facingMode: "user",
};

const ReactCamera = ({ setState, submitHandler, page }) => {
  const [cameraDims, setCameraDims] = useState({
    height: 1920,
    width: 720,
  });
  useEffect(() => {
    if (typeof window !== "undefined") {
      return () => {
        setCameraDims({
          ...cameraDims,
          height: window.innerHeight,
          width: window.innerWidth,
        });
      };
    }
  }, []);

  const router = useRouter();
  const webcamRef = useRef(null);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(imageSrc);
    setState(imageSrc);

    if (page === 3) {
      router.push("/register/success");
    }

    if (page === 4) {
      return submitHandler(imageSrc);
    }

    submitHandler(imageSrc);
  };

  return (
    <div className={styles.cameraContainer}>
      <Webcam
        audio={false}
        height={window.innerHeight}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={window.innerWidth}
        videoConstraints={videoConstraints}
      />
      <div className={styles.boundingBoxContainer}>
        <Image src={BoundingBox} width={250} />
        {page === 1 && <Text color="#b8f1ed">Please face forward.</Text>}
        {page === 2 && <Text color="#b8f1ed">Please face to the right.</Text>}
        {page === 3 && <Text color="#b8f1ed">Please face to the left.</Text>}
        {page === 4 && (
          <Text color="white">
            Please centre your face in the bounding box.
          </Text>
        )}
      </div>

      <div className={styles.controlsContainer}>
        <div className={styles.cameraButton} onClick={() => capture()}>
          <CameraIcon set="bold" style={{ color: "var(--primary-color)" }} />
        </div>
      </div>
    </div>
  );
};

export default ReactCamera;
