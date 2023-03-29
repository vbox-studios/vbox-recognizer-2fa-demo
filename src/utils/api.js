import axios from "axios";

export const recogApi = axios.create({
  baseURL: "https://v1.vboxrecognizer.com/",
  headers: {
    "Content-Type": "application/json",
  },
});
