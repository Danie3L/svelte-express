const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const dynastiesRoute = require('./routes/Dynasty');
const rulersRoute = require('./routes/Ruler');
const DynastyModel = require('./models/Dynasty');
const RulerModel = require('./models/Ruler');

const PORT = 8080;

mongoose.connect(
  'mongodb+srv://admin:2pv3wiRwvYpEjOEV@cluster0.qz3py.mongodb.net/Poland?retryWrites=true&w=majority'
);
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/dynasties', dynastiesRoute);
app.use('/rulers', rulersRoute);

// app.put('/updateCountry', async (req, res) => {
//   const updatedCountry = req.body.countryData;
//   const id = req.body.id;
//   console.log(updatedCountry, id);
//   try {
//     await CountryModel.findById(id, (err, country) => {
//       country.name = updatedCountry.nameValue;
//       country.population = updatedCountry.populationValue;
//       country.president = updatedCountry.presidentValue;
//       country.id = country.id;
//       country._id = country._id;
//       country.capital_id = country.capital_id;

//       country.save();
//       res.send('updated');
//     });
//   } catch (err) {
//     console.log(err);
//   }
// });

// app.delete('/deleteCapital/:id', async (req, res) => {
//   const id = req.params.id;
//   await CapitalModel.findByIdAndRemove(id).exec();
//   res.send('deleted');
// });

// app.delete('/deleteCountry/:id', async (req, res) => {
//   const id = req.params.id;
//   await CountryModel.findByIdAndRemove(id).exec();
//   res.send('deleted');
// });

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
      console.log(result);
    })
    .catch((er) => console.log(err));
});

app.listen(PORT, () => console.log('ok'));
