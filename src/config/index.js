const isProduction = process.env.NODE_ENV === "production";

const FILE_PATH = isProduction ? process.env.FILE_PATH : ".";

const BASE_URL = isProduction ? process.env.BASE_URL : "http://localhost:4000";

const PA_EPOLICY_KEYS = [
  "name",
  "address",
  "policyNo",
  "repPolicyNo",
  "accountNo",
  "agentName",
  "productName",
  "periodStart",
  "periodEnd",
  "premium",
  "adminFee",
  "total",
  "idNo",
  "occupation",
  "deathSi",
  "disableSi",
  "medicSi",
  "date",
  "issueAt",
  "issueBy"
];

const DEBIT_NOTE_KEYS = [
  "date",
  "name",
  "address",
  "policyType",
  "policyNo",
  "periodStart",
  "periodEnd",
  "maybankCode",
  "maybankBranch",
  "premium",
  "adminFee",
  "total"
];

const POLICY_SUMMARY_KEYS = [
  "name",
  "date",
  "address",
  "policyNo",
  "productName",
  "periodStart",
  "periodEnd"
];

const PA_EDOCS_KEYS = [
  "name",
  "address",
  "policyNo",
  "repPolicyNo",
  "policyType",
  "accountNo",
  "agentName",
  "productName",
  "periodStart",
  "periodEnd",
  "premium",
  "adminFee",
  "total",
  "idNo",
  "occupation",
  "deathSi",
  "disableSi",
  "medicSi",
  "date",
  "issueAt",
  "issueBy",
  "maybankCode",
  "maybankBranch"
];

module.exports = {
  FILE_PATH,
  BASE_URL,
  PA_EPOLICY_KEYS,
  DEBIT_NOTE_KEYS,
  POLICY_SUMMARY_KEYS,
  PA_EDOCS_KEYS
};
