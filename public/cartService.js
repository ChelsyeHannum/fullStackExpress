"use strict";

function CartService($http) {
    const vm = this;
    vm.getAllItems = () => {
        return $http({
            url: "/cart-items",
            method: "GET"
        }).then((response) => {
            vm.ShoppingCart = response.data;
            console.log(vm.ShoppingCart);
            return vm.ShoppingCart;
        });
    };

    vm.addItem = (item) => {
        return $http({
            url: "/cart-items/",
            method: "POST",
            data: {
                product: item.product,
                price: item.price,
                quantity: item.quantity
            }
        }).then((response) => {
            return response.data;
        });
    };


    vm.updateItem = (id, quantity) => {
        return $http({
            url: `/cart-items/${id}`,
            method: "PUT",
            data: { quantity }
        }).then((response) => {
            return response.data;
        });
    };

    vm.removeItem = (item) => {
        return $http({
            url: `/cart-items/${item}`,
            method: "DELETE",
        }).then((response) => {;
            return response.data;
        });
    };


}

angular
    .module("App")
    .service("CartService", CartService);