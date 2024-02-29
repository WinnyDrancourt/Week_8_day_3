// Ask for number by prompt
var num = prompt("Choisir un nombre pour calculer son factoriel :");

// Convert num into Integer
Number(num);

function factorialize(num) {
  if (num < 0) return -1;
  else if (num == 0) return 1;
  else {
    return num * factorialize(num - 1);
  }
}
console.log(factorialize(num));
