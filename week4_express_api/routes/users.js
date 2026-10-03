const express = require("express");

const routes = express.Router();

// http://localhost:3000/users (POST)
routes.post('/', (req, res) => {
    // res.send('<h1>List of users</h1>');
    const users = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' },
        { id: 3, name: 'Alice Johnson' }
    ];
    res.status(200)
        .json(users);
});

module.exports = routes;