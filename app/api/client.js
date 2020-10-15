import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.178.213:8000/api",
});

export default apiClient;
