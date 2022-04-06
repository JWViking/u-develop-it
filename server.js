const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

//express middleward
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

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