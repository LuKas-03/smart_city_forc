const express = require('express');
const router = express.Router();
const IndicatorRepository = require('../database/models/Indicator/IndicatorRepository');

router.get('/:indicator_id', async (req, res, next) => {
  const indicator_id = req.params.indicator_id;
  const indicator = await IndicatorRepository.getOne(indicator_id);
  const fields = JSON.parse(indicator.data).fields;

  const headers = ['дата'].concat(fields).join(';');
  const joined = null //indicator.values.map(item => dateToString(item.date) + ';' + item.values.join(';')).join('\r\n');

  res.set('Content-Type', 'text/csv;charset=utf-8');
  res.set('Content-Disposition', 'attachment;filename=template.csv');
  res.send(headers + '\r\n' + joined);
});


const dateToString = function(date) {
  return `${date.getDate() - 1}.${date.getMonth() + 1}.${date.getFullYear()}`
};

module.exports = router;