class ShoppingCart {
  constructor(itemName, quantity, price) {
    this.name = itemName;
    this.getItemArray = [];

  }

  getItems() {
    return this.getItemArray.concat(this.addItemArray);
  }

  addItem(itemName, quantity, price) {
    this.addItemArray = [];
    var newItem =
      {
        name: itemName,//something with this?
        quantity: quantity,
        pricePerUnit: price
      }
    ;
    return this.addItemArray.concat(newItem);
  }

}

let cart = new ShoppingCart();
console.log(cart.addItem("yu", 3, 2));
console.log(cart.addItem())
console.log(cart.getItems());
//
//
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
