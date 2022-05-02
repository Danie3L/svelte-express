const express = require('express');
const RulerModel = require('../models/Ruler');
const router = express.Router();
router.get('/getRulers', (req, res) => {
  RulerModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
      console.log(result);
    }
  });
});
module.exports = router;
