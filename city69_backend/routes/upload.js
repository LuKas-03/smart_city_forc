const express = require('express');
const multer = require('multer');
const fs = require('fs');
const router = express.Router();
const report_parser = require('../parsers/report-parcer');
const report_processor = require('../parsers/report-processor');

const uloadsFolder = 'temp';
const upload_middleware = multer({dest: uloadsFolder})

router.post('/:provider/:city', upload_middleware.single("report"), ((req, res) => {
  const provider= req.params.provider;
  const city =  req.params.city;
  const filePatch = uloadsFolder + '\\' + req.file.filename;

  const fsStram = fs.createReadStream(filePatch)
    .on('error', err => console.log(`[FILE READ ERROR] ${err}`));
    
    report_parser(fsStram, 'csv', (report) => report).then(
    result => {
      fs.unlinkSync(filePatch);
      report_processor(provider, city, result).then(res.status(200).send());
    });
}));

module.exports = router;