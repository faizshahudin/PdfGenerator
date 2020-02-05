const express = require("express");
const router = express.Router();
const PolicySummaryCtrl = require("../controllers/policysummary");
const Validation = require("../middlewares/validation");

router
  .route("/")
  .get(PolicySummaryCtrl.createPolicySummaryHtml)
  .post(
    Validation.validateKeys("policysummary"),
    PolicySummaryCtrl.createPolicySummaryPdf
  );

module.exports = router;
