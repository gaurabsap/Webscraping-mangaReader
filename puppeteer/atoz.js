import puppeteer from "puppeteer";
const Gogoanime = async () => {
  const browser = await puppeteer.launch({
    headless: true,
  });
  const page = await browser.newPage();
  await page.goto("https://aniwatch.to/az-list/A");

  const titles = await page.evaluate(() => {
    const titleElements = document.querySelectorAll(
      ".film_list-wrap .flw-item"
    );
    const titles = Array.from(titleElements, (e) => {
      const poster = e.querySelector(".film-poster");
      const detail = e.querySelector(".film-detail");
      console.log(detail);
      return {
        id: poster.querySelector("a").getAttribute("href"),
        title: detail.querySelector("h3 a").innerHTML,
        image: poster.querySelector("img").getAttribute("data-src"),
        type: detail.querySelector(".fd-infor .fdi-item").textContent,
        time: detail.querySelector(".fd-infor .fdi-duration").textContent,
        url: `https://aniwatch.to/watch${poster
          .querySelector("a")
          .getAttribute("href")}`,
      };
    });
    return titles;
  });
  console.log(titles);
  await browser.close();
};

Gogoanime();
