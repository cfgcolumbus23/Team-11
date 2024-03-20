# Team-11


Welcome to Future Connect, powered by the non-profit Future Ready Five, is dedicated to advancing educational tools for early childhood literacy.  We aim to transform individual scores into meaningful insights, guiding the creation of customized learning resources. Our focus is on developing simple yet innovative solutions to bridge the literacy gap for kindergarten-aged learners.


This prototype application allows users to input scores to the BRIGANCE test for two age ranges. We will consolidate the data based on questions and combine them into categories that can inform decisions learning resources which we will create mocks for learning resources.

## Tech Stack

### Client

- React + Next.js `create-next-app`
- No Typescript
- Tailwind

### Server

- Node.js
- Express `express-generator`

### Database

- MongoDB
- Mongoose

## Setup Instructions

For the Frontend:
1. Navigate to the 'client' directory.
2. Execute `npm install` to install all the necessary dependencies.
3. Start the development server by running `npm run dev`.

For the Backend:
1. Switch to the 'server' directory.
2. Launch the backend services with the command `npm run start`.
3. Create a .env with the following variables
```
PORT = 3001
MONGODB_URI = "PUT_YOUR_MONGODB_URI_HERE"
```

Also included in this repo is a `docs` directory which includes information included in our ideation steps, and the BRIGANCE assessment which we based our model on. <br /> <br /> The code ("Code") in this repository was created solely by the student teams during a coding competition hosted by JPMorgan Chase Bank, N.A. ("JPMC"). JPMC did not create or contribute to the development of the Code. This Code is provided AS IS and JPMC makes no warranty of any kind, express or implied, as to the Code, including but not limited to, merchantability, satisfactory quality, non-infringement, title or fitness for a particular purpose or use.