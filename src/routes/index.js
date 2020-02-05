const express = require("express");
const router = express.Router();
const PaCtrl = require("../controllers/pa");
const Validation = require("../middlewares/validation");
const epolicy = require("./epolicy");
const policysummary = require("./policysummary");
const debitnote = require("./debitnote");

router.get("/", (req, res, next) => {
  res.send("🔥 Running on port: 3011");
});

router.post("/pa", Validation.validateKeys("paEdocs"), PaCtrl.createPaEDocs);

router.use("/epolicy", epolicy);
router.use("/policysummary", policysummary);
router.use("/debitnote", debitnote);

module.exports = router;
