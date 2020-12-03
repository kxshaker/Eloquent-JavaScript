// function interviewQuestion (job){
//     if (job === "designer"){
//         return function(name){
//             console.log(name +", can you please explain what is UX ?");
//         }
//     }else if (job === "teacher"){
//         return function(name){
//             console.log(", what subject do you teach, "+ name + "?");
//         }
//     }else {
//         return function(name){
//             console.log("hello " +name+", what do you do ?");
//         }
//     }
// }
// var teacherQuestion = interviewQuestion("teacher");
// teacherQuestion("john");

// var designQuestion =  interviewQuestion("designer");
// interviewQuestion("teacher") ("sis");

// (
// function(){
// console.log(Math.random()*5);
// }
// )();
// 

// function retire(retireAge){
//     var x = " years left until retirment.";
//     return function(birthDate){
//         var age = 2016 - birthDate;
//         console.log((retireAge - age)+ x);
//     }
// }
// var retireUS = retire(66);
// retireUS(1990);
// retire(66)(1990);

// (function(){
// function Question(question, answer, correct) {
//     this.question = question;
//     this.answer = answer;
//     this.correct = correct;
// }

// Question.prototype.displayQuestion = function() {
//     console.log(this.question);
//     for (var i=0; i<this.answer.length;i++){
//         console.log(i+": "+this.answer[i]);
//     }
// }
// Question.prototype.checkAnswer = function(ans){
//     if (ans === this.correct){
//         console.log("Correct !");
//     }else{
//         console.log("Wronge answer, try again");
//     }
// }

// var q1 = new Question(
//     "Is C++ the best programming language in the world ?", ["yes", "no"], 0);

// var q2 = new Question(
//     "Is Python the best programming language in the world ?", ["yes", "no"], 1);

// var q3 = new Question(
//     "Is Java the best programming language in the world ?", ["yes", "no"], 1);

// var q4 = new Question(
//     "Is C the best programming language in the world ?", ["yes", "no"], 0);

// var q5 = new Question(
//     "Is C# the best programming language in the world ?", ["yes", "no"], 1);

// var q6 = new Question("what best describe programming ?", ["boring", "fun", "hard"], 1);

// var question = [q1, q2, q3, q4, q5, q6];
// var  n = Math.floor(Math.random() * question.length);

// question[n].displayQuestion();

// var answer = parseInt(prompt("please select the correct answer."));

// question[n].checkAnswer(answer);
// })();





// (function(){
//     function Question(question, answer, correct) {
//         this.question = question;
//         this.answer = answer;
//         this.correct = correct;
//     }
    
//     Question.prototype.displayQuestion = function() {
//         console.log(this.question);
//         for (var i=0; i<this.answer.length;i++){
//             console.log(i+": "+this.answer[i]);
//         }
//     }
//     Question.prototype.checkAnswer = function(ans){
//         if (ans === this.correct){
//             console.log("Correct !");
//         }else{
//             console.log("Wronge answer, try again");
//         }
//     }
    
//     var q1 = new Question(
//         "Is C++ the best programming language in the world ?", ["yes", "no"], 0);
    
//     var q2 = new Question(
//         "Is Python the best programming language in the world ?", ["yes", "no"], 1);
    
//     var q3 = new Question(
//         "Is Java the best programming language in the world ?", ["yes", "no"], 1);
    
//     var q4 = new Question(
//         "Is C the best programming language in the world ?", ["yes", "no"], 0);
    
//     var q5 = new Question(
//         "Is C# the best programming language in the world ?", ["yes", "no"], 1);
    
//     var q6 = new Question("what best describe programming ?", ["boring", "fun", "hard"], 1);

//     var question = [q1, q2, q3, q4, q5, q6];

//     function nextQuestion(){
//     var  n = Math.floor(Math.random() * question.length);
//     question[n].displayQuestion();
//     var answer = prompt("please select the correct answer.");
    

//     if (answer !== "exit"){
//         question[n].checkAnswer(parseInt(answer));
//         nextQuestion();
//     }
// }
// nextQuestion(); //whats the purpose of this ?

// })();

