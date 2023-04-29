![](https://natours.tours/img/logo-green-1x.png)

This is the first CRUD nest app project. And it is for manage bookmarks for users

## [View Demo](#)

## Database Schema

- User
  - \_id
  - email
  - hash (password)
  - firstName
  - lastName
  - bookmarks []
  - createdAt
  - updatedAt
- Bookmark
  - \_id
  - title
  - description
  - link
  - createdAt
  - updatedAt
  - userId
  - user

## Built With

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Nest.js](https://nestjs.com/)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [PostgreSQL](https://www.postgresql.org/)
- [Prisma](https://www.prisma.io/)
- [Passport](https://www.passportjs.org/)
- [Pactum](https://pactum.com/)
- [JWT](https://jwt.io/)

## User journey

- SOON

## User Stories

- AS A Admin
  - SOON

### Installation

1. Clone the repo
   ```sh
   git clone [https://github.com/hamadazaid2/natours.git](https://github.com/hamadazaid2/bookmarks-nest.git)
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. In the project root folder, rename `.env.example` file to `.env` and fill in the environment variables

   ```
   DATABASE_URL="..."
   JWT_SECRETE='...'
   ```
   
4. To run the application `npm run start:dev` and to run E2E testing `npm run test:e2e`

## This Website Developed BY

- [Hamada M. Abu Zaid](https://github.com/hamadazaid2) => hamadazaid62@gmail.com
