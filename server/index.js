const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8080;
app.use(cors());
app.get('/capitals', (req, res) => {
  res.json({ name: 'Warsaw' });
});

app.listen(PORT, () => console.log('ok'));
