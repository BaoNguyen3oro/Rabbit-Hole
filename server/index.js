const express = require('express');
const cors = require('cors');
const rabbitHoles = require('./data');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get('/api/random', (req, res) => {
  const { type } = req.query; // 'wiki', 'youtube', or undefined (all)
  
  let filteredList = rabbitHoles;

  if (type && type !== 'all') {
    filteredList = rabbitHoles.filter(item => item.type === type);
  }

  if (filteredList.length === 0) {
    return res.status(404).json({ message: "No content found for this type." });
  }

  const randomIndex = Math.floor(Math.random() * filteredList.length);
  const randomItem = filteredList[randomIndex];

  res.json(randomItem);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
