import express from "express";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

/** DO NOT CHANGE THIS ROUTE - it serves our front-end */
app.get("/", function (req, res, next) {
  res.render("index", { title: "Books" });
});

export const cats = [
  {
    id: 1,
    name: "Tony",
    human: "Liz.K",
    hobby: "cling",
  },
  {
    id: 2,
    name: "Poppy",
    human: "Tim",
    hobby: "screm",
  },
  {
    id: 3,
    name: "Narla",
    human: "Mell",
    hobby: "obstruct",
  },
];

/* Your tasks for part 1: 🔻 
- 👉 Add request handlers for your API that will handle requests to the path "/cats" for all the 
cats, providing the data in the cats array in this file. Test this in your browser.
- 👉 Add code to also handle requests for a cat by id using params and cats by name using a query. 
Test this in your browser.
- 👉 Go to main.js in the public/js folder, and write the code needed to hook up the button with id 
"get-cats" to show the data on the front end.
*/

// get all the cats and query by name
app.get("/cats", function (req, res) {
  // console.log(req.query);
  let result;
  if (req.query.name !== undefined) {
    let search = req.query.name;
    result = cats.filter((cat) => {
      return cat.name.toLowerCase().includes(search.toLowerCase());
    });
  } else {
    result = cats;
  }
  res.json({
    success: "true",
    message: "The cat/s you requested:",
    data: result,
  });
});

app.get("/cats/:id", function (req, res) {
  const id = Number(req.params.id);
  res.json({
    success: "true",
    message: `Cat with id:${id}`,
    data: cats[id - 1],
  });
});

export default app;
