"use strict";
const express = require("express");
const list = express.Router();
const pool = require("./pg-connection-pool");

list.get("/cart-items", (req, res) => {
    pool.query("Select * From ShoppingCart").then((results) => {
        console.log(results.rows);
        res.send(results.rows);
    });
});

list.post("/cart-items", (req, res) => {
    pool.query("Insert Into ShoppingCart (product, price, quantity) Values($1::text, $2::float, $3::int)", [req.body.product, req.body.price, req.body.quantity]).then(() => {
        pool.query("Select * From ShoppingCart").then((results) => {
            console.log(results.rows);
            res.send(results.rows);
        });
    });
});

list.put("/cart-items/:id", (req, res) => {
    pool.query("Update ShoppingCart set quantity=$1::int Where id=$2::int", [req.body.quantity, parseInt(req.params.id)]).then(() => {
        pool.query("Select * From ShoppingCart").then((results) => {
            console.log(results.rows);
            res.send(results.rows);
        });
    });
});

list.delete("/cart-items/:id", (req, res) => {
    pool.query("Delete From ShoppingCart Where id=$1::int", [parseInt(req.params.id)]).then(() => {
        pool.query("Select * From ShoppingCart").then((results) => {
            console.log(results.rows);
            res.send(results.rows);
        });
    });
});

module.exports = list;