const axios = require('axios');

exports.getInfo = () => {
  return axios.get("/info")
};

