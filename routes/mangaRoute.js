import express from "express";
import { MangaReader } from "../utils/cheerio.js";
import { Genre } from "../utils/genre.js";
import { MangaInfo } from "../utils/mangaInfo.js";
import { ReadChapter } from "../utils/chapter.js";
import { SearchManga } from "../utils/search.js";
export const route = express.Router();

route.get("/manga/search/:id", async (resq, resp) => {
  const { id } = resq.params;
  if (!id) {
    return resp.status(400).json({
      message: "Route not found",
    });
  }
  const data = await SearchManga(id);
  return resp.status(200).json({
    data,
  });
});

const endpoints = ["new-release", "completed", "most-viewed", "latest-updated"];

route.get("/manga/:id", async (resq, resp) => {
  const { id } = resq.params;
  if (!endpoints.includes(id)) {
    return resp.status(200).json({
      message: `${id} endpoint not found!!`,
    });
  }
  const data = await MangaReader(id);
  return resp.status(200).json({
    data,
  });
});

route.get("/manga/genre/:genre", async (resq, resp) => {
  const { genre } = resq.params;
  if (!genre) {
    return resp.status(400).json({
      message: "genre is required",
    });
  }
  const data = await Genre(genre);
  return resp.status(200).json({
    data,
  });
});

route.get("/manga/info/:id", async (resq, resp) => {
  const { id } = resq.params;
  if (!id) {
    return resp.status(400).json({
      message: "id is required",
    });
  }
  const data = await MangaInfo(id);
  return resp.status(200).json({
    data,
  });
});

route.get("/manga/read/chapter", async (resq, resp) => {
  const { id } = resq.query;
  console.log(id);
  if (!id) {
    return resp.status(400).json({
      message: "ChapterId is required",
    });
  }
  const data = await ReadChapter(id);
  return resp.status(200).json({
    data,
  });
});
