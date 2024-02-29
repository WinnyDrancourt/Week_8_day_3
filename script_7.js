// User prompt
const userInput = prompt("Chat with me !");

// Compare and transform

function compareTransform(userInput) {
  if (userInput.endsWith("?")) {
    return "Ouai Ouai...";
  } else if (userInput === userInput.toUpperCase()) {
    return "Pwa, calme-toi...";
  } else if (userInput.includes("Fortnite")) {
    return "On s'fait une partie soum-soum ?";
  } else if (!userInput.trim()) {
    return "T'es en PLS ?";
  } else {
    return "Balek !";
  }
}
console.log(compareTransform(userInput));
