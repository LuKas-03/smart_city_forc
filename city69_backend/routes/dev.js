const express = require('express');
const fs = require('fs');
const stat_gibdd = require('../integrations/stat_gibdd');
const report_parser = require('../parsers/report-parcer');
const report_processor = require('../parsers/report-processor');
const router = express.Router();

router.get('/gibdd', ((req, res) => {
  stat_gibdd(["1"], "MONTHS:9.2020", ["71140"], ["71171"], 
    (result) => res.send(result)
  );
}))

router.get('/parse', ((req, res) => {
  const fsStram = fs.createReadStream('Городской жилищный фонд.csv')
    .on('error', err => console.log(`[FILE READ ERROR] ${err}`));
    
    report_parser(fsStram, 'csv', (report) => report).then(
    result => res.send(report_processor('БЛАГОУСТРОЙСТВО ЖИЛИЩНОГО ФОНДА', result))
  );
}))

module.exports = router;