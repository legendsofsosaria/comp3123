const express = require("express");

const routes = express.Router();

// Query parameter example
// http://localhost:3000/user?firstname=John&lastname=Doe
routes.get("/", (req, res) => {
    console.log(req.query)
    const firstname = req.query.firstname;
    const lastname = req.query.lastname;

    res.send({
        method: "GET",
        path: `/user?firstname=${firstname}&lastname=${lastname}`,
        firstname: firstname,
        lastname: lastname
    })
});

// Path parameter example
// http://localhost:3000/user/John/Doe
routes.post("/:firstname/:lastname", (req, res) => {
    console.log(req.params)
    const firstname = req.params.firstname;
    const lastname = req.params.lastname;

    res.send({
        method: "POST",
        path: `/user/${firstname}/${lastname}`,
        firstname: firstname,
        lastname: lastname
    })
});

// Body parameter example
routes.post('/', (req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;

    res.send({
        method: "POST",
        path: `/user`,
        firstname: firstname,
        lastname: lastname
    });
});

module.exports = routes;