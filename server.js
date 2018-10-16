const express = require('express');
const path = require('path');
const secure = require('ssl-express-www');

const app = express();

// Force SSL
app.use(secure);
app.use(express.static(__dirname + '/dist'));

app.all('*', (req, res) => {
  res.status(200).sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(process.env.PORT || 8070);
