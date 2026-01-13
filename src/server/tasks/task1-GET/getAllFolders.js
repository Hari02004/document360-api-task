// Task #1: GET All Drive Folders
const apiClient = require('../../utils/apiclient');

async function getAllFolders() {
  try {
    console.log('Task #1: Fetching all drive folders...');
    const response = await apiClient.request('GET', '/Drive/Folders');
    console.log('✓ Task #1 Complete - All Folders Retrieved');
    console.log('Status Code:', response.statusCode);
    console.log('Response:', JSON.stringify(response.data, null, 2));
    return response.data;
  } catch (error) {
    console.error('Error fetching folders:', error.message);
    throw error;
  }
}

module.exports = { getAllFolders };
