import axios, { AxiosInstance } from "axios";
import { store } from "../store";
import { useSelector } from "react-redux";
import { RootState } from "../store/reducers";

const instance: AxiosInstance = axios.create({
  baseURL: "http://localhost:5000",
});

// axios.defaults.headers.common["Authorization"] = userToken;

export default instance;
