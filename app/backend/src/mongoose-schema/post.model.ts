import { model, Schema } from "mongoose";

const releaseSchema = new Schema(
  {
    retailerBrand: String,
    collection: String,
    releaseDate: String,
  },
  {
    timestamps: true,
  }
);

const postSchema = new Schema(
  {
    date: String,
    fashionRelease: [releaseSchema],
  },
  {
    timestamps: true,
  }
);

export default model("post", postSchema);
