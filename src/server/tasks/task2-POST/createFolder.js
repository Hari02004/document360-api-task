// Task #2: POST Create a New Folder
const apiClient = require('../../utils/apiclient');

async function createFolder(folderName) {
  try {
    console.log(`\nTask #2: Creating new folder "${folderName}"...`);
    const body = {
      title: folderName,
      user_id:"9bc90a13-4c7a-45e6-b51d-839bc3a5a209"
    };
    const response = await apiClient.request('POST', body);
    console.log('✓ Task #2 Complete - Folder Created');
    console.log('Status Code:', response.statusCode);
    console.log('Response:', JSON.stringify(response.data, null, 2));
    
    // Extract and return folder ID for use in next tasks
    const folderId = response.data.id || response.data.folderId;
    return {
      folderId: folderId,
      folderData: response.data
    };
  } catch (error) {
    console.error('Error creating folder:', error.message);
    throw error;
  }
}

module.exports = { createFolder };
