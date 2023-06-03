import client from "./client";

const login = (emailAddress, password) =>
  client.post("/Auth/login", { emailAddress, password });

export default {
  login,
};
