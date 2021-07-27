const got = require('got');

module.exports = function (instance) {
  instance.get = async function () {
    const response = await got(instance.url);
    return JSON.parse(response.body);
  };

  return instance;
};
