"use strict";

function CartService($http) {
    const vm = this;
    vm.getAllItems = () => {
        return $http({
            url: "/cart-items",
            method: "GET"
        }).then((response) => {
            vm.shoppingList = response.data;
            console.log(vm.shoppingList);
            return vm.shoppingList;
        });
    };

}

angular
    .module("App")
    .service("CartService", CartService);