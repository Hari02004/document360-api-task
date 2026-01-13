require('dotenv').config();
module.exports = {
  API_BASE_URL: process.env.API_BASE_URL,
  API_KEY: process.env.API_KEY,
  PORT: process.env.PORT || 3000
};
