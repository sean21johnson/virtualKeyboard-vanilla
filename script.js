// TARGET ELEMENTS
const textBox = document.getElementById("text_content");
const removeKey = document.getElementById("delete");
const comma = document.getElementById("comma");
const period = document.getElementById("period");
const questionMark = document.getElementById("question");
const enter = document.getElementById("enter");
const caps = document.getElementById("caps");
const spaceBar = document.getElementById("spacebar");
const completed = document.getElementById("complete");

// LISTS OF NUMBERS & LETTERS TO LOOP THROUGH
const nums = [
	"one",
	"two",
	"three",
	"four",
	"five",
	"six",
	"seven",
	"eight",
	"nine",
	"zero",
];
const letters = [
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"y",
	"x",
	"z",
];

let currentCharacters = [];
let currentCapsState = false;

// Function to handleClick event
function handleClick(content) {
    completed.classList.remove("complete")
	currentCharacters.push(content.innerText);
	displayCharacters();
}

// Function to display whatever is in the currentCharacters array
function displayCharacters() {
	textBox.innerText = currentCharacters.join("");
}

// Function to change the letters to all caps
function changeCaps() {
	/*
        loop through all of the letters and change the innerText to uppercase or lowercase depending on the state of currentCapsState
    */

	currentCapsState === false
		? letters.forEach(letter => {
            const currentLetter = document.getElementById(letter)
            currentLetter.innerText = letter.toUpperCase();
            currentCapsState = true;
            caps.classList.add("uppercase")
        })
		: letters.forEach(letter => {
            const currentLetter = document.getElementById(letter);
            currentLetter.innerText = letter.toLocaleLowerCase();
            currentCapsState = false;
            caps.classList.remove("uppercase")
        })
}

// Add an event listener to each of the nums
nums.forEach((num) => {
	const currentNum = document.getElementById(num);
	currentNum.addEventListener("click", () => handleClick(currentNum));
});

letters.forEach((letter) => {
	const currentLetter = document.getElementById(letter);
	currentLetter.addEventListener("click", () => handleClick(currentLetter));
});

comma.addEventListener("click", () => handleClick(comma));
period.addEventListener("click", () => handleClick(period));
questionMark.addEventListener("click", () => handleClick(questionMark));
spaceBar.addEventListener("click", () => {
    completed.classList.remove("complete")
	currentCharacters.push(" ");
	displayCharacters();
});
removeKey.addEventListener("click", () => {
    completed.classList.remove("complete")
	currentCharacters.pop();
	displayCharacters();
});
enter.addEventListener("click", () => {
    completed.classList.remove("complete")
	currentCharacters.push("\n");
});
completed.addEventListener("click", () => {
	alert("You have completed the exercise");
    currentCharacters = [];
    displayCharacters();
	completed.classList.add("complete");
    caps.classList.remove("uppercase")
});

caps.addEventListener("click", () => {
	changeCaps();
});
