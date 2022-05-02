const express = require('express');
const DynastyModel = require('../models/Dynasty');
const router = express.Router();
router.get('/getDynasties', (req, res) => {
  DynastyModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
      console.log(result);
    }
  });
});

module.exports = router;
