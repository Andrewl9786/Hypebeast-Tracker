import express from "express";

import { getPosts } from "./post/postToDb";

const router = express.Router();

router.use((req, res, next) => {
  console.log(`
    ${req.method} - ${req.url} ${new Date()}
    `);
  if (req.method === "POST") {
    console.log("request body: ");
    console.log(JSON.stringify(req.body, null, 2));
  }
  next();
});

router.route("/post").get(getPosts);

export default router
