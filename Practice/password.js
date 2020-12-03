// Write a isValidPassword function
// It accepts 2 arguments: password and username
// Password must:
//	- be at least 8 characters
//  - cannot contain spaces
//  - cannot contain the username
// If all requirements are met, return true.
//Otherwise: false

// isValidPassword('89Fjj1nms', 'dogLuvr');  //true
// isValidPassword('dogLuvr123!', 'dogLuvr') //false
// isValidPassword('hello1', 'dogLuvr') //false

// function isValidPassword(password, username){
// if ( password.length >= 8 ){
//         if ( password.indexOf(username) === -1 ){
//             if( password.indexOf(" ") === -1){
//                 return true;
//             }return false;
//         }return false;
//     }return false;
// }

// function isValidPassword(password, username){
// if( password.length>=8 && password.indexOf(username) === -1 && password.indexOf(" ")=== -1){
//     return true;
// }return false;
// }

// isValidPassword('89Fjj1nms', 'dogLuvr');  //true
// isValidPassword('dogLuvr123!', 'dogLuvr') //false
// isValidPassword('hello1', 'dogLuvr') //false

// function avg(array){
//     let total = 0;
//     let avarage = 0;

//    for ( let i = 0; i < array.length; i++){
//     total = total + array[i];
//     avarage = total / array.length;
//    }
//    return avarage;
// }



// function avg(array){
//     let total = 0;

//    for ( num of array){
//     total += num;
//    }
//    return total / array.length;
// }



// function panagram(string){
//     const alphbit = "abcdefghijklmnopqrstuvwxyz";
//     const lowString = string.toLowerCase();

//     for (char of  alphbit){
//         if (lowString.indexOf(char) === -1){
//         return false;
//         }
//     }return true;
// }


// Card ={
//     array       : [ 'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'K', 'Q', 'J'],
//     number : ( Math.floor ( Math.random ( ) * 11) + 1 ),
//     suite       : ( Math.floor ( Math.random ( ) * 4) + 1 ),
// }




// function getCard(){
//     const cards =   [ 'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'K', 'Q', 'J'];
//     const suite  =   ['Spades', 'Clubs', 'Hearts', 'Diamonds'];
//     let randomCard = cards[Math.floor(Math.random() * 13)];
//     let randomSuite = suite[Math.floor(Math.random() * 4)];

//     return {value : `${randomCard}`,
//                     suite : randomSuite
//                     }
// }



const constructFunk = function(x,y){
    return function( num1, num2){
        return num1>= 0 && num2<= 2000;
    }
}

let adding = constructFunk(10000,233333);























