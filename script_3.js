// Ask @user a number to decide number of floor
var floor = prompt("Choisi un nombre d'etage");

// Convert floor into Integer
Number(floor);

function pyramid(floor) {
  for (let count = 0; count <= floor; count++) {
    let str = "";
    let i = 1;
    for (let j = 1; j <= 2 * floor; ++j) {
      if (i + j >= floor + 1 && i >= j - floor + 1) {
        str += count.toString() + " ";
        count++;
      } else {
        str += "  ";
      }
    }
    console.log(str);
  }
}
