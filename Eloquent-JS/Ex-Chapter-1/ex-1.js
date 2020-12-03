/*
for(let i = 0; i <= 7; i++){
    console.log(`#`.repeat(i));
    }

for ( let line = `#`; line.length <= 7; line = line + `#`)
    console.log(line);
*/
/*
for (let i=1; i<=100;i++){
    if (  i%3===0  &&  i%5 ===0){
        console.log(`FizzBuzz`);
    }else if ( i % 3 === 0 ){
        console.log(`Fizz`);
    }else if ( i % 5 === 0 ){
        console.log(`Buzz`);
    }else{ console.log(`${i}`);}
}
*/
/*
for (let n = 1; n <= 100; n++) {
    let output = "";
    if( n % 3 ===0 ) output += "Fizz";
    if( n % 5 === 0 ) output += "Buzz";
    console.log(output || n);
}
*/
// const grid = 8;
// let output = ` `;

// for ( let i = 0; i < grid; i++){
//     output += '\n';
//     for( let j = 0; j< grid; j++){
//         j%2 ? output +=` ` : output += `#`;
//     }
// }
// console.log(output);
/*
const size = 8;
let output = ``;
for (let i = 1; i <= size; i++) {
    for (let j = 1; j <= size; j++) {
    j % 2 ? output += `#` : output += ` `;
    }
    i % 2 ? output += `\n ` : output += `\n`;
}console.log(output);

let sizes = 8;
let board = "";
for (let y = 0; y < sizes; y++) {
  for (let x = 0; x < sizes; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}
console.log(board);
*/
/*
function number( x ){
  return function numberlette( y ){
    return x * y;
  };
};

let multiply = number( 5 );
console.log(multiply( 100 ));
*/
/*
function findSolution(target) {
  function find(current, history) {
    if (current == target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      return (find(current + 5, `(${history} + 5 )`) || find(current * 3, `(${history} * 3)`));
    }
  }
  return find( 1, ` 1`);
}
*/
/*
function fib(num){
  if (num < 2){
    return num;
  }else{
    return fib(num-1) + fib(num-2);
  }
}
*/
/*
function findSolution(target){
  function saveSolution(current,history){
    if ( current == target ){
      return history;
    }else if ( current > target ){
      return null;
    }else{
      return saveSolution(current + 5, `( ${history} + 5 )`) ||
                    saveSolution(current * 3, `( ${history} * 3 )`);
    }
  }return saveSolution( 1, ` 1`);
}
*/
/*
function min(x, y) {
  if (x > y) {return y;} else if (x == y) {return `equal`;} else {return x;}}
*/
/*
function isEven(x) {
  if (x >= 0) {
    if (x - 2 == 0) {
      return true;
    } else if (x - 1 == 0) {
      return false;
    } else {
      return isEven(x - 2);
    }
  } else {
    return isEven(x * -1);
  }
}
*/
/*
function countBs( string ){
  let counter = 0;
  for( let i = 0; i <= string.length; i++){
    if(string[i] === `B`){
       counter++;
    }
  }
  console.log (counter);
}
*/
/*
function countBs( string, letter ){
  let counter = 0;
  for( let i = 0; i <= string.length; i++){
    if(string[i] === letter){
       counter++;
    }
  }
  console.log (counter);
}
*/

// let hacker = {
//   alies : `hackersploit`,
//   name : `arramin`,
//   age : 32,
//   email : `ar.amin@gmail.com`,
//   skillz : 
// }

/*################################################################################# */

