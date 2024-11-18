const express = require("express");

const app = express();

const routes = require("./accounts/routes");

app.use(express.json());
app.use('/', routes);

// console.log("starting");

app.listen(8000, () => {
    console.log("The application is running on http://localhost:8000");
});