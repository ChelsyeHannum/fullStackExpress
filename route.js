"use strict";

const express = require("express");
const cartItems = express.Router();

const shoppingList = [{
    id: 0,
    product: "Banana",
    price: 2,
    quantity: 5
}, {
    id: 1,
    product: "Cereal",
    price: 5,
    quantity: 3
}, {
    id: 2,
    product: "Chicken",
    price: 10,
    quantity: 2
}];

let idCount = shoppingList.length;

cartItems.get("/routes", (req, res) => {
    res.send(shoppingList);
});

module.exports = routes;