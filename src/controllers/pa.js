const fs = require("fs");
const Config = require("../config");
const Puppeteer = require("../services/puppeteer");

async function createPaEDocs(req, res, next) {
  try {
    // create folder for the policy if not exists
    var dir = `${Config.FILE_PATH}/${req.body.policyNo}`;

    if (!fs.existsSync(dir)) {
      console.log("🔨creating policy directory... %o", dir);
      fs.mkdirSync(dir);
    }

    await Puppeteer.generatePaEpolicy(req.body, dir);
    await Puppeteer.generateDebitnote(req.body, dir);
    await Puppeteer.generatePolicySummary(req.body, dir);
    res.json({ filepath: dir });
  } catch (err) {
    return next(err);
  }
}

module.exports = { createPaEDocs };
