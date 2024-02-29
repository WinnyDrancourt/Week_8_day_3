// Ask @user a number to decide number of floor
var floor = prompt("Choisi un nombre d'etage");

// Convert floor into Integer
Number(floor);

function pyramid(floor) {
  for (let count = 1; count <= floor; count++) {
    let str = "#";
    let space = " ";
    console.log(space.repeat(floor - count) + str.repeat(count));
  }
}
console.log(pyramid(floor));
