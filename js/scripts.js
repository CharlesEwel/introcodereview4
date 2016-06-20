//Business Logic

function Pizza(name, size, toppings) {
  this.customerName = name;
  this.pizzaSize = size;
  this.toppings = toppings;
}

Pizza.prototype.price = function () {
  cost=8;
  if (this.pizzaSize==="small") {
    cost-=2;
  } else if (this.pizzaSize==="large") {
    cost+=2;
  } else if (this.pizzaSize==="extra-large") {
    cost+=4;
  }
  return cost;
}

//UI Logic

$(document).ready(function() {
  $("#pizza-order").submit(function(event) {
    event.preventDefault()
    var customerName = $("input#name").val();
    var size = $("input:radio[name=size]:checked").val();
    var pizza = new Pizza(customerName, size, "toppings")
    orderPrice=pizza.price();
    $("#order-output").text("Your total cost comes out to " + orderPrice);
  });
});
