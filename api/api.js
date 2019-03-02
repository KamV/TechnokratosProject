let news = require('./news.json');
var detail = require('./detail.json');

let express = require("express");
let app = express();

app.listen(3000, () => {
 console.log("Server running on port 3000");
});

app.get('/get-news', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.json(news);
});

app.get('/get-news-detail?:news_id', (req, res, next) => {
  let news_id = req.params.news_id;
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.json(detail);
});

app.get('/get-related-news?:news_id', (req, res, next) => {
  let news_id = req.params.news_id;
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.json(news);
});
