// Task #3: PUT Update Folder Name
// Note: The API uses POST method to update folders (PUT is not supported)
const apiClient = require('../../utils/apiclient');

async function updateFolderName(folderId, newName) {
  try {
    console.log(`\nTask #3: Updating folder ${folderId} to "${newName}"...`);
    const body = {
      media_folder_id: folderId,
      Title: newName,
      User_Id: "9bc90a13-4c7a-45e6-b51d-839bc3a5a209"
    };
    // Try sending to the base Folders endpoint instead of a specific folder
    const response = await apiClient.request('POST', '', body);
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
