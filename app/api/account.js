import client from "./client";

const endpoint = "/api/Account/";

const getAccount = (nameid) => client.get(endpoint + nameid);

export default {
  getAccount,
};
