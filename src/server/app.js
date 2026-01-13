const folderService = require('./services/folderservice');

async function main() {
  try {
    console.log('=== Document360 API Task Execution ===\n');
    const allFolders = await folderService.getAllFolders();

    const newFolderResult = await folderService.createFolder('Test Folder');
    const folderId = newFolderResult.folderId;

    const updatedFolder = await folderService.updateFolderName(folderId, 'Updated Test Folder');

    const deletedFolder = await folderService.deleteFolder(folderId);

    console.log('\n=== All Tasks Completed Successfully ===');
  } catch (error) {
    console.error('Error during task execution:', error);
    process.exit(1);
  }
}

main();
