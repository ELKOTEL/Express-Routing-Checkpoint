const express = require('express');

const app = express();

const myLogger = function (req, res, next) {
    const date = new Date();
    const hour = date.getHours();
    const day = date.getDate();
    if (day >= 0 && day <= 4 && hour >= 9 && hour <= 17) {
      next();
    } else {
      res.send(
        "Sorry ! Server is available only between Monday and Friday from 9 to 17"
      );
    }
  }

const port = 8080;

app.use(myLogger);

app.use(express.static('public'))



app.listen(port,(error) => {
    error?
    console.log(error):
    console.log('The server is running, ' +
        ' please, open your browser at http://localhost:%s', 
        port);
  });