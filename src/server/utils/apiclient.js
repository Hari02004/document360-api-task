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

  async request(method, pathOrBody = null, body = null) {
    try {
      let url = '';
      let requestBody = null;

      // Handle overloaded parameters: 
      // - request(method) or request(method, body)
      // - request(method, path, body)
      if (typeof pathOrBody === 'string') {
        // Second parameter is a path (for PUT/DELETE with endpoint)
        url = pathOrBody;
        requestBody = body;
      } else {
        // Second parameter is the body (for GET/POST without custom path)
        url = '';
        requestBody = pathOrBody;
      }

      const config = {
        method: method,
        url: url,
      };

      if (requestBody) {
        config.data = requestBody;
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
