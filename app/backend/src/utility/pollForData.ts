import puppeteer from "puppeteer";
import { savePollData } from "../post/postToDb";
import { text } from "body-parser";
import { formatData } from "./apiFormat.js";
import { articleData } from "../model/types";

export default async function pollForData(url: string) {
  try {
    const browser = await puppeteer.launch({
      executablePath: "/usr/bin/chromium-browser",
    });
    const page = await browser.newPage();

    await page.setExtraHTTPHeaders({
      MyCustomHeader1: "2",
    });

    console.log(":::::Loading Main Page:::::\n");
    await page.goto(url);
    // Scrap for posts title link and posts date
    const postHrefs = await page.$$eval("a.title", (elements) =>
      elements.map((el) => el.href)
    );
    const postDates = await page.$$eval(
      ".post-box-meta-author-time > .time > time",
      (elements) =>
        elements.map((el) => {
          if (el.getAttribute("datetime")) {
            return el.getAttribute("datetime")?.slice(0, 10);
          } else {
            return el.textContent;
          }
        })
    );

    if (postHrefs.length === 0 || postDates.length === 0) {
      throw new Error("Not able to scrape article links or article dates\n");
    }

    console.log(":::::Accessing Individual Article:::::\n");
    // $ gives 1 result, $$ gives all the matches
    for (let i = 0; i < postHrefs.length; i++) {
      const href = postHrefs[i];
      console.log("Link::", href, "Date::", postDates[i], "\n");
      const newPage = await browser.newPage();
      console.log(":::::Loading New Page:::::\n");
      await newPage.goto(href);
      console.log(":::::Getting Data:::::\n");
      // await newPage.screenshot({ path: `./src/Scrapped-text/${postDates[i]}.png`})

      // await newPage.waitForNavigation({waitUntil: 'networkidle0'}),
      // await newPage.waitForSelector('.modal-close-btn'),
      // await newPage.click('.modal-close-btn')
      const textData = (
        await newPage.$$eval(".post-body-content > p", (el) =>
          el.map((item) => item.textContent)
        )
      ).join();
      // console.log(textData)
      let formattedData = await formatData(textData, postDates[i]);
      // console.log(formattedData)

      savePollData(formattedData);
      await newPage.close();
    }
    await browser.close();
  } catch (error) {
    console.log(":::::ERROR:::::", error);
  }
}
