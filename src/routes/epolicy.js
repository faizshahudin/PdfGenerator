const express = require("express");
const router = express.Router();
const EpolicyCtrl = require("../controllers/epolicy");
const Validation = require("../middlewares/validation");

router
  .route("/pa")
  .get(EpolicyCtrl.createPaEpolicyHtml)
  .post(Validation.validateKeys("paEpolicy"), EpolicyCtrl.createPaEpolicyPdf);

router.route("/pa/2").get(EpolicyCtrl.createPa2EpolicyHtml);

module.exports = router;
