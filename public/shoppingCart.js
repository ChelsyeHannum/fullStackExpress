"use strict";

const shoppingCart = {
    template: `

    <h1>Shopping Cart</h1>

    <form class="form">
    <section class= "input">
    <input ng-model = "$ctrl.newItem.product" placeholder = "Product"></input>
    <input ng-model = "$ctrl.newItem.price" placeholder = "Price"></input>
    <input ng-model = "$ctrl.newItem.quantity" placeholder = "Quantity"></input>
    <button ng-click = "$ctrl.addItem($ctrl.newItem)">Add Item</button>
    </section>
    </form>

    <section class = "cart">
    <section class = "listItem" ng-repeat="cartItems in $ctrl.shoppingList | orderBy: 'id' ">
    <section class = "items">
    <p>Product: {{ cartItems.product }}</p>
    <p> Price: {{ cartItems.price | currency }}</p>
    <p> Quantity: {{ cartItems.quantity }}</p>
    <button ng-click="$ctrl.removeItem(cartItems.id)";>X</button>
    <button ng-click="$ctrl.updateItem(cartItems.id, $ctrl.newItem.quantity)">Update Quantity</button>
    </section>
    </section>
    </section>
  
    `,
    controller: ["CartService", function(CartService) {
        const vm = this;
        CartService.getAllItems().then((response) => {
            vm.shoppingList = response;
        });
        vm.addItem = (item) => {
            CartService.addItem(item).then((response) => {
                vm.shoppingList = response;
            })
        }
        vm.updateItem = (id, quantity) => {
            CartService.updateItem(id, quantity).then((response) => {
                vm.shoppingList = response;
            })
        }
        vm.removeItem = (item) => {
            CartService.removeItem(item).then((response) => {
                vm.shoppingList = response;
            })
        }

    }]

};


angular
    .module("App")
    .component("shoppingCart", shoppingCart);