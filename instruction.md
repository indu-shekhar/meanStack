# MEAN Stack Application Assignment Instructions

## Objective

Develop a simple Single Page Application (SPA) using the MEAN stack (MongoDB, Express.js, Angular 8, Node.js). The application must manage a list of people, allowing users to view, edit, and delete records. The backend (Node.js/Express/MongoDB) must expose a RESTful API, and the frontend (Angular 8) must consume this API, ensuring seamless interaction between both.

---

## Application Structure

- **Client (Angular 8):**  
  Located in the `client` directory. Implements the SPA for managing people.
- **Server (Node.js/Express/MongoDB):**  
  Located in the `server` directory. Implements the RESTful API and connects to MongoDB.

---

## Requirements

### (a) Angular 8 Client

- **Views to Implement:**
  1. **List All People:**  
     Display all people in a table, fetched from the backend API.
  2. **Edit a Person:**  
     Provide a form to edit an existing person's details.
  3. **Delete a Person:**  
     Allow deletion of a person with confirmation.

- **API Integration:**  
  Use the following REST API endpoints:
  - `GET /person` – Fetch all people.
  - `POST /person` – Add a new person.
  - `PUT /person/{id}` – Update an existing person.
  - `DELETE /person/{id}` – Delete a person.

- **Other Requirements:**
  - Use Angular 8.
  - Ensure proper error handling and user feedback.
  - Add clear comment lines in code where necessary.
  - Ensure the client runs on a different port from the server (e.g., 4200).

---

### (b) Node.js/MongoDB Server

- **RESTful API Endpoints:**
  - `GET /person`  
    Returns a list of all people.
  - `POST /person`  
    Creates a new person.
  - `PUT /person/{id}`  
    Updates a person by ID.
  - `DELETE /person/{id}`  
    Deletes a person by ID.

- **Person Collection Fields:**
  - `Name` (String)
  - `Age` (Number)
  - `Gender` (String)
  - `Mobile number` (String)

- **Other Requirements:**
  - Use Express.js for routing.
  - Use Mongoose for MongoDB interaction.
  - Implement proper error handling (e.g., invalid input, database errors).
  - Add clear comment lines in code where necessary.
  - Ensure CORS is enabled for frontend-backend communication.
  - Server should run on a different port from the client (e.g., 3000).

---

## General Guidelines

- **Separation of Concerns:**  
  Keep client and server codebases separate.
- **Documentation:**  
  Comment code for clarity.
- **Testing:**  
  Test all API endpoints and frontend views.
- **Error Handling:**  
  Handle all errors gracefully, both in frontend and backend.
- **Connection:**  
  Ensure the Angular client communicates with the Node.js backend via HTTP requests.

---

## Deliverables

1. **Complete Source Code:**  
   - `client` directory (Angular 8 SPA)
   - `server` directory (Node.js/Express/MongoDB REST API)
2. **Documentation:**  
   - This `instruction.md` file
   - `plan.md` file (development plan)
3. **Commented Code:**  
   - All code must include necessary comments for clarity.

---

## Notes

- Use only Angular 8 for the frontend.
- Use Node.js, Express, and MongoDB (with Mongoose) for the backend.
- Ensure the application is functional and meets all requirements.
- The frontend and backend must run on different ports and communicate via REST API.
