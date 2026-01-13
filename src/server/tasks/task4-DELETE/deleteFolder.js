// Task #4: DELETE the Folder
const apiClient = require('../../utils/apiclient');

async function deleteFolder(folderId) {
  try {
    console.log(`\nTask #4: Deleting folder ${folderId}...`);
    const response = await apiClient.request('DELETE', `/Drive/Folders/${folderId}`);
    console.log('✓ Task #4 Complete - Folder Deleted');
    console.log('Response:', JSON.stringify(response.data, null, 2));
    return response.data;
  } catch (error) {
    console.error('Error deleting folder:', error.message);
    throw error;
  }
}

module.exports = { deleteFolder };
