import client from "./client";

const endpoint = "/api/Contact/All";

const getContacts = () => client.get(endpoint);

export default {
  getContacts,
};
