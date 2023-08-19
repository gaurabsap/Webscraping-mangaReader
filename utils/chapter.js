import * as cheerio from "cheerio";
import puppeteer from "puppeteer";

export const ReadChapter = async (id) => {
  const browser = await puppeteer.launch({
    headless: true,
  });
  const page = await browser.newPage();
  await page.goto(`https://mangareader.to/read/${id}`);
  await page.evaluate(() => {
    const aTag = document.querySelector(
      '.rtl-row.mode-item[data-value="vertical"]'
    );
    if (aTag) {
      aTag.click();
    }
  });
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const updatedContent = await page.content();
  const chapterImages = [];
  const $ = cheerio.load(updatedContent);
  $("#vertical-content > .iv-card", updatedContent).each((i, data) => {
    const image = $(data).attr("data-url");
    // console.log(image);
    chapterImages.push({
      image,
    });
  });
  return {
    chapterImages: chapterImages,
  };
};

// ReadChapter();
