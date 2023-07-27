import { Schema, model } from "mongoose";

const URLSchema = new Schema({
  shortId: {
    type: String,
    required: true,
  },
  originURL: {
    type: String,
    required: true,
  },
});

export const URL = model("urls", URLSchema);
