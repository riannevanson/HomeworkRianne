module.exports =
class ShoppingCart {
  constructor() {
    this.items = [];
  }

  getItems() {
    return this.items;
  }

  addItem(pItemName, pQuantity, pPrice) {
    var newItem = {
      name: pItemName,
      quantity: pQuantity,
      pricePerUnit: pPrice
    };
    this.items.push(newItem);
  }

  clear() {
    this.items = this.items.filter(item => item !== item);
  }
  clone() {
    let cartClone = new ShoppingCart();
    cartClone.items = this.items
    return cartClone
 }
}

// const cart = new ShoppingCart();
// cart.addItem("yu", 3, 2 + "addItems");
// // console.log(cart.getItems());
// console.log(cart);
// let cloneCart = cart.clone();
// console.log(cloneCart)
// // cloneCart.clear();
// //console.log(cart);
// //console.log(cloneCart);
// // cloneCart.addItem("yu", 3, 2 + "addItems");
// cart.clear();
// console.log(cart);
// console.log(cloneCart);
