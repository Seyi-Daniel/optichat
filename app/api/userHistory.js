import client from "./client";

const endpoint = "/transactions";

const getUserHistory = () => client.get(endpoint);

export default {
  getUserHistory,
};
