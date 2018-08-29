"use strict";

const shoppingCart = {
    template: `
    <form ng-repeat="pokemon in $ctrl.pokemonList">
    <p> Name: {{ pokemon.name }}</p>
    <p> Type: {{ pokemon.type }}</p>
    <p> Health: {{ pokemon.health }}</p>
    <p> ID: {{ pokemon.id }}</p>
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