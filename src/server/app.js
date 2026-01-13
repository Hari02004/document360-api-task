const { getAllFolders } = require('./tasks/task1-GET/getAllFolders');
const { createFolder } = require('./tasks/task2-POST/createFolder');
const { updateFolderName } = require('./tasks/task3-PUT/updateFolderName');
const { deleteFolder } = require('./tasks/task4-DELETE/deleteFolder');
async function main() {
  try {
    console.log('=== Document360 API Task Execution ===\n');
    const allFolders = await getAllFolders();

    const newFolderResult = await createFolder('Test Folder');
    const folderId = newFolderResult.folderId;

    const updatedFolder = await updateFolderName(folderId, 'Updated Test Folder');

    const deletedFolder = await deleteFolder(folderId);

    console.log('\n=== All Tasks Completed Successfully ===');
  } catch (error) {
    console.error('Error during task execution:', error);
    process.exit(1);
  }
}

main();
