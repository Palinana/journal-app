
## Journal App

### Technologies Used:
- Node.js
- Postgres
- Express.js
- Sequelize
- React
- Redux
- Javascript
- Create-recat-app package

### Installation:
- Have postgres installed (https://postgresapp.com/)
- Create a database called journal
- npm install
- cd client
- npm install
- npm start 
- cd ..
- npm run seed
- npm run server (http://localhost:8000)
- npm test

### Biggest Issue:

The biggest issue I ran into was to add any authentication. I haven't worked a lot with authentication before and I wasn't sure that will have time to make it. I decided to create something simple like admin panel with all users and their ids. This way I was able to see all user entries based on his id and create new entries for this user. Later I came up with an idea to do db checks when user logins or register for the first time. I created separate routes for login/register and was able to make a simple authentication. 

### What I've learned:
- Css:

  Truncate a string with Ellipsis 
- React:

  How to connect create-react-app with Node.js and Express
- Passport:

  Even thought I didn't use it in my project, I'd discovered a good authentication middleware for Node that I would have used.
- Postgres:

  Foreign key check (to make sure that entry has a user)
  
### What I would have done differently:
  
I would have used authentication middleware like Passport as it's very flexible in the sense that it allows for different authentication strategies. I would also have written more tests for my backend and frontend.
