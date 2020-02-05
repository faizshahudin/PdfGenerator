const puppeteer = require("puppeteer");
const querystring = require("querystring");
const Config = require("../config");

function generateDebitnote(body, folderDir) {
  return new Promise((resolve, reject) => {
    try {
      let body1 = Object.assign({}, body);
      const removeKeys = Object.keys(body1).filter(
        key => !Config.DEBIT_NOTE_KEYS.includes(key)
      );
      removeKeys.forEach(key => {
        delete body1[key];
      });

      const queryString = querystring.stringify(body1);

      (async () => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(`${Config.BASE_URL}/debitnote?${queryString}`, {
          waitUntil: "networkidle2"
        });
        await page.pdf({ path: `${folderDir}/debitnote.pdf`, format: "A4" });
        console.log("🛠 generate pdf: %o", `${folderDir}/debitnote.pdf`);
        await browser.close();
        resolve();
      })();
    } catch (err) {
      reject(err);
    }
  });
}

function generatePaEpolicy(body, folderDir) {
  return new Promise((resolve, reject) => {
    try {
      let body1 = Object.assign({}, body);

      const queryString1 = querystring.stringify(body1);

      (async () => {
        try {
          const browser = await puppeteer.launch();
          const page = await browser.newPage();
          await page.goto(`${Config.BASE_URL}/epolicy/pa?${queryString1}`, {
            waitUntil: "networkidle2"
          });
          await page.pdf({
            path: `${folderDir}/pa-epolicy.pdf`,
            format: "A4",
            headerTemplate: "<p></p>",
            footerTemplate:
              '<div class="footer" style="font-size: 10px;color: #999; margin: 15px 0;clear:both; position: relative; top: 20px;font-family:my-font"><p></p></div>',
            displayHeaderFooter: true,
            margin: {
              top: "50px",
              bottom: "60px"
            }
          });
          console.log("🛠 generate pdf: %o", `${folderDir}/pa-epolicy.pdf`);

          await browser.close();
          resolve();
        } catch (err) {
          throw err;
        }
      })();
    } catch (err) {
      reject(err);
    }
  });
}

function generatePolicySummary(body, folderDir) {
  return new Promise((resolve, reject) => {
    try {
      let body1 = Object.assign({}, body);
      const removeKeys = Object.keys(body1).filter(
        key => !Config.POLICY_SUMMARY_KEYS.includes(key)
      );

      removeKeys.forEach(key => {
        delete body1[key];
      });

      const queryString = querystring.stringify(body1);

      (async () => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(`${Config.BASE_URL}/policysummary?${queryString}`, {
          waitUntil: "networkidle2"
        });
        await page.pdf({
          path: `${folderDir}/policysummary.pdf`,
          format: "A4"
        });
        console.log("🛠 generate pdf: %o", `${folderDir}/policysummary.pdf`);
        await browser.close();
        resolve();
      })();
    } catch (err) {
      reject(err);
    }
  });
}

module.exports = {
  generateDebitnote,
  generatePaEpolicy,
  generatePolicySummary
};
