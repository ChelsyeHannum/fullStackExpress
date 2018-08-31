"use strict";

const express = require("express");
const app = express();
const routes = require("./route");

app.use(express.json());
app.use(express.static("./public"));
app.use("/", routes);


const port = 5000;
app.listen(port, () => {
    console.log(`Server is running on Port: ${port}`);
})