const fs = require("fs");
const Config = require("../config");
const Puppeteer = require("../services/puppeteer");

function createPolicySummaryHtml(req, res, next) {
  try {
    res.render("policysummary", req.query);
  } catch (err) {
    return next(err);
  }
}

async function createPolicySummaryPdf(req, res, next) {
  try {
    // create folder for the policy if not exists
    var dir = `${Config.FILE_PATH}/${req.body.policyNo}`;

    if (!fs.existsSync(dir)) {
      console.log("🔨creating policy directory... %o", dir);
      fs.mkdirSync(dir);
    }

    // generate query string from request body
    await Puppeteer.generatePolicySummary(req.body, dir);
    res.json({ filepath: dir });
  } catch (err) {
    return next(err);
  }
}

module.exports = { createPolicySummaryHtml, createPolicySummaryPdf };
