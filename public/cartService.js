"use strict";

function CartService($http) {
    const vm = this;
    vm.getAllItems = () => {
        return $http({
            url: "/items/all",
            method: "GET"
        }).then((response) => {
            vm.shoppingList = response.data;
            return vm.shoppingList;
        });
    };

}

angular
    .module("App")
    .service("CartService", CartService);