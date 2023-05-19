import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.45.51:9000/api",
});

// apiClient.get("/listings").then((response) => {
//   if (!response.ok) {
//     response.problem;
//   }
// });

export default apiClient;
