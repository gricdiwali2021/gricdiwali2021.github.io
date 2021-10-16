simpleCart({

  checkout: {
    // type: "PayPal",
    // email: "you@yours.com",
  },

  // tax: 0.075,
  // currency: "USD",

  cartStyle: "table",

  cartColumns: [
    { attr: "name" , label: "Name" } ,
    { attr: "price" , label: "Price", view: 'currency' } ,
    { attr: "color" , label: "Product Id" } ,
    { attr: "quantity" , label: "Qty" } ,
    { attr: "total" , label: "SubTotal", view: 'currency' } ,
    { view: "remove" , text: "Remove" , label: false }
  ]

});

// simpleCart.currency({
  // code: "THB",
  // name: "Thai Baht",
  // symbol: "&#3647;",
  // delimiter: " ",
  // decimal: ",",
  // after: true,
  // accuracy: 0
// });

//* Refresh cart once simpleCart is ready to listen.
simpleCart.ready(function() {
  simpleCart.update();
});
