function getSecretNumber() {
  return 44;
}

function getClient() {
  return ({
    name: 'client1',
    connect: {
      queue: new Promise()
    }
  })
}

module.exports = {
  getSecretNumber,
  getClient
};
