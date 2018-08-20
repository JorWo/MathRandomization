var adjectives = ["big","small","tall","short","little","large","fast","slow", "dumb","smart"];

var name = prompt("What is your name?");
var randomAdjective = [Math.floor(Math.random()*adjectives.length)];
window.alert(name + " is " + adjectives[randomAdjective]);