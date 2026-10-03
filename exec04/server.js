const express = require("express");
const usersRoute = require("./routes/users")
const userRoutes = require("./routes/user")
const collegeV1Routes = require("./routes/college.v1")
const collegeV2Routes = require("./routes/college.v2")

const SERVER_PORT = 3000;
// Initialize Express application
const app = express();

// Middleware to parse JSON bodies in incoming requests
app.use(express.json());

// Middleware to parse URL-encoded bodies in incoming requests
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.send('<h1>Hello, world!</h1>');
});

// ✅ Serve static files in /public (instruction.html will be at /instruction.html)
app.use(express.static("public"));

// app.get('/index', (req, res) => {
//    res.sendFile(__dirname + '/public/instruction.html');
// });

app.get("/hello", (req, res) => {
    res.setHeader("x-version-id", "1.0");
    res.setHeader("Content-Type", "text/html");
    res.send('<h1>Hello Express JS</h1>');
});

// Use the user routes for /api/v1/user endpoint
app.use("/user", userRoutes);
app.use("/users", usersRoute);
app.use("/api/v1/college", collegeV1Routes);
app.use("/api/v2/college", collegeV2Routes);


app.listen(SERVER_PORT, () => {
    console.log(`Server is running on port http://localhost:${SERVER_PORT}/`);
});
