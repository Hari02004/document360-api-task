// Task #2: POST Create a New Folder
const apiClient = require('../../utils/apiclient');

async function createFolder(folderName) {
  try {
    console.log(`\nTask #2: Creating new folder "${folderName}"...`);
    const body = {
      name: folderName
    };
    const response = await apiClient.request('POST', '/Drive/Folders', body);
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
