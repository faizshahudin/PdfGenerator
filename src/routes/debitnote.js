const express = require("express");
const router = express.Router();
const DebitNoteCtrl = require("../controllers/debitnote");
const Validation = require("../middlewares/validation");

router
  .route("/")
  .get(DebitNoteCtrl.createDebitNoteHtml)
  .post(Validation.validateKeys("debitnote"), DebitNoteCtrl.createDebitNotePdf);

module.exports = router;
