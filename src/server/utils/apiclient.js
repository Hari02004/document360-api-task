const axios = require('axios');
const env = require('../config/env');

class APIClient {
  constructor() {
    this.baseURL = env.API_BASE_URL;
    this.apiKey = env.API_KEY;
    this.client = axios.create({
      baseURL: this.baseURL,
      headers: {
        'Content-Type': 'application/json',
        'api_token': this.apiKey,
      }
    });
  }

  async request(method, body = null) {
    try {
      const config = {
        method: method,
        url: this.baseURL,
      };

      if (body) {
        config.data = body;
      }

      const response = await this.client(config);
      
      return {
        statusCode: response.status,
        data: response.data
      };
    } catch (error) {
      if (error.response) {
        return {
          statusCode: error.response.status,
          data: error.response.data
        };
      }
      throw error;
    }
  }
}

module.exports = new APIClient();
