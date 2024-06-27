import { Request, Response, NextFunction } from "express";
import fs from "fs";
import Post from "../mongoose-schema/post.model";

export async function savePollData(input: string | null) {
  try {
    if (input !== null) {
      console.log(JSON.parse(input).date);
      const articleDate = JSON.parse(input).date;
      const isExistedData = await Post.find({ date: articleDate });
      // console.log(isExistedData)
      if (isExistedData.length !== 0) {
        console.log("This Data exists already in db");
      } else {
        const post = new Post(JSON.parse(input));
        await post.save();
        fs.writeFileSync(
          `./src/Scrapped-text/${JSON.parse(input).date}.json`,
          JSON.stringify(JSON.parse(input), null, 2)
        );
      }
    }
  } catch (err) {}
}

export async function getPosts(req: Request, res: Response) {
  try {
    const posts = await Post.find().sort({ date: -1 });
    res.send(posts);
  } catch (err) {
    res.send(err);
  }
}
