// Create web server

const express = require('express');
const app = express();
const port = 3000;

const comments = [
  { username: 'alice', content: 'I like the color!' },
  { username: 'bob', content: 'I like the design!' },
  { username: 'charlie', content: 'I like the layout!' }
];

app.get('/comments', (req, res) => {
  res.send(comments);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});