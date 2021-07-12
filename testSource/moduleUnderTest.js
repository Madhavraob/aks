const dependencyModule = require("./dependencyModule");

function getTheSecret() {
  const client = dependencyModule.getClient();
  res = client.connect();
  return `The secret was: ${dependencyModule.getSecretNumber()}`;
}

module.exports = {
  getTheSecret
};