
require('dotenv').config();
module.exports = {
  API_BASE_URL: 'https://apihub.document360.io/v2',
  API_KEY: process.env.API_KEY,
  PORT: process.env.PORT || 3000
};
