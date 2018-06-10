class ShoppingCart{
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
  clone(pShoppingCart) {
    function cloneCart(pShoppingCart) {
      let cloneCart = pShoppingCart => Object.create(pShoppingCart).map(x => x);
      return cloneCart;
    }
    return cloneCart;
  }
}
//
// const cart = new ShoppingCart();
// cart.addItem("yu", 3, 2 + "addItems");
// // console.log(cart.getItems());
// // console.log(cart);
// cart.clone(cart);
// const cloneCart = new ShoppingCart();
// cloneCart.clear();
// //console.log(cart);
// //console.log(cloneCart);
// cloneCart.addItem("yu", 3, 2 + "addItems");
// cart.clear();
// console.log(cart);
// console.log(cloneCart);



module.exports = { ShoppingCart };
