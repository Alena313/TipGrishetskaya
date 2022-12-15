alert("hijn");
let fruits = ["Яблоко", "Апельсин", "Груша", "Лимон"];

getRandomArbitary(0,3);

function getRandomArbitary(min, max)
{ 
alert( min + Math.floor(Math.random() * (max + 1 - min)));
}
