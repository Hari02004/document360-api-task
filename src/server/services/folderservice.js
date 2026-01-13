const apiClient = require('../utils/apiclient');

class FolderService {
  async getAllFolders() {
    try {
      console.log('Task #1: Fetching all drive folders...');
      const response = await apiClient.request('GET', '/Drive/Folders');
      console.log('✓ Task #1 Complete - All Folders Retrieved');
      console.log('Response:', JSON.stringify(response.data, null, 2));
      return response.data;
    } catch (error) {
      console.error('Error fetching folders:', error.message);
      throw error;
    }
  }
  async createFolder(folderName) {
    try {
      console.log(`\nTask #2: Creating new folder "${folderName}"...`);
      const body = {
        name: folderName
      };
      const response = await apiClient.request('POST', '/Drive/Folders', body);
      console.log('✓ Task #2 Complete - Folder Created');
      console.log('Response:', JSON.stringify(response.data, null, 2));
    
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

  async updateFolderName(folderId, newName) {
    try {
      console.log(`\nTask #3: Updating folder ${folderId} to "${newName}"...`);
      const body = {
        name: newName
      };
      const response = await apiClient.request('PUT', `/Drive/Folders/${folderId}`, body);
      console.log('✓ Task #3 Complete - Folder Updated');
      console.log('Response:', JSON.stringify(response.data, null, 2));
      return response.data;
    } catch (error) {
      console.error('Error updating folder:', error.message);
      throw error;
    }
  }

  async deleteFolder(folderId) {
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
}

module.exports = new FolderService();
