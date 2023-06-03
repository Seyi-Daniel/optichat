import client from "./client";

const endpoint = "/api/Message/";

const getChat = (nameid) => client.get(endpoint + nameid);

const sendChat = (data) => client.post(endpoint, data);

export default {
  getChat,
  sendChat,
};
