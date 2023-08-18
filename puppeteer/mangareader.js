import puppeteer from "puppeteer";
const MangaReader = async () => {
  const browser = await puppeteer.launch({
    headless: true,
  });
  const page = await browser.newPage();
  await page.goto("https://mangareader.to/new-release");
  //   await page.setDefaultNavigationTimeout(0);
  const titles = await page.evaluate(() => {
    const data = document.querySelectorAll(".mls-wrap .item");
    return Array.from(data, (e) => {
      const id = e.querySelector("a").getAttribute("href");
      const title = e.querySelector(".manga-detail h3 a").getAttribute("title");
      const lang = e.querySelector("a span").innerHTML;
      const image = e.querySelector("a img").getAttribute("src");
      const genreElements = e.querySelectorAll(".fd-infor span");
      const genres = [];
      genreElements.forEach((gen) => {
        const genr = gen.textContent.trim().replace(/\s+/g, " ");
        genres.push(genr);
      });

      return {
        id,
        title,
        image,
        lang,
        genres,
      };
    });
  });
  console.log(titles);
  await browser.close();
};

MangaReader();
