// 1 - Reverse a String

// Write a JavaScript function that takes in a string and reverses it. A for loop would be handy for this!

function reverseWord(word) {
  var letterHolder = "";
  for (var i = word.length - 1; i >= 0; i--) {
    letterHolder += word[i];
  }
  console.log(letterHolder);
}

reverseWord("Watch me work!");
reverseWord("!!!!taht ees uoy diD");
console.log(
  "-------------------------------------------------------------------------------------------------------------------------------------------------------"
);
// 2 - FizzBuzz

// Write a program that console.logs the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five console.log “Buzz”. For numbers which are multiples of both three and five console.log “FizzBuzz”. Hint: Look into the '%' operator
function oneToOneHundred() {
  for (var i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
    } else {
      console.log(i);
    }
  }
}
oneToOneHundred();

console.log(
  "-------------------------------------------------------------------------------------------------------------------------------------------------------"
);
// 3 - Pig Latin

// Pig Latin is a game of alterations played on the English language. To create the Pig Latin form of an English word the initial consonant sound is transposed to the end of the word and an ay is affixed (Ex.: "banana" would yield "anana-bay"). Check out Wikipedia (Links to an external site.)Links to an external site. for more information on rules - try to get as close as possible.

// Compose a javascript function that takes in a regular sentence or paragraph and returns the Pig Latin equivalent.
var firstLetter = "";
var restOfWord = "";
var pigLatinWord = "";

function pigLatin(word) {
  if (
    word[0].toLowerCase() == "a" ||
    word[0].toLowerCase() == "e" ||
    word[0].toLowerCase() == "i" ||
    word[0].toLowerCase() == "o" ||
    word[0].toLowerCase() == "u"
  ) {
    pigLatinWord = word + "ay";
    console.log(word);
  } else {
    for (var i = 1; i < word.length; i++) {
      restOfWord += word[i];
    }
    console.log(word + " test");
    console.log(restOfWord);
    firstLetter += word[0] + "ay";
    pigLatinWord = restOfWord + firstLetter;
  }

  return pigLatinWord;
}

pigLatin("amian");
console.log(pigLatinWord);
