import * as cheerio from "cheerio";
import axios from "axios";

export const Genre = async (end) => {
  const resq = await axios.get(`https://mangareader.to/genre/${end}`);

  const html = resq.data;
  // console.log(html);
  const $ = cheerio.load(html);
  const Mangas = [];
  $(".mls-wrap > .item", html).each((i, data) => {
    const id = $(data).find("a").attr("href").trim().replace("/", "");
    const images = $(data).find("a > img").attr("src");
    // console.log(images);
    const title = $(data).find(".manga-detail > h3 > a").text();
    const lang = $(data).find("a > span").text();
    // console.log(lang);
    const genrearr = [];
    $(data)
      .find(".fd-infor > span")
      .each((i, gen) => {
        const genres = $(gen).text().trim().replace(/\s+/g, " ");
        genrearr.push(genres);
      });
    // console.log(genrearr);
    Mangas.push({
      id,
      title,
      images,
      lang,
      genre: genrearr,
    });
    // console.log(Mangas);
  });
  return Mangas;
};
