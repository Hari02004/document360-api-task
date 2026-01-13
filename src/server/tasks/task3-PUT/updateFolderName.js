// Task #3: PUT Update Folder Name
const apiClient = require('../../utils/apiclient');

async function updateFolderName(folderId, newName) {
  try {
    console.log(`\nTask #3: Updating folder ${folderId} to "${newName}"...`);
    const body = {
      name: newName
    };
    const response = await apiClient.request('PUT', `/Drive/Folders/${folderId}`, body);
    console.log('✓ Task #3 Complete - Folder Updated');
    console.log('Status Code:', response.statusCode);
    console.log('Response:', JSON.stringify(response.data, null, 2));
    return response.data;
  } catch (error) {
    console.error('Error updating folder:', error.message);
    throw error;
  }
}

module.exports = { updateFolderName };
