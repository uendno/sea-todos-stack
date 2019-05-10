const express = require('express');
const app = express();
const path = require('path');
const proxy = require('http-proxy-middleware')
const port = process.env.PORT || 5000;

let apiUrl = 'http://localhost:8080';

switch (process.env.REACT_APP_ENV) {
  case 'dev':
    apiUrl = 'http://sea-todos-backend'
    break;
  default:
    break;
}

app.use(express.static(path.join(__dirname, 'build')));

app.use('/api', proxy({
  target: apiUrl,
  pathRewrite: {
    'api': ''
  },
}))

// 404
app.get('*', (req, res) => {
  res.sendfile(path.join(__dirname = 'build/index.html'));
})

app.listen(port, (req, res) => {
  console.log(`server listening on port: ${port}`);
})