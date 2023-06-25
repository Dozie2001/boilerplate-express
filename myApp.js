require('dotenv').config();
let express = require('express');
let app = express();
let response = ''
const signal = (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
}
/* app.get("/", signal); */
console.log('Hello World');

app.use((req, res, next) => {
    let string = req.method + " " + req.path + "-" + req.ip
    console.log(string)
    next()
})

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
})

app.use("/public", express.static(__dirname + "/public"));

app.get("/json", (req, res) => {
  if (process.env.MESSAGE_STYLE === 'uppercase') {
    response = 'Hello json'.toUpperCase();
  }else {
    response = 'Hello json'
  }
    res.json({
      "message": response
    })
});

































module.exports = app;

















