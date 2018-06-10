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

  clear() {
    this.items = this.items.filter(item => item !== item);
  }
  clone(pCartYouWantToClone) {

    let cloneCart = (pCartYouWantToClone) => (Object.create(pCartYouWantToClone)
    .map(x => x))

  }
}

const cart = new ShoppingCart();
cart.addItem("yu", 3, 2 + "addItems");
cart.addItem("yuaaaaa", 4, 5.95 + "addItems");
console.log(cart.getItems());
console.log(cart)
cart.clone(cart, "cartje");
const cloneCart = new ShoppingCart();
cart.clear()
console.log(cart)
console.log(cloneCart)
console.log(cart)
console.log(cloneCart)

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

module.exports = { ShoppingCart };
