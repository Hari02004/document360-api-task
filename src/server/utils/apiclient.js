const https = require('https');
const { URL } = require("url");
const env = require('../config/env');

class APIClient {
  constructor() {
    this.baseURL = env.API_BASE_URL;
    this.apiKey = env.API_KEY;
  }

  request(method, endpoint, body = null) {
    return new Promise((resolve, reject) => {

      const url = new URL(this.baseURL + endpoint);

      const payload = body ? JSON.stringify(body) : null;

      const options = {
        hostname: url.hostname,
        path: url.pathname + url.search,
        method: method,
        headers: {
          'Content-Type': 'application/json',
          'api_token': this.apiKey
        }
      };

      if (payload) {
        options.headers["Content-Length"] = Buffer.byteLength(payload);
      }

      const req = https.request(options, (res) => { 
        let data = '';

        res.on('data', (chunk) => {
          data += chunk;
        });

        res.on('end', () => {
          try {
            const parsedData = JSON.parse(data);
            resolve({
              statusCode: res.statusCode,
              data: parsedData
            });
          } catch (e) {
            resolve({
              statusCode: res.statusCode,
              data: data
            });
          }
        });
      });

      req.on('error', (error) => {
        reject(error);
      });

      if (payload) {
        req.write(payload);
      }

      req.end();
    });
  }
}

module.exports = new APIClient();
