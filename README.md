Assignment Overview: This project is a backend system for a Twitter-like application, built using the MongoDB as the database and Node.js as the runtime environment. The purpose of this assignment is to demonstrate the ability to create a scalable, robust and efficient backend system that handles user authentication, tweet management, and other social media functionalities focusing on scalability, performance, maintainability and DDD principles.

How to run the Application:

Follow these steps to set up and run the application locally:

Clone the repository: git clone https://github.com/megha-js/Healthflex-Twitter-backend-Assignment.git

Install dependencies: npm install

Set up the environment variables: Create a .env file in the root directory and add the necessary configuration settings (see Configuration).

Start the development server: npm run dev

Access the application: The backend server will be running at http://localhost:5000.

Dependencies: The following libraries, frameworks, and tools are required to run the application:

Node.js Express.js MongoDB Mongoose dotenv bcryptjs jsonwebtoken

Installation Instructions: To install the dependencies and set up the development environment, follow these steps:

Install Node.js: Download and install Node.js from the official website: Node.js

Install MongoDB: Download and install MongoDB from the official website: MongoDB

Clone the repository: git clone https://github.com/megha-js/Healthflex-Twitter-backend-Assignment.git

Install project dependencies: npm install

Configuration: The application requires certain configuration settings to run. Create a .env file in the root directory and include the following variables: PORT=5000 MONGODB_URI=mongodb://127.0.0.1:27017/healthflexTwitter JWT_SECRET=234957681238

Issues and Troubleshooting: Common issues users might encounter and how to troubleshoot them:

Database Connection Error: Ensure MongoDB is running and the connection string in the .env file is correct.

Port Already in Use: Make sure the port specified in the .env file is not being used by another application.

Invalid Token Error: Ensure that the JWT_SECRET in the .env file matches the secret used for generating tokens.

Contact Information:

harichakala2424 - harikrishnachakala@gmail.com Project Link - https://github.com/harichakala2424/healthflex-backend.git

API Documentation: This API Documentation outlines the endpoints and usage of the Healthflex Twitter Backend. Base URL - All endpoints are relative to the base URL: /api Authentication - Some endpoints require authentication via bearer token in the Authorization header. Endpoints -

User API

User Registration:

POST /api/users/register
Request Body: json { "username":"harikrishna", "password":"hari@123" }

Response Body:json { "username": "hari", "password": "$2a$08$yTk6ZBT21BAnn7sJzAare.C.Ze5HEqPQ7ortmorh7dQ01kZoW9Tv2", "_id": "6669e6fb903ded42c944bffb", "createdAt": "2024-06-12T18:20:43.308Z", "updatedAt": "2024-06-12T18:20:43.308Z", "__v": 0 }

Response: 201 Created Content: User Objects

Description: Registers a new user with provided username and password.

User Login:

POST /api/users/login
Request Body: json { "username":"harikrishna", "password":"hari123" }

Response Body: json { "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjY5ZTZmYjkwM2RlZDQyYzk0NGJmZmIiLCJpYXQiOjE3MTgyMTY2MTUsImV4cCI6MTcxODIyMDIxNX0.tC4EUKN6sM8ZcHfxpgaOJa_OIPGagORfXFe7CEy93Uc" }

Response: 200 OK Content: Token Object

Error Message: 404 NOT FOUND Content: Error Message indicating user not found.

Description: Logs in an existing user with the provided username and password, then returns an authentication token.

Get All Users: - GET /api/users/

Authorization: Bearer Token - eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjY5ZTExZDkwM2RlZDQyYzk0NGJmZjMiLCJpYXQiOjE3MTgyMTUxNDQsImV4cCI6MTcxODIxODc0NH0.Dtnb6zxeY6W3GIe-XPeXPMFAgrxTOJimgWkNRIQ71Bs

Response Body: json [ { "_id": "6669e11d903ded42c944bff3", "username": "harikrishna", "password": "$2a$08$tkdh2EKIrt0WlWmb1HOa7ejPy.z./E/rq25OpPYvCWuuoxpiuylXK", "createdAt": "2024-06-12T17:55:41.599Z", "updatedAt": "2024-06-12T17:55:41.599Z", "__v": 0 }, { "_id": "6669e6fb903ded42c944bffb", "username": "megha", "password": "$2a$08$yTk6ZBT21BAnn7sJzAare.C.Ze5HEqPQ7ortmorh7dQ01kZoW9Tv2", "createdAt": "2024-06-12T18:20:43.308Z", "updatedAt": "2024-06-12T18:20:43.308Z", "__v": 0 }

Response: 200 OK Content: Array of User Objects.

Description: Retrieves a list of all users.

Tweet API -

Post a Tweet:

POST /api/tweets/
Request Body: json { "userId":"6669e6fb903ded42c944bffb", "text":"Hope this day brings you joy and good news", "createdAt":"2024-06-11" }

Authorization: Bearer Token - eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjY5ZTExZDkwM2RlZDQyYzk0NGJmZjMiLCJpYXQiOjE3MTgyMTUxNDQsImV4cCI6MTcxODIxODc0NH0.Dtnb6zxeY6W3GIe-XPeXPMFAgrxTOJimgWkNRIQ71Bs

Response Body: json { "userId": "6669e6fb903ded42c944bffb", "text": "Hope this day brings you joy and good news", "_id": "6669e7c1903ded42c944c000", "createdAt": "2024-06-12T18:24:01.140Z", "__v": 0 }

Request Header: Authorization - Bearer Token

Response: 200 OK Content: Tweet Object

Error Message: 404 NOT FOUND Content:Error Message indicating tweet creation failed.

Description: Creates a new tweet for the authenticated user.

Fetch User Timeline:

GET /api/tweets/6669e6fb903ded42c944bffb/timeline
Authorization: Bearer Token - eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjY5ZTExZDkwM2RlZDQyYzk0NGJmZjMiLCJpYXQiOjE3MTgyMTUxNDQsImV4cCI6MTcxODIxODc0NH0.Dtnb6zxeY6W3GIe-XPeXPMFAgrxTOJimgWkNRIQ71Bs

Response Body: json [ { "_id": "6669e7c1903ded42c944c000", "userId": "6669e6fb903ded42c944bffb", "text": "Hope this day brings you joy and good news", "createdAt": "2024-06-12T18:24:01.140Z", "__v": 0 }

Path Parameter: -userId: string (User ID)

Query Parameter: -cursor: string (Optional, Pagination cursor) -limit: integer (Optional, Number of tweets to retrieve)

Repsonse: 200 OK Content: Array of tweet objects

Error Message: -404 BAD REQUEST Content: Error Message indicating invalid request parameters.

-404 NOT FOUND Content: Error Message indicating timeline not found.

Description: Retrieves tweets from the timeline of the specified user.

Data Models

User Properties:

_id: string (User ID)
username: string (Username)
createdAt: string (Date of creation)
updatedAt: string (Date of last update)
Token Properties: -token: string (Authentication token)

Tweet Properties:

_id: string (Tweet ID)

text: string (Tweet content)

createdAt: string (Date of creation)

user:

_id: string (User ID of Tweet creator)

username: string (Username of tweet creator)

This README.md file provides a concise overview of the Healthflex Twitter Backend API, detailing endpoints, request/response formats, authentication requirements, and data models used in the API.

About
No description, website, or topics provided.
Resources
 Readme
 Activity
Stars
 0 stars
Watchers
 1 watching
Forks
 0 forks
Report repository
Releases
No releases published
Packages
No packages published
Languages
JavaScript
100.0%
Footer
© 2024 GitHub, 
