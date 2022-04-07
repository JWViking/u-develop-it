const mysql = require('mysql2');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

//express middleware
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

//Connect to MySQL database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: 'VikingKey',
      database: 'election'
    },
    console.log('Connected to the election database.')
  );

//create a beginning route just to test the connection
//root file at index level
app.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    });
});

//Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

//start Express.js server on port 3001 (added at bottom of server.js)
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});