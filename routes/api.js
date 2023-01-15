'use strict';

const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  let convertHandler = new ConvertHandler();

  app.get('/api/convert', (req, res) => {
    const { input } = req.query;

    const num = convertHandler.getNum(input);
    const unit = convertHandler.getUnit(input);

    if (num === 'invalid number' && unit === 'invalid unit') {
      return res.send('invalid number and unit');
    }

    if (num === 'invalid number') {
      return res.send(num);
    }

    if (unit === 'invalid unit') {
      return res.send(unit);
    }

    res.json(
      convertHandler.getString(
        num,
        unit,
        convertHandler.convert(num, unit),
        convertHandler.getReturnUnit(unit)
      )
    );
  });
};
