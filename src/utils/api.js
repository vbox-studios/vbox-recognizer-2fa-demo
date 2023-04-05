import axios from "axios";

export const recogApi = axios.create({
  baseURL: "https://vbox-recognizer.p.rapidapi.com/",
  headers: {
    "Content-Type": "application/json",
  },
});
