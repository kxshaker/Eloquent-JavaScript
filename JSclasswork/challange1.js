// 




/* CODING CHALLENGE 3
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.
To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.
In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final billNum amounts (bill + tip).
*/
/*
var bills = [124, 48, 268];
var tips = [];

function tipCalc(billNum) {
    if (billNum < 50) {
        return tips.push(billNum * .2);
    } else if (billNum >= 50 && billNum <= 200) {
        return tips.push(billNum * .15);
    } else {
        return tips.push(billNum * .10);
    }
}
for (i = 0; i < bills.length; i++) {
    tipCalc(bills[i]);
}
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
*/
/*
var john = {
    fullName : 'John x',
    mass : 72,
    height : 1.7,
    bmiCalc : function(mass, height){
        this.bmi = this.mass/(this.height*this.height);
    }
};
var mark = {
    fullname : 'Mark y',
    mass : 71,
    height : 1.7,
    bmiCalc : function(mass, height){
        this.bmi = this.mass/(this.height*this.height);
    }
};
john.bmiCalc();
mark.bmiCalc();
console.log(john, mark);
if(mark.bmi > john.bmi){
    console.log('mark has higher BMI '+mark.bmi+' '+mark.fullname);
}else if(john.bmi>mark.bmi){
    console.log('john has higher BMI than mark '+john.bmi+' '+john.fullName);
}else{
    console.log('They have equal BMI '+john.bmi, mark.bmi);
}
*/

/* CODING CHALLENGE 5
 */

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the billNum bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final billNum amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.

EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family billNum the highest tips on average
*/





var tipCal = {
    firstName: "John",
    lastName: "Smith",
    billNum: [124, 48, 268, 180, 42],
    tipCalc: function () {
        this.totalPay=[];
        this.tips=[];

        for (i = 0; i < this.billNum.length; i++) {
            if (this.billNum[i] < 50) {
                 this.tips.push(this.billNum[i] * .2);
            } else if (this.billNum[i] >= 50 && this.billNum[i] <= 200) {
                 this.tips.push(this.billNum[i] * .15);
            } else {
                 this.tips.push(this.billNum[i] * .10);
            }
            this.totalPay[i]=this.tips[i] +this.billNum[i];
        }
    }
};
tipCal.tipCalc();
function calcAverage(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    return sum / tips.length;
}








// var john = {
//     fullName: 'John Smith',
//     bills: [124, 48, 268, 180, 42],
//     calcTips: function() {
//         this.tips = [];
//         this.finalValues = [];
                
//         for (var i = 0; i < this.bills.length; i++) {
//             // Determine percentage based on tipping rules
//             var percentage;
//             var bill = this.bills[i];
            
//             if (bill < 50) {
//                 percentage = .2;
//             } else if (bill >= 50 && bill < 200) {
//                 percentage = .15;
//             } else {
//                 percentage = .1;
//             }
            
//             // Add results to the corresponing arrays
//             this.tips[i] = bill * percentage;
//             this.finalValues[i] = bill + bill * percentage;
//         }
//     }
// }

















/*
function (billNum) {
    for (i = 0; i < billNum.length; i++) {
        if (billNum[i] < 50) {
            return this.tips.push(billNum[i] * .2);
        } else if (billNum[i] >= 50 && billNum[i] <= 200) {
            return this.tips.push(billNum[i] * .15);
        } else {
            return this.tips.push(billNum[i] * .10);
        }
    }
}

*/