import { words } from "./words.js";

//gets random number
const random = Math.floor(Math.random() * words.length);
//gets a word from array using random number generated
const theWord = words[random];
console.log(theWord);
// turns the og word into an array of 5 letters
const word = theWord.split("");
console.log(word);
//User's first guess in input box
const userGuess1 = document.getElementsByTagName("input")[0];
console.log(userGuess1);
//A way for user to register guesss 1
const button1 = document.getElementsByTagName("button")[0];
console.log(button1);

const userGuess2 = document.getElementsByTagName("input")[1];
const button2 = document.getElementsByTagName("button")[1];
const userGuess3 = document.getElementsByTagName("input")[2];
const button3 = document.getElementsByTagName("button")[2];
const userGuess4 = document.getElementsByTagName("input")[3];
const button4 = document.getElementsByTagName("button")[3];
const userGuess5 = document.getElementsByTagName("input")[4];
const button5 = document.getElementsByTagName("button")[4];
const userGuess6 = document.getElementsByTagName("input")[5];
const button6 = document.getElementsByTagName("button")[5];

const checkGuess = (ug, outputDisplay, button, userGuess) => {
  for (let i = 0; i < ug.length; i++) {
    const character = ug[i];
    console.log("ug1 outside if character " + character);
    console.log("ug1 outside if i " + i);

    for (let index = 0; index < word.length; index++) {
      const char = word[index];
      console.log("word outside if char " + char);
      console.log("word outside if index " + index);

      outputDisplay[i].innerHTML = ug[i];
      console.log(ug[i]);

      if (character === char && i === index) {
        outputDisplay[i].style.backgroundColor = "green";
      } else if (character === char) {
        outputDisplay[i].style.backgroundColor = "yellow";
      }
    }
    button.disabled = true;
    userGuess.readOnly = true;
  }
};

//What happens when user presses button1
button1.addEventListener("click", (e) => {
  e.preventDefault();
  //gets the user's guess from input box
  console.log(userGuess1.value);

  if (words.includes(userGuess1.value)) {
    console.log("this is a word");

    //turns user guess into array of 5 letters
    let ug1 = userGuess1.value.split("");
    console.log(ug1);

    const outputDisplay = document.querySelectorAll(".UG1");
    console.log(outputDisplay);

    checkGuess(ug1, outputDisplay, button1, userGuess1);
  } else {
    console.log("GET A DICTIONARY");
  }
});

button2.addEventListener("click", (e) => {
  e.preventDefault();
  //gets the user's guess from input box
  console.log(userGuess2.value);

  if (words.includes(userGuess2.value)) {
    console.log("this is a word");

    //turns user guess into array of 5 letters
    let ug2 = userGuess2.value.split("");
    console.log(ug2);

    const outputDisplay = document.querySelectorAll(".UG2");
    console.log(outputDisplay);

    checkGuess(ug2, outputDisplay, button2, userGuess2);
  } else {
    console.log("GET A DICTIONARY");
  }
});

button3.addEventListener("click", (e) => {
  e.preventDefault();
  //gets the user's guess from input box
  console.log(userGuess3.value);

  if (words.includes(userGuess3.value)) {
    console.log("this is a word");

    //turns user guess into array of 5 letters
    let ug3 = userGuess3.value.split("");
    console.log(ug3);

    const outputDisplay = document.querySelectorAll(".UG3");
    console.log(outputDisplay);

    checkGuess(ug3, outputDisplay, button3, userGuess3);
  } else {
    console.log("GET A DICTIONARY");
  }
});

button4.addEventListener("click", (e) => {
  e.preventDefault();
  //gets the user's guess from input box
  console.log(userGuess4.value);

  if (words.includes(userGuess4.value)) {
    console.log("this is a word");

    //turns user guess into array of 5 letters
    let ug4 = userGuess4.value.split("");
    console.log(ug4);

    const outputDisplay = document.querySelectorAll(".UG4");
    console.log(outputDisplay);

    checkGuess(ug4, outputDisplay, button4, userGuess4);
  } else {
    console.log("GET A DICTIONARY");
  }
});

button5.addEventListener("click", (e) => {
  e.preventDefault();
  //gets the user's guess from input box
  console.log(userGuess5.value);

  if (words.includes(userGuess5.value)) {
    console.log("this is a word");

    //turns user guess into array of 5 letters
    let ug5 = userGuess5.value.split("");
    console.log(ug5);

    const outputDisplay = document.querySelectorAll(".UG5");
    console.log(outputDisplay);

    checkGuess(ug5, outputDisplay, button5, userGuess5);
  } else {
    console.log("GET A DICTIONARY");
  }
});

button6.addEventListener("click", (e) => {
    e.preventDefault();
    //gets the user's guess from input box
    console.log(userGuess6.value);
  
    if (words.includes(userGuess6.value)) {
      console.log("this is a word");
  
      //turns user guess into array of 5 letters
      let ug6 = userGuess6.value.split("");
      console.log(ug6);
  
      const outputDisplay = document.querySelectorAll(".UG6");
      console.log(outputDisplay);
  
      checkGuess(ug6, outputDisplay, button6, userGuess6);
  
    } else {
      console.log("GET A DICTIONARY");
    }
  });
// make a seperate function to update 5 divs with userGuess
// array strings by index and input into each div.innerHTML

//mapping through user guess for each letter of the word returning
// check against 3 conditions and return a different string for each
//condition if(index of word i === index of userGuess i ){
//    return match;
// } else if (index of word  .includes){ return incorrect}

//outputDisplay[index].style.backgroundColor = 'grey';
//   if (character === char) {
//     console.log("ug1 inside if character " + character);
//     console.log("word inside if char inside " + char);
//     console.log(outputDisplay[index]);
//     outputDisplay[index].style.backgroundColor = "green";
//   } else {
//     outputDisplay[index].style.backgroundColor = "grey";
//   }

//   if (ug1[0] === word[0]){
//       console.log('green');
//       outputDisplay.style.backgroundColor = "green";
//   }
//   console.log(ug1[0], word[0]);

//   ug1.forEach((character, i) => {
//     console.log("ug1 outside if character " + character);
//     console.log("ug1 outside if i " + i);
//     word.forEach((char, index) => {
//       console.log("word outside if char " + char);
//       console.log("word outside if index " + index);
//       outputDisplay[index].innerHTML = ug1[index];
//       console.log(ug1[index]);

//       if (character === char && i !== index) {
//         outputDisplay[index].style.backgroundColor = "yellow";
//       }

//       if (character === char && i === index) {
//         outputDisplay[index].style.backgroundColor = "green";
//       }
//       button1.disabled = true;
//       userGuess1.readOnly = true;
//     });
//   });
