const express = require("express");
const routerUser = express.Router();
const fs = require("fs");
const path = require("path");

/*
- Return all details from user.json file to client as JSON format
*/
routerUser.get('/profile', (req,res) => {
  const filePath = path.join(__dirname, '..', 'user.json');
  const userData = fs.readFileSync(filePath, 'utf8');

  res.json(JSON.parse(userData));
});


/*
- Modify /login router to accept username and password as JSON body parameter
- Read data from user.json file
- If username and  passsword is valid then send resonse as below 
    {
        status: true,
        message: "User Is valid"
    }
- If username is invalid then send response as below 
    {
        status: false,
        message: "User Name is invalid"
    }
- If passsword is invalid then send response as below 
    {
        status: false,
        message: "Password is invalid"
    }
*/
routerUser.post('/login', (req, res) => {
  const { username, password } = req.body;
  const filePath = path.join(__dirname, '..', 'user.json');
  const userData = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  if(username != userData.username)
  {
    res.send({
      method: "POST",
      path: `/login`,
      username: username,
      password: password,
      status: false,
      message: "Username is invalid"
    });
  }
  else if (password != userData.password)
  {
    res.send({
      method: "POST",
      path: `/login`,
      username: username,
      password: password,
      status: false,
      message: "Password is invalid"
    });
  }
  else
  {
    res.send({
      method: "POST",
      path: `/login`,
      username: username,
      password: password,
      status: true,
      message: "User is valid"
    });
  }
});

/*
- Modify /logout route to accept username as parameter and display message
    in HTML format like <b>${username} successfully logout.<b>
*/
routerUser.get('/logout/:username', (req,res) => {
  const { username } = req.params;

  res.send(`<b>${username} successfully logged out.</b>`  );
});

module.exports = routerUser;