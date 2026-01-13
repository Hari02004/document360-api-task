# Document360 API Task - MERN Stack Integration

## Overview
This project demonstrates integration with the Document360 API to perform CRUD operations on drive folders. It executes four sequential API tasks:
- **Task #1**: GET all drive folders
- **Task #2**: POST create a new folder
- **Task #3**: PUT update folder name
- **Task #4**: DELETE the folder

## Language and Tools Used
- **Runtime**: Node.js (CommonJS)
- **Language**: JavaScript (ES6)
- **HTTP Client**: Native `https` module
- **Environment Management**: dotenv
- **API**: Document360 v2 REST API

## Project Structure
```
document360-api-task/
├── src/
│   └── server/
│       ├── config/
│       │   └── env.js                 # Configuration & environment variables
│       ├── services/
│       │   └── folderservice.js       # All 4 API task methods
│       ├── utils/
│       │   └── apiclient.js           # HTTPS API client with api_token auth
│       └── app.js                     # Main entry point - executes all tasks
├── .env                               # API credentials (not in repo)
├── .gitignore                         # Excludes .env and node_modules
├── package.json                       # Dependencies
└── README.md                          # This file

## API Endpoints Used
- **Task #1**: `GET https://apihub.document360.io/v2/Drive/Folders`
- **Task #2**: `POST https://apihub.document360.io/v2/Drive/Folders`
- **Task #3**: `PUT https://apihub.document360.io/v2/Drive/Folders/{folderId}`
- **Task #4**: `DELETE https://apihub.document360.io/v2/Drive/Folders/{folderId}`

## Authentication
All API requests use the `api_token` header:
```
api_token: 1v9fUFV3l+4XZ+laMwCP8ha0HCRawfN6qQWGhVZ+rKP9ohdUBgez1Y/2cOI2Kq88P4g/eOxl1oGcZ/NG4jpERh8GGE7lHJiR1Olm0npUg0guxfPBpffculxO0yUrgdy85EX/ugGDXYEuo+voLyoraQ==

```

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm package manager
- Valid Document360 API token

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Hari02004/document360-api-task.git
   cd document360-api-task
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure environment variables**:
   - Create a `.env` file in the root directory
   - Add your API token:
     ```
     API_KEY=your_document360_api_token_here
     PORT=3000
     ```

### Running the Project

Execute all 4 API tasks:
```bash
node src/server/app.js
```

### Expected Output
The application will display:
1. Task #1: List of all existing drive folders with metadata
2. Task #2: Newly created folder with its ID
3. Task #3: Updated folder name confirmation
4. Task #4: Deletion confirmation message

## Sample Output/Logs
```
=== Document360 API Task Execution ===

Task #1: Fetching all drive folders...
✓ Task #1 Complete - All Folders Retrieved

Task #2: Creating new folder "Test Folder"...
✓ Task #2 Complete - Folder Created

Task #3: Updating folder to "Updated Test Folder"...
✓ Task #3 Complete - Folder Updated

Task #4: Deleting folder...
✓ Task #4 Complete - Folder Deleted

=== All Tasks Completed Successfully ===
```

## File Organization by Task

| Task | Method | File | Function |
|------|--------|------|----------|
| #1 | GET | `services/folderservice.js` | `getAllFolders()` |
| #2 | POST | `services/folderservice.js` | `createFolder()` |
| #3 | PUT | `services/folderservice.js` | `updateFolderName()` |
| #4 | DELETE | `services/folderservice.js` | `deleteFolder()` |

## Configuration Files
- **env.js**: Loads and exports API base URL, API key, and port from environment
- **apiclient.js**: Handles all HTTPS requests with proper headers and error handling
- **folderservice.js**: Contains business logic for all 4 API operations

## Security Notes
- API credentials are stored in `.env` (excluded from Git via `.gitignore`)
- Never commit `.env` file to version control
- Use environment variables in production

## Error Handling
The application includes try-catch blocks for each task to handle:
- Network errors
- Invalid API tokens
- Malformed responses
- API server errors

## Author
Created for Document360 API Integration Task

## License
ISC
