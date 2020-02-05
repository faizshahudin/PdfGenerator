const Config = require("../config");

function validateKeys(moduleName) {
  return function(req, res, next) {
    const requiredKeys = getRequiredKeys(moduleName);
    const missingKeys = requiredKeys.filter(key => !req.body[key]);

    if (missingKeys.length) {
      res.status(400).json({
        message: `${missingKeys[0]} is required`
      });
    } else {
      next();
    }
  };
}

function getRequiredKeys(moduleName) {
  switch (moduleName) {
    case "paEpolicy":
      return Config.PA_EPOLICY_KEYS;
    case "paEdocs":
      return Config.PA_EDOCS_KEYS;
    case "debitnote":
      return Config.DEBIT_NOTE_KEYS;
    case "policysummary":
      return Config.POLICY_SUMMARY_KEYS;
  }
}

module.exports = { validateKeys };
