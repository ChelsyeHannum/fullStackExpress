"use strict";

const shoppingCart = {
    template: `
    <form ng-repeat="cartItems in $ctrl.shoppingList">
    <p> Product: {{ cartItems.product }}</p>
    <p> Price: {{ cartItems.price }}</p>
    <p> Quantity: {{ cartItems.quantity }}</p>
    <p> ID: {{ cartItems.id }}</p>
    <form>
    `,
    controller: ["CartService", function(CartService) {
        const vm = this;
        CartService.getAllItems().then((response) => {
            vm.shoppingList = response;
        });
    }]
};


angular
    .module("App")
    .component("shoppingCart", shoppingCart);