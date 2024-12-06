// #1.
const recipeName = document.querySelector("#recipe-name");
console.log(recipeName.textContent);

// #2.
console.log(recipeName);

// #3.
const recipeDescription = document.querySelector("p.description");

const realFontSize = window.getComputedStyle(recipeDescription);

console.log(realFontSize.fontSize); // 16px

// #4.
const image = document.querySelector("img");

const valueOfAlt = image.getAttribute("alt");

console.log(valueOfAlt); // Slice of frozen cheesecake

// #5.
const imgEl = document.querySelector("img");

const imgURL = imgEl.src; // imgEl finns inte i html filen, därav tilldelar vi den vår JS variabel jag skapade och en pinkt för att hitta värdets source

const imgHeight = document.querySelector("img").scrollHeight; // inom parentes = target, utanför parentes = få värdet
const imgWidth = document.querySelector("img").scrollWidth;

const imgObject = {
  url: imgURL,
  height: imgHeight,
  width: imgWidth,
};

console.log(imgObject); // height: 553 width: 460 url: "http://127.0.0.1:5500/assets/frozen-cheesecake-slice.jpg"

// #6.
const pasteIngredients = document.querySelector(".ingredients-list-paste");
console.log(pasteIngredients.innerText); // 5st

// #7.
const numFour = document.querySelectorAll(".ingredients-list-paste li");

console.log(numFour[3].innerText);

// #8.
const variableList = document.querySelectorAll(
  "article.instructions-container li"
);
const arrayOfObj = [];
variableList.forEach((lista, index) => {
  const instructionObj = {
    order: index + 1,
    text: lista.innerText,
  };
  arrayOfObj.push(instructionObj);
});
console.log(arrayOfObj);

// Part 2.
// #1.
document.querySelector(".logo-text").style.color = "#384241";

// #2.
const header = document.querySelector("header");
header.style.display = "flex";
header.style.alignItems = "center";
header.style.gap = "30px";

// #3.
header.style.borderBottom = "1px solid lightgray";

// #4.
document.querySelector("#recipe-name").textContent = "Frozen Cheesecake";

// #5.
const timeIcon = document.querySelector(".time-container span");
timeIcon.classList.add("material-icons");
timeIcon.textContent = "av_timer"; // Ensure the correct icon name is set

// #6.
document.querySelector(".time").textContent = "60+ min";

// #.7
document.querySelector(".image-container img").src =
  "assets/frozen-cheesecake-slice.jpg";

// # 8.
document.querySelector(".ingredients-container").style.backgroundColor =
  "#f9f9f9";

// #9.
const bottomList = document.querySelector(".ingredients-list-bottom");
bottomList.innerHTML = `
  <li>15st digistivetex</li>
  <li>Lite smör</li>
`;

// #10.
const newPasteIngredients = document.querySelectorAll(
  ".ingredients-list-paste li"
);
newPasteIngredients[2].textContent = "3tsk vaniljsocker";

// #11.
const newIngredient = document.createElement("li");
newIngredient.textContent = "400g naturell philadelphiaost";
document.querySelector(".ingredients-list-paste").appendChild(newIngredient);

// #12.
document.querySelector(".instructions").classList.remove("shadow");

// #13.
const instructions = document.querySelectorAll(".instructions-list li");

// Correcting the second instruction
instructions[1].textContent =
  "Separera äggulor och äggvitor. Lägg äggvitorna i en stor bunke och äggulorna i en liten bunke.";

// Correcting the ninth instruction
instructions[8].textContent = "Ställ in i frysen över natten.";

// #14.
