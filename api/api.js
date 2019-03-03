let news = require('./news.json');
var detail = require('./detail.json');

let express = require("express");
let app = express();
let cors = require('cors');

app.use(cors());

app.listen(3000, () => {
 console.log("Server running on port 3000");
});

app.get('/get-news', (req, res, next) => {
  res.json(news);
});

app.get('/get-news-detail?:news_id', (req, res, next) => {
  let news_id = req.params.news_id;
  res.json(detail);
});

app.get('/get-related-news?:news_id', (req, res, next) => {
  let news_id = req.params.news_id;
  res.json(news);
});
