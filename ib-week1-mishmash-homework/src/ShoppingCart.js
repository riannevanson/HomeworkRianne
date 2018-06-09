class ShoppingCart {
  constructor() {
    this.items = [];
  }

  getItems() {
    return this.items;
  }

  addItem(pItemName, pQuantity, pPrice) {
      var newItem = {
      name: pItemName, //something with this?
      quantity: pQuantity,
      pricePerUnit: pPrice
    };
    this.items.push(newItem);
  }

  clear(items){
    this.items.map(items =>
    return [])
  }
}

const cart = new ShoppingCart();
cart.addItem("yu", 3, 2 + 'addItems');
console.log(cart.getItems());
//
////
//     this.getItem.push(getItem)
//     // We should be able to call
//     // `cart.addItem(itemName, quantity, price)`,
//     // which adds a new item to an internal array.
//     // Subsequent calls to `cart.getItems()` should return the added items.
//     // Items in the array should be in this format:
// //     //     {
//       name: "Name of the item",
//       quantity: 1,
//       pricePerUnit: 99.99
//     }
// //   }
// }

module.exports = ShoppingCart;
