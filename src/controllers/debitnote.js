const fs = require("fs");
const Config = require("../config");
const Puppeteer = require("../services/puppeteer");

function createDebitNoteHtml(req, res, next) {
  try {
    res.render("debitnote", req.query);
  } catch (err) {
    return next(err);
  }
}

async function createDebitNotePdf(req, res, next) {
  try {
    // create folder for the policy if not exists
    var dir = `${Config.FILE_PATH}/${req.body.policyNo}`;

    if (!fs.existsSync(dir)) {
      console.log("🔨creating policy directory... %o", dir);
      fs.mkdirSync(dir);
    }

    // generate query string from req.body
    await Puppeteer.generateDebitnote(req.body, dir);
    res.json({ filepath: dir });
  } catch (err) {
    return next(err);
  }
}

module.exports = { createDebitNoteHtml, createDebitNotePdf };
