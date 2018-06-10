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
    // https://scotch.io/bar-talk/copying-objects-in-javascript
    let copiedCart = JSON.parse(JSON.stringify(this));
    return copiedCart
 }
}


//
// const cart = new ShoppingCart();
// cart.addItem("yu", 3, 2 + "addItems");
// let cloneCart = cart.clone();
// cloneCart.items[0].name = 'XX';
// // console.log(cart.getItems());
// // console.log(cart);
// console.log(cloneCart)
// // cloneCart.clear();
// console.log(cart);
// //console.log(cloneCart);
// // cloneCart.addItem("yu", 3, 2 + "addItems");
// // cart.clear();
// // console.log(cart);
// // console.log(cloneCart);
