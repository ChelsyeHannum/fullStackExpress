"use strict";

const shoppingCart = {
    template: `
    <form ng-repeat="cart-items in $ctrl.shoppingList">
    <p> Name: {{ cart-items.product }}</p>
    <p> Type: {{ cart-items.price }}</p>
    <p> Health: {{ cart-items.quantity }}</p>
    <p> ID: {{ cart-items.id }}</p>
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