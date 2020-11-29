const express = require('express');
const multer = require('multer');
const fs = require('fs');
const router = express.Router();
const report_parser = require('../parsers/report-parcer');
const report_processor = require('../parsers/report-processor');

const uploadsFolder = 'temp';
const upload_middleware = multer({dest: uploadsFolder})

router.post('/:indicator_id', upload_middleware.single("report"), ((req, res) => {
  const indicator_id= req.params.indicator_id;
  console.log(req.body)
  const filePatch = uploadsFolder + '\\' + req.file.filename;

  const fsStram = fs.createReadStream(filePatch)
    .on('error', err => console.log(`[FILE READ ERROR] ${err}`));
    
    report_parser(fsStram, 'csv', (report) => report).then(
    result => {
      fs.unlinkSync(filePatch);
      report_processor(indicator_id, result).then(res.status(200).send());
    });
}));

module.exports = router;