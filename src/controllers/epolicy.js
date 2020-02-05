const fs = require("fs");
const Config = require("../config");
const Puppeteer = require("../services/puppeteer");

function createPaEpolicyHtml(req, res, next) {
  try {
    res.render("epolicy/pa", req.query);
  } catch (err) {
    return next(err);
  }
}

function createPa2EpolicyHtml(req, res, next) {
  try {
    res.render("epolicy/pa-2", req.query);
  } catch (err) {
    return next(err);
  }
}

async function createPaEpolicyPdf(req, res, next) {
  try {
    // create folder for the policy if not exists
    var dir = `${Config.FILE_PATH}/${req.body.policyNo}`;

    if (!fs.existsSync(dir)) {
      console.log("🔨creating policy directory... %o", dir);
      fs.mkdirSync(dir);
    }

    await Puppeteer.generatePaEpolicy(req.body, dir);

    res.json({ filepath: dir });
  } catch (err) {
    return next(err);
  }
}

module.exports = {
  createPaEpolicyHtml,
  createPa2EpolicyHtml,
  createPaEpolicyPdf
};
