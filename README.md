# PDMA (Package Delivery Management Application)

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Socket.io Events](#socketio-events)
- [License](#license)

## Introduction

PDMA is a Package Delivery Management Application designed to manage drivers and packages efficiently. It includes functionalities for adding, listing, updating, and deleting drivers and packages. The application also integrates cloud services for translation and text-to-speech functionalities.

## Features

- **Driver Management**: Add, list, update, and delete drivers.
- **Package Management**: Add, list, update, and delete packages.
- **Translation Service**: Translate package descriptions into different languages using Google Translate.
- **Text-to-Speech Service**: Convert text to speech using Google Text-to-Speech API.
- **Statistics**: Track CRUD operations statistics using Firebase.

## Project Structure

```text
    PDMA/
    ├── backend/
    │   ├── controllers/
    │   │   ├── driverController.js
    │   │   ├── packageController.js
    │   │   └── statsController.js
    │   ├── models/
    │   │   ├── driver.js
    │   │   ├── package.js
    │   │   └── stats.js
    │   ├── routes/
    │   │   ├── driverRoutes.js
    │   │   ├── packageRoutes.js
    │   │   └── statsRoutes.js
    │   ├── server.js
    │   └── socket.js
    ├── frontend/
    │   ├── src/
    │   │   ├── app/
    │   │   │   ├── components/
    │   │   │   ├── services/
    │   │   │   └── app.module.ts
    │   │   ├── assets/
    │   │   ├── environments/
    │   │   └── main.ts
    │   ├── angular.json
    │   ├── package.json
    │   └── tsconfig.json
    ├── public/
    │   ├── output/
    │   └── index.html
    ├── .env
    ├── README.md
    └── package.json
```

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/FahadAssadi/PDMA/
    cd pdma
    ```

    You must cd into the PDMA folder within the cloned git repo folder for all other steps

2. Install all npm dependencies:

    ```sh
    npm install
    ```

3. Set up environment variables:
    - Create a `.env` file in the `PDMA/` directory and add the necessary environment variables.
    - Create a service account key and all the file path to the .env file.
    - The .env file must look like this:

        ```sh
        GOOGLE_APPLICATION_CREDENTIALS="YOUR-SERVICE-ACCOUNT-KEY-PATH"
        GEMINI_API_KEY="YOUR-GEMINI-API-KEY"
        ```

4. Create the output folder if it hasnt already been created

    ```sh
    cd public && mkdir output
    ```

5. Build the frontend application:

    ```sh
    ng build
    ```

6. Start the backend server:

    ```sh
    node ./backend/server.js
    ```

7. Steps 5 and 6 can be done together as:

    ```sh
    npm run dev
    ```

## Usage

1. **Driver Management**:
    - Navigate to the driver management section to add, list, update, or delete drivers.

2. **Package Management**:
    - Navigate to the package management section to add, list, update, or delete packages.

3. **Translation Service**:
    - Select a package and a target language to translate the package description.

4. **Text-to-Speech Service**:
    - Enter text to convert it to speech and download the MP3 file.

## API Endpoints

### Driver Endpoints

- **Add Driver**: `POST /api/driver`
- **List Drivers**: `GET /api/driver`
- **Delete Driver**: `DELETE /api/driver/:id`
- **Update Driver**: `PUT /api/driver/:id`

### Package Endpoints

- **Add Package**: `POST /api/package`
- **List Packages**: `GET /api/package`
- **Delete Package**: `DELETE /api/package/:id`
- **Update Package**: `PUT /api/package/:id`

### Stats Endpoints

- **Get Stats**: `GET /api/stats`
- **Reset Stats**: `DELETE /api/stats`

### Authentication Endpoints

- **Login**: `POST /api/auth/login`
- **Register**: `POST /api/auth/register`

## Socket.io Events

### Translation

- **Event**: `translate`
- **Payload**: `{ text: string, target: string }`
- **Response**: Translated text

### Text-to-Speech

- **Event**: `text-to-speech`
- **Payload**: `{ text: string }`
- **Response**: MP3 file name

### Generative AI

- **Event**: `generative-ai`
- **Payload**: `{ text: string }`
- **Response**: AI-generated result

## Project Statistics

- Track various statistics related to CRUD operations for drivers and packages.
- View the statistics through the provided API endpoints.

## Technologies Used

- MEAN Stack
- MongoDB
- Express.js
- Angular
- Node.js
- Firebase
- Bootstrap
- Socket.io
- Google Cloud APIs (Text-to-Speech and Translation)
- Gemini Generative Ai API

## License

This project is licensed under the MIT License.
