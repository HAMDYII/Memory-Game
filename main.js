const cardArray = [
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "fries",
    img: "images/fries.png",
  },
  { name: "pizza", img: "images/pizza.png" },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "fries",
    img: "images/fries.png",
  },
];

let i = 0;

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.getElementById("grid");
const resultDisplay = document.getElementById("result");
let chosenCards = [];
let chosenCardsIds = [];
let checkedCards = [];

const createBoard = () => {
  cardArray.forEach((card) => {
    const flashCard = document.createElement("img");
    flashCard.setAttribute("src", "images/blank.png");
    flashCard.setAttribute("alt", "card");
    flashCard.setAttribute("data-id", i);
    flashCard.addEventListener("click", flipCard);
    gridDisplay.appendChild(flashCard);
    i++;
  });
};

createBoard();

function flipCard() {
  const cardId = this.getAttribute("data-id");
  chosenCards.push(cardArray[cardId].name);
  chosenCardsIds.push(cardId);
  console.log(chosenCards);
  console.log(chosenCardsIds);
  this.setAttribute("src", cardArray[cardId].img);
  setTimeout(checkMatch, 1000);
}

const checkMatch = () => {
  const cards = document.querySelectorAll("img");
  let optionOne = chosenCardsIds[0];
  let optionTwo = chosenCardsIds[1];

  if (chosenCards.length === 2) {
    console.log("check for match");
    if (chosenCards[0] === chosenCards[1]) {
      cards[optionOne].setAttribute("src", "images/white.png");
      cards[optionTwo].setAttribute("src", "images/white.png");
      cards[optionOne].removeEventListener("click", flipCard);
      cards[optionTwo].removeEventListener("click", flipCard);
      checkedCards.push(chosenCards);
    } else {
      cards[optionOne].setAttribute("src", "images/blank.png");
      cards[optionTwo].setAttribute("src", "images/blank.png");
    }
    resultDisplay.textContent = checkedCards.length;
    if (checkedCards.length === cardArray.length / 2) {
      resultDisplay.textContent = "Congratulations! You matched them all";
    }
    chosenCards = [];
    chosenCardsIds = [];
  }
};
