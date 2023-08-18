import axios from "axios";
import * as cheerio from "cheerio";

export const MangaInfo = async (id) => {
  const resq = await axios.get(`https://mangareader.to/${id}`);
  const html = resq.data;
  const $ = cheerio.load(html);
  const Info = [];
  $(".anis-content", html).each((i, data) => {
    const image = $(data).find(".anisc-poster > .manga-poster img").attr("src");
    const title = $(data).find(".anisc-detail > h2").text();
    const othertitle = $(data).find(".anisc-detail > .manga-name-or").text();
    const url = $(data).find(".manga-buttons > a").attr("href");
    const genres = [];
    $(data)
      .find(".sort-desc > .genres")
      .each((i, gen) => {
        const genreText = $(gen).text().trim();
        const rawgen = genreText.split("\n").map((genre) => genre.trim());
        // console.log(rawgen);
        const filarr = rawgen.filter((genre) => genre !== "");
        genres.push(...filarr);
      });

    const desc = $(data)
      .find(".description")
      .text()
      .trim()
      .replace(/\s+/g, " ");
    const otherInfo = {};
    $(data)
      .find(".anisc-info-wrap > .anisc-info > .item ")
      .each((i, dat) => {
        const label = $(dat).find(".item-head").text().replace(":", "");
        const status = $(dat).find(".name").text();
        otherInfo[label] = status;
      });
    Info.push({
      title,
      othertitle,
      image,
      desc,
      genres,
      url: `https://mangareader.to${url}`,
      otherInfo,
    });
  });
  const Chapters = [];
  $(".chapters-list-ul > .reading-list > .item", html).each((i, chap) => {
    const id = $(chap).find("a").attr("href").replace("/read/", "");
    const url = $(chap).find("a").attr("href");
    const title = $(chap).find("a > .name").text();
    // console.log(id);
    Chapters.push({
      chapterId: id,
      title,
      url: `https://mangareader.to${url}`,
    });
  });
  // console.log(Chapters);
  return {
    Info,
    Chapters,
  };
};

// MangaInfo();
