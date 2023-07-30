import { instance } from "../constants";

export const shortenService = async (data: { url: string }) => {
  const res = await instance.post("/shorten", data);
  return res.data;
};

export const getDataService = async () => {
  const res = await instance.get("/");
  return res.data;
};

export const redirectService = async (data: string | string[] | undefined) => {
  const res = await instance.post(`/${data}`);
  return res.data;
};
