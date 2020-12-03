const reverseArray = (array) => {
    let revarry = [];
    for (let i = 0; i < array.length; i++) {
        revarry.unshift(array[i]);
    }
    return revarry;
}

const greetAliens = (array) => {
    for (word of array) {
        console.log(`Oh powerful ${word}, we humans offer our unconditional surrender!`);
    }
}

const convertToBaby = (array)=>{
    let babified=[];
    for( let i=0; i<array.length; i++ ){
        babified.push(`baby ${array[i]}`);
    }
    return babified;
}

const declineEverything = array =>{
    array.forEach(politelyDecline);
  };
  
  const acceptEverything = array =>{
    array.forEach(word=>console.log(`Ok, I guess I will eat some ${word}.`));
  };

const square = array =>{

    let squrt = array.map(num=> num*num);
    return squrt;
}

const shoutGreetings = arr =>{
    let newArr = arr.map(string => string.toUpperCase())
  
    return newArr.map(word=>`${word}!`);
  }
  const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];
  
  console.log(shoutGreetings(greetings))
  // Should print [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]

/*

???????????????????????????????????
  const speciesArray = [ 
    {speciesName:'shark', numTeeth:50}, 
    {speciesName:'dog', numTeeth:42}, 
    {speciesName:'alligator', numTeeth:80},
    {speciesName:'human', numTeeth:32}];
  
  const sortSpeciesByTeeth = arr => 
    arr.sort((speciesObj1, speciesObj2) =>
      speciesObj1.numTeeth > speciesObj2.numTeeth)
  
  console.log(sortSpeciesByTeeth(speciesArray))
  ??????????????????????????????????

  */

  // Write your code here:
const dogFactory = (name, breed, weight)=>{
    return {
      _name: name,
      _breed: breed,
      _weight: weight,
      get name(){
        return this._name;
      },
      set name(newName){
        return this._name = newName;
      },
      get breed(){
        return this._breed;
      },
      set breed(newBreed){
        return this._breed = newBreed;
      },
      get weight(){
        return this._weight;
      },
      set weight(newWeight){
        return this._weight = newWeight;
      },
      bark(){
        return `ruff! ruff!`;
      },
      eatTooManyTreats(){
        this.weight++;
      }
  
    };
  };
/*
  Write a function subLength() that takes 2 parameters, a string and a single character. The function should search the string for the two occurrences of the character and return the length between them including the 2 characters. If there are less than 2 or more than 2 occurrences of the character the function should return 0.

  Examples:
  */
  subLength('Saturday', 'a'); // returns 6
  subLength('summer', 'm'); // returns 2
  subLength('digitize', 'i'); // returns 0
  subLength('cheesecake', 'k'); // returns 0


function subLength(string, char){
    const regX = new RegExp(char,'g');
    const regXarray = string.match(regX);
    const lCount = regXarray.length;
    //console.log(lCount);

    if(lCount !== 2){
        return 0;
    }else{
        //console.log(string.split(char))
        let distance = 2+(string.split(char)[1].length)
        return distance;
    }
}


/*
Write a function groceries() that takes an array of object literals of grocery items. The function should return a string with each item separated by a comma except the last two items should be separated by the word 'and'. Make sure spaces (' ') are inserted where they are appropriate.

Examples:
*/
groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] );
// returns 'Carrots, Hummus, Pesto and Rigatoni'
 
groceries( [{item: 'Bread'}, {item: 'Butter'}] );
// returns 'Bread and Butter'
 
groceries( [{item: 'Cheese Balls'}] );
// returns 'Cheese Balls'

function groceries(arrObj){
    let string = [];
    for(let i=0; i<arrObj.length; i++){
     string.push(Object.values(arrObj[i]));
    }
    string = string.toString();
    string = string.split(',').join(', x');
    string = string.split('x');
    if(string.length > 1){
    string.splice(string.length-1,0,'and ');
    }
    string.push(".")
    string =  string.join('');
    
    console.log(string);

}
groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] );







//////////////////////////////

let MessageMixer ={};
const countCharacter = function (inputString, inputCharacter) {
  let count = 0;
  let string = inputString.toLowerCase();
  let character = inputCharacter.toLowerCase();
    for (let i = 0; i < string.length; i++) {
      if (string[i] === character) {
         count++;
      }
    }
  return count; 
};

const capitalizeFirstCharacterOfWords =function(string) {
  let arr = string.split(" ");  
    for (let i = 0; i < arr.length; i++) {  
      let word = arr[i];
        arr[i] = word[0].toUpperCase() + word.substring(1); 
    }
  return arr.join(" "); 
};


const reverseWord = function(word) {
  return word.split("").reverse().join("");
};

const reverseAllWords = function(sentence) {
  let words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = reverseWord(words[i]);
    }
   return words.join(" ");
};


const replaceFirstOccurence = function(string, toBeReplaced, replaceWith) {
  return string.replace(toBeReplaced, replaceWith);
};


const replaceAllOccurrences = function(string, toBeReplaced, replaceWith) {
  return string.split(toBeReplaced).join(replaceWith);
};

const encode = function(string) {
  let replacementObject = { "a": "@", "s": "$", "i": "!", "o":"0" };
    for (let key in replacementObject) {
      string = replaceAllOccurrences(string, key, replacementObject[key]); 
    }	
    return string;
};

const palindrome = function(str){
  return `${str}${reverseWord(str)}}`
};

const pigLatin = function(sentence, character){
  return sentence.split(' ').join(' '+character+' ');
}
export {countCharacter,capitalizeFirstCharacterOfWords,reverseWord,reverseAllWords,replaceFirstOccurence,replaceAllOccurrences,encode,palindrome,pigLatin};







import {countCharacter,capitalizeFirstCharacterOfWords,reverseWord,reverseAllWords,replaceFirstOccurence,replaceAllOccurrences,encode,palindrome,pigLatin} from './messageMixer';

function displayMessage() {
  console.log(countCharacter("What is the color of the sky?", "t"));
  console.log(capitalizeFirstCharacterOfWords("What is the color of the sky?"));
  console.log(reverseWord("What is the color of the sky?"));
  console.log(reverseAllWords("What is the color of the sky?"));
  console.log(replaceFirstOccurence("What is the color of the sky?", "sky", "water"));
  console.log(encode("What is the color of the sky?"));
    console.log(palindrome("What is the color of the sky?"));
  console.log(pigLatin("What is the color of the sky?", "t"));
};


displayMessage();
