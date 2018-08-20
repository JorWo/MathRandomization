var cookingMethod = ["Steamed", "Fried","Raw","Stir fry","Deep fried","Smoked"];

var type = ["Spaghetti","Seafood","Steak","Hamburger","Curry","Chicken", "Rice", "Human","Pork", "Bread", "Potato"];

var randOne = (Math.floor(Math.random()*cookingMethod.length));
var randTwo = (Math.floor(Math.random()*type.length));

window.alert(cookingMethod[randOne] + " " + type[randTwo]);