let journal = [{
    "events": ["carrot", "exercise", "weekend"],
    "squirrel": false
  },
  {
    "events": ["bread", "pudding", "brushed teeth", "weekend", "touched tree"],
    "squirrel": false
  },
  {
    "events": ["carrot", "nachos", "brushed teeth", "cycling", "weekend"],
    "squirrel": false
  },
  {
    "events": ["brussel sprouts", "ice cream", "brushed teeth", "computer", "weekend"],
    "squirrel": false
  },
  {
    "events": ["potatoes", "candy", "brushed teeth", "exercise", "weekend", "dentist"],
    "squirrel": false
  },
  {
    "events": ["brussel sprouts", "pudding", "brushed teeth", "running", "weekend"],
    "squirrel": false
  },
  {
    "events": ["pizza", "brushed teeth", "computer", "work", "touched tree"],
    "squirrel": false
  },
  {
    "events": ["bread", "beer", "brushed teeth", "cycling", "work"],
    "squirrel": false
  },
  {
    "events": ["cauliflower", "brushed teeth", "work"],
    "squirrel": false
  },
  {
    "events": ["pizza", "brushed teeth", "cycling", "work"],
    "squirrel": false
  },
  {
    "events": ["lasagna", "nachos", "brushed teeth", "work"],
    "squirrel": false
  },
  {
    "events": ["brushed teeth", "weekend", "touched tree"],
    "squirrel": false
  },
  {
    "events": ["lettuce", "brushed teeth", "television", "weekend"],
    "squirrel": false
  },
  {
    "events": ["spaghetti", "brushed teeth", "work"],
    "squirrel": false
  },
  {
    "events": ["brushed teeth", "computer", "work"],
    "squirrel": false
  },
  {
    "events": ["lettuce", "nachos", "brushed teeth", "work"],
    "squirrel": false
  },
  {
    "events": ["carrot", "brushed teeth", "running", "work"],
    "squirrel": false
  },
  {
    "events": ["brushed teeth", "work"],
    "squirrel": false
  },
  {
    "events": ["cauliflower", "reading", "weekend"],
    "squirrel": false
  },
  {
    "events": ["bread", "brushed teeth", "weekend"],
    "squirrel": false
  },
  {
    "events": ["lasagna", "brushed teeth", "exercise", "work"],
    "squirrel": false
  },
  {
    "events": ["spaghetti", "brushed teeth", "reading", "work"],
    "squirrel": false
  },
  {
    "events": ["carrot", "ice cream", "brushed teeth", "television", "work"],
    "squirrel": false
  },
  {
    "events": ["spaghetti", "nachos", "work"],
    "squirrel": false
  },
  {
    "events": ["cauliflower", "ice cream", "brushed teeth", "cycling", "work"],
    "squirrel": false
  },
  {
    "events": ["spaghetti", "peanuts", "computer", "weekend"],
    "squirrel": true
  },
  {
    "events": ["potatoes", "ice cream", "brushed teeth", "computer", "weekend"],
    "squirrel": false
  },
  {
    "events": ["potatoes", "ice cream", "brushed teeth", "work"],
    "squirrel": false
  },
  {
    "events": ["peanuts", "brushed teeth", "running", "work"],
    "squirrel": false
  },
  {
    "events": ["potatoes", "exercise", "work"],
    "squirrel": false
  },
  {
    "events": ["pizza", "ice cream", "computer", "work"],
    "squirrel": false
  },
  {
    "events": ["lasagna", "ice cream", "work"],
    "squirrel": false
  },
  {
    "events": ["cauliflower", "candy", "reading", "weekend"],
    "squirrel": false
  },
  {
    "events": ["lasagna", "nachos", "brushed teeth", "running", "weekend"],
    "squirrel": false
  },
  {
    "events": ["potatoes", "brushed teeth", "work"],
    "squirrel": false
  },
  {
    "events": ["carrot", "work"],
    "squirrel": false
  },
  {
    "events": ["pizza", "beer", "work", "dentist"],
    "squirrel": false
  },
  {
    "events": ["lasagna", "pudding", "cycling", "work"],
    "squirrel": false
  },
  {
    "events": ["spaghetti", "brushed teeth", "reading", "work"],
    "squirrel": false
  },
  {
    "events": ["spaghetti", "pudding", "television", "weekend"],
    "squirrel": false
  },
  {
    "events": ["bread", "brushed teeth", "exercise", "weekend"],
    "squirrel": false
  },
  {
    "events": ["lasagna", "peanuts", "work"],
    "squirrel": true
  },
  {
    "events": ["pizza", "work"],
    "squirrel": false
  },
  {
    "events": ["potatoes", "exercise", "work"],
    "squirrel": false
  },
  {
    "events": ["brushed teeth", "exercise", "work"],
    "squirrel": false
  },
  {
    "events": ["spaghetti", "brushed teeth", "television", "work"],
    "squirrel": false
  },
  {
    "events": ["pizza", "cycling", "weekend"],
    "squirrel": false
  },
  {
    "events": ["carrot", "brushed teeth", "weekend"],
    "squirrel": false
  },
  {
    "events": ["carrot", "beer", "brushed teeth", "work"],
    "squirrel": false
  },
  {
    "events": ["pizza", "peanuts", "candy", "work"],
    "squirrel": true
  },
  {
    "events": ["carrot", "peanuts", "brushed teeth", "reading", "work"],
    "squirrel": false
  },
  {
    "events": ["potatoes", "peanuts", "brushed teeth", "work"],
    "squirrel": false
  },
  {
    "events": ["carrot", "nachos", "brushed teeth", "exercise", "work"],
    "squirrel": false
  },
  {
    "events": ["pizza", "peanuts", "brushed teeth", "television", "weekend"],
    "squirrel": false
  },
  {
    "events": ["lasagna", "brushed teeth", "cycling", "weekend"],
    "squirrel": false
  },
  {
    "events": ["cauliflower", "peanuts", "brushed teeth", "computer", "work", "touched tree"],
    "squirrel": false
  },
  {
    "events": ["lettuce", "brushed teeth", "television", "work"],
    "squirrel": false
  },
  {
    "events": ["potatoes", "brushed teeth", "computer", "work"],
    "squirrel": false
  },
  {
    "events": ["bread", "candy", "work"],
    "squirrel": false
  },
  {
    "events": ["potatoes", "nachos", "work"],
    "squirrel": false
  },
  {
    "events": ["carrot", "pudding", "brushed teeth", "weekend"],
    "squirrel": false
  },
  {
    "events": ["carrot", "brushed teeth", "exercise", "weekend", "touched tree"],
    "squirrel": false
  },
  {
    "events": ["brussel sprouts", "running", "work"],
    "squirrel": false
  },
  {
    "events": ["brushed teeth", "work"],
    "squirrel": false
  },
  {
    "events": ["lettuce", "brushed teeth", "running", "work"],
    "squirrel": false
  },
  {
    "events": ["candy", "brushed teeth", "work"],
    "squirrel": false
  },
  {
    "events": ["brussel sprouts", "brushed teeth", "computer", "work"],
    "squirrel": false
  },
  {
    "events": ["bread", "brushed teeth", "weekend"],
    "squirrel": false
  },
  {
    "events": ["cauliflower", "brushed teeth", "weekend"],
    "squirrel": false
  },
  {
    "events": ["spaghetti", "candy", "television", "work", "touched tree"],
    "squirrel": false
  },
  {
    "events": ["carrot", "pudding", "brushed teeth", "work"],
    "squirrel": false
  },
  {
    "events": ["lettuce", "brushed teeth", "work"],
    "squirrel": false
  },
  {
    "events": ["carrot", "ice cream", "brushed teeth", "cycling", "work"],
    "squirrel": false
  },
  {
    "events": ["pizza", "brushed teeth", "work"],
    "squirrel": false
  },
  {
    "events": ["spaghetti", "peanuts", "exercise", "weekend"],
    "squirrel": true
  },
  {
    "events": ["bread", "beer", "computer", "weekend", "touched tree"],
    "squirrel": false
  },
  {
    "events": ["brushed teeth", "running", "work"],
    "squirrel": false
  },
  {
    "events": ["lettuce", "peanuts", "brushed teeth", "work", "touched tree"],
    "squirrel": false
  },
  {
    "events": ["lasagna", "brushed teeth", "television", "work"],
    "squirrel": false
  },
  {
    "events": ["cauliflower", "brushed teeth", "running", "work"],
    "squirrel": false
  },
  {
    "events": ["carrot", "brushed teeth", "running", "work"],
    "squirrel": false
  },
  {
    "events": ["carrot", "reading", "weekend"],
    "squirrel": false
  },
  {
    "events": ["carrot", "peanuts", "reading", "weekend"],
    "squirrel": true
  },
  {
    "events": ["potatoes", "brushed teeth", "running", "work"],
    "squirrel": false
  },
  {
    "events": ["lasagna", "ice cream", "work", "touched tree"],
    "squirrel": false
  },
  {
    "events": ["cauliflower", "peanuts", "brushed teeth", "cycling", "work"],
    "squirrel": false
  },
  {
    "events": ["pizza", "brushed teeth", "running", "work"],
    "squirrel": false
  },
  {
    "events": ["lettuce", "brushed teeth", "work"],
    "squirrel": false
  },
  {
    "events": ["bread", "brushed teeth", "television", "weekend"],
    "squirrel": false
  },
  {
    "events": ["cauliflower", "peanuts", "brushed teeth", "weekend"],
    "squirrel": false
  }
];

