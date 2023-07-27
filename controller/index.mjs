import { nanoid } from "nanoid";
import { isURL } from "../helper/index.mjs";
import { URL } from "../model/index.mjs";

export const shortenController = async (req, res) => {
  const { url } = req.body;
  const http = "https://";

  if (!url) return res.status(400).json({ error: "provide a URl" });

  const originURL = isURL(url) ? url : http + url;

  const urlExists = await URL.exists({ originURL: originURL });
  if (urlExists) return res.status(401).json({ error: "url already exists" });

  const shortURL = new URL({ originURL: originURL, shortId: nanoid(5) });
  shortURL.save();
  res.status(201).json({ msg: "short url created" });
};

export const redirectController = async (req, res) => {
  const { shortId } = req.params;
  const destination = await URL.findOne({ shortId: shortId });
  if (!destination)
    return res.status(404).json({ error: "there is no corresponding url" });

  res.status(201).redirect(destination.originURL);
};

export const getDataController = async (req, res) => {
  const results = await URL.find();
  const allUrls = [];
  results.map((item) => {
    allUrls.push({ originURL: item.originURL, shortId: item.shortId });
  });
  res.status(200).json({ allUrls: allUrls });
};
