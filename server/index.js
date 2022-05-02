const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const dynastiesRoute = require('./routes/Dynasty');
const rulersRoute = require('./routes/Ruler');
const DynastyModel = require('./models/Dynasty');
const RulerModel = require('./models/Ruler');
const dotenv = require('dotenv').config();
const PORT = 8080;

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.qz3py.mongodb.net/Poland?retryWrites=true&w=majority`
);
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/dynasties', dynastiesRoute);
app.use('/rulers', rulersRoute);

app.put('/updateRuler', async (req, res) => {
  const name = req.body.nameValue;
  const id = req.body.id;
  console.log(name, id);
  try {
    await RulerModel.findById(id, (err, ruler) => {
      ruler.name = name;
      ruler.save();
      res.send('updated');
    });
  } catch (err) {
    console.log(err);
  }
});

app.delete('/deleteRuler/:id', async (req, res) => {
  const id = req.params.id;
  await RulerModel.findByIdAndRemove(id).exec();
  res.send('deleted');
});
let rulers;
app.post('/postDynastyName', async (req, res) => {
  const name = req.body.name;
  console.log(name);
  dynasty = await DynastyModel.findOne({ name });
  console.log(dynasty.id);
  rulers = await RulerModel.find({ dynasty_id: dynasty.id });
  app.get('/filteredDynasty', (req, res) => {
    res.send(rulers);
  });
});

app.post('/postNewRuler', async (req, res) => {
  const name = req.body.nameValue;
  const dynasty = req.body.dynasty;

  switch (dynasty) {
    case 'Piastowie':
      await RulerModel.create({ name: name, dynasty_id: 0 });
      break;
    case 'Jagiellonowie':
      await RulerModel.create({ name: name, dynasty_id: 1 });
      break;
    case 'Wazowie':
      await RulerModel.create({ name: name, dynasty_id: 2 });
      break;
  }
});

app.get('/getAll', (req, res) => {
  DynastyModel.aggregate([
    {
      $lookup: {
        from: 'rulers',
        localField: 'id',
        foreignField: 'dynasty_id',
        as: 'key',
      },
    },
  ])
    .then((result) => {
      res.json(result);
    })
    .catch((er) => console.log(err));
});

app.listen(PORT, () => console.log('ok'));
