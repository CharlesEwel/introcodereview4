//Business Logic

function Pizza(name, size, toppings) {
  this.customerName = name;
  this.pizzaSize = size;
  this.toppings = toppings;
}

Pizza.prototype.Price = function () {
  cost=8;
  if (this.pizzaSize===" small") {
    cost-=2;
  } else if (this.pizzaSize===" large") {
    cost+=2;
  } else if (this.pizzaSize==="n extra-large") {
    cost+=4;
  }
  for(var i=0;i<this.toppings.length;i++){
    cost+=1;
  }
  return cost;
}

Pizza.prototype.ToppingsString = function() {
 var toppingsString="";
 if(this.toppings.length>0) {
   toppingsString=toppingsString+this.toppings[0];
 }
 if(this.toppings.length>1) {
   for(i=1;i<this.toppings.length-1;i++) {
     toppingsString=toppingsString+", "+this.toppings[i];
   }
   toppingsString=toppingsString+", and " + this.toppings[this.toppings.length-1];
 }

 return toppingsString
}

//UI Logic

$(document).ready(function() {
  $("#pizza-order").submit(function(event) {
    event.preventDefault()
    var customerName = $("input#name").val();
    var size = $("input:radio[name=size]:checked").val();
    var toppings=[];
    $("input:checkbox[name=toppings]:checked").each(function(){
      toppings.push($(this).val())
    });
    var pizza = new Pizza(customerName, size, toppings);
    var orderPrice=pizza.Price();
    var toppingsString=pizza.ToppingsString();
    $("#order-output").show();
    $("#order-output").text("Thank you " + customerName + ", your total cost comes out to $" + orderPrice +" for a"+size+" "+toppingsString+" pizza. Our delivery will be there in 30 minutes or less.");
  });
});