function addEntry(events, squirrel) {
  journal.push({
    events,
    squirrel
  });
};

// function phi(table) {
//   return (
//     (table[3] * table[0] - table[2] * table[1]) /
//     Math.sqrt(
//       (table[3] + table[2]) *
//       (table[0] + table[1]) *
//       (table[3] + table[1]) *
//       (table[0] + table[2])
//     )
//   );
// };

function phi( table){
  let n00=table[0], n11=table[3], n01=table[1], n10=table[2];
  return(n00*n11 - n01*n10)/Math.sqrt((n00+n01)*(n11+n10)*(n01+n11)*(n00+n10));
}

function tableFor(event, journal) {
  let table = [0, 0, 0, 0];
  for (let i = 0; i < journal.length; i++) {
    let index = 0, entry = journal[i];
    if (entry.events.includes(event)) index += 1;
    if (entry.squirrel) index += 2;
    table[index] +=1;
  }
  return table;
}

function journalEvents(journal){
  let events=[];
  for(let entry of journal){
    for(let event of entry.events){
      if( ! events.includes(event)){
        events.push(event);
      }
    }
  }
  return events;
}

// for(let event of journalEvents(journal)){
// console.log(event+` : `, phi(tableFor(event, journal)));
// };

for(let event of journalEvents(journal)){
  let target = phi(tableFor(event, journal));
  if( target >= 0.1 || target <= -0.1){
    console.log(event + `:` , target);
  }
}

/*######################################################################## */
/*

function rmIndex(array, index){
  return array.slice(0,index).concat(array.slice(index+1));
}

*/
