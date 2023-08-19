# Manga API

Welcome to the Manga API! This API provides endpoints to retrieve information about manga, search for manga, and read manga chapters.

## Table of Contents

- [Introduction](#introduction)
- [Routes](#routes)
- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Manga API is a RESTful API built with Express.js that allows you to fetch manga information, search for manga, and read manga chapters. It utilizes the Cheerio library for web scraping and provides various endpoints for different functionalities.

## Routes

The API provides the following main routes:

- `/`: A simple welcome message.
- `/routes`: Displays the available API routes.

For manga-related information:

- `/manga/:id`: Get manga information based on specific endpoints.
- `/manga/search/:id`: Search for manga by name.
- `/manga/genre/:genre`: Get manga by genre.
- `/manga/info/:id`: Get detailed information about a specific manga.
- `/manga/read/chapter`: Read manga chapters.

## Installation

1. Clone this repository: `git clone https://github.com/your-username/manga-api.git`
2. Navigate to the project folder: `cd manga-api`
3. Install dependencies: `npm install`

## Usage

1. Start the server: `npm start`
2. Access the API via `http://localhost:your-port`

## Endpoints

- `/manga/:id`: Replace `:id` with endpoints like `new-release`, `completed`, `most-viewed`, or `latest-updated` to get manga information.
- `/manga/search/:id`: Replace `:id` with the name of the manga you want to search for.
- `/manga/genre/:genre`: Replace `:genre` with the desired genre to get manga by that genre.
- `/manga/info/:id`: Replace `:id` with the ID of the specific manga you want detailed information about.
- `/manga/read/chapter?chapterId=:chapterId`: Replace `:chapterId` with the chapter ID to read manga chapters.




---

Feel free to customize this README template with more details about your project, including installation instructions, prerequisites, and any additional information you think is important for users and contributors.

