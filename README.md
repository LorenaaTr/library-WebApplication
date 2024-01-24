# library-WebApplication

Libraries of Kosovo
This project is a platform for the administration and management of books in libraries across Kosovo. Users have the ability to search for books, as well as register to save books.

Technologies
Backend: NodeJS
Frontend: ReactJS
File Structure
The project is organized into separate folders for backend and frontend to facilitate development and code maintenance.

Backend
The "backend" folder contains the server-side code.

markdown
Copy code
/backend
  /routes
    - routes.js
  /controllers
    - bookController.js
  /models
    - bookModel.js
  - server.js
  - package.json
  - ...
routes: Contains "routes.js" defining endpoints for client requests.
controllers: Contains "bookController.js" implementing business logic for book management.
models: Contains "bookModel.js" defining the database model for books.
server.js: Main file initializing the server and connecting to the database.
package.json: File for package management and project configurations.
Frontend
The "frontend" folder contains the client-side code.

bash
Copy code
/frontend
  /src
    /components
      - BookList.jsx
      - BookCard.jsx
    - App.js
    - index.js
  - package.json
  - ...
components: Contains files for components used in the client page.
App.js: Main file of the React application.
index.js: File for starting the React application.
package.json: File for package management and project configurations.
Configuration and Installation
To configure and install the project locally, follow these steps:

Clone the repository from GitHub: git clone https://github.com/Library-Web-Application.git
Navigate to the backend folder: cd Library-Web-Application/backend
Install necessary packages: npm install
Navigate to the frontend folder: cd ../frontend
Install necessary packages: npm install
Usage
After installation, you can start the project using the following commands:

For backend: cd backend and then npm start or nodemon server.js
For frontend: cd frontend and then npm start
The application will be accessible in your browser at http://localhost:3000/. Please ensure that the database server is configured according to your needs, and the connection data is accurate in the "server.js" file.

Contribution
We gladly welcome contributions from the community. Please open an "issue" for any suggestions or problems you encounter or submit a "pull request" for the changes you would like to make to the code.

Authors
Lorena Troshupa
Rinesa Grabovci
Bleonit Shillova







# SCRUM BOARDS
https://dev.azure.com/rg55960/LibraryService-ShelfShare/_boards/board/t/LibraryService-ShelfShare%20Team/Issues


