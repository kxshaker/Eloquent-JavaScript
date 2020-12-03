/****************Budget APP *******************/

var budgetController = (function(){
    

})();

var UIController = (function(){


})();

var controller = (function(budgetCtrl, UICtrl){
    var ctrlAddItem = function(){
        //  get the input data from field
        
        //  add the data to the UI controller
        
        //  add the data to the budget controller
        
        //  calculate the budget
        
        //  display the budget
        console.log("its working");
    }

document.querySelector(".add__btn").addEventListener('click', ctrlAddItem);
document.addEventListener('keypress', function(event){
    if(event.keyCode === 13 || event.which === 13){
        ctrlAddItem();
    }
});
})(budgetController, UIController);