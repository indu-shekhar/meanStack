# MEAN Stack People Manager

![People Manager Banner](media/banner.jpg)

A full-stack web application that manages a list of people using the MEAN stack (MongoDB, Express.js, Angular, and Node.js). The application provides a beautiful and responsive user interface using Angular Material, with features for creating, reading, updating, and deleting person records.

## Table of Contents

- [Features](#features)
- [Screenshots](#screenshots)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Future Enhancements](#future-enhancements)

## Features

- **Responsive UI**: Beautiful and responsive design using Angular Material components
- **List View**: View all people in a clean, organized table format
- **Add New Person**: Create new person entries with form validation
- **Edit Person**: Update existing person details
- **Delete Person**: Remove person entries with confirmation dialog
- **Loading Indicators**: Visual feedback during API operations
- **Error Handling**: User-friendly error messages
- **Animations**: Smooth transitions between views and actions

## Screenshots

### People List View
![People List View](media/list.jpg)
*The main dashboard displaying all people records in a Material table*

### Add Person
![Add Person Form](media/add.jpg)
*Form for adding a new person with validation*

### Edit Person
![Edit Person Form](media/edit.jpg)
*Form for editing an existing person's details*

### Delete Person
![Delete Person Confirmation](media/delete.jpg)
*Confirmation dialog before deleting a person*

## Tech Stack

### Frontend
- **Angular 8**: Frontend framework
- **Angular Material**: UI component library
- **RxJS**: Reactive programming library
- **TypeScript**: Programming language

### Backend
- **Node.js**: JavaScript runtime
- **Express.js**: Web application framework
- **MongoDB**: NoSQL database
- **Mongoose**: ODM (Object Data Modeling) library

## Project Structure

```
meanStack/
├── client/                 # Angular frontend application
│   ├── src/
│   │   ├── app/
│   │   │   ├── people-list/       # Component for listing all people
│   │   │   ├── person-add/        # Component for adding a new person
│   │   │   ├── person-edit/       # Component for editing a person
│   │   │   ├── person-delete/     # Component for deleting a person
│   │   │   ├── person.service.ts  # Service for API communication
│   │   │   ├── app-routing.module.ts  # Routing configuration
│   │   │   └── app.module.ts      # Angular module configuration
│   │   ├── assets/
│   │   ├── environments/
│   │   ├── index.html
│   │   └── styles.css
│   └── package.json
├── server/                 # Node.js/Express backend application
│   ├── models/
│   │   └── person.js       # Mongoose schema definition
│   ├── routes/
│   │   └── person.js       # API route handlers
│   ├── app.js              # Express application setup
│   └── package.json
└── README.md
```

## Installation

### Prerequisites
- Node.js (v12 or higher)
- npm or yarn
- MongoDB (local installation or MongoDB Atlas)

### Backend Setup

1. Navigate to the server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the server directory with the following content:
```
PORT=3000
MONGO_URI=mongodb://localhost:27017/peopleManager
```
*Note: Adjust the MongoDB URI as needed for your environment*

### Frontend Setup

1. Navigate to the client directory:
```bash
cd client
```

2. Install dependencies:
```bash
npm install
```

## Running the Application

### Start the Backend Server

1. Navigate to the server directory:
```bash
cd server
```

2. Start the server:
```bash
node app.js
```

The server will run on `http://localhost:3000`.

### Start the Frontend Development Server

1. Navigate to the client directory:
```bash
cd client
```

2. Start the Angular development server:
```bash
ng serve
```

The Angular app will run on `http://localhost:4200`. Open this URL in your browser to use the application.

## API Endpoints

The backend provides the following RESTful API endpoints:

### Person Endpoints

| Method | Endpoint       | Description                | Request Body                                | Response                  |
|--------|---------------|----------------------------|---------------------------------------------|---------------------------|
| GET    | /person       | Get all people             | -                                           | Array of Person objects   |
| GET    | /person/:id   | Get a single person by ID  | -                                           | Person object             |
| POST   | /person       | Create a new person        | `{ name, age, gender, mobile }`             | Created Person object     |
| PUT    | /person/:id   | Update a person            | `{ name, age, gender, mobile }`             | Updated Person object     |
| DELETE | /person/:id   | Delete a person            | -                                           | Success message           |

### Person Object Structure

```json
{
  "_id": "60d21b4667d0d8992e610c85",  // MongoDB generated ID
  "name": "John Doe",                 // Person's name
  "age": 25,                          // Person's age (number)
  "gender": "Male",                   // Person's gender
  "mobile": "1234567890"              // Person's mobile number
}
```

## Future Enhancements

- User authentication and authorization
- Sorting and filtering options for the people list
- Pagination for large datasets
- Advanced search functionality
- Export/import functionality (CSV, Excel)
- Dark mode theme option
- Mobile-responsive design improvements
- Unit and integration tests

---

## Contributors

- [Your Name](https://github.com/yourusername)

## License

This project is licensed under the MIT License - see the LICENSE file for details.