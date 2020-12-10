const menu = {
    _courses : {
        appetizers : [],
        mains      : [],
        desserts   : []
    },
    get appetizers(){
        return this._courses.appetizers;
    },
    set appetizers(appetizers){
        this._courses.appetizers = appetizers;
    },
    get mains(){
        return this._courses.mains;
    },
    set mains(mains){
        this._courses.mains = mains;
    },
    get desserts(){
        return this._courses.desserts;
    },
    set desserts(desserts){
        this._courses.desserts = desserts;
    },
    get courses(){
        return {
            appetizers: this._courses.appetizers,
            mains     : this._courses.mains,
            desserts  : this._courses.desserts
        };
    },
    addDishToCourse(courseName, dishName, dishPrice){
        let dish = {    name    : dishName,
                        price   : dishPrice    };
        
        this.courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName){
        let dishes = this.courses[courseName];
        let index  = Math.floor(Math.random()* dishes.length);
        return dishes[index];
    },
    generateRandomMeal(){
        let appetizer = this.getRandomDishFromCourse('appetizers');
        let main      = this.getRandomDishFromCourse('mains');
        let dessert   = this.getRandomDishFromCourse('desserts');
        return `Your appetizer is ${appetizer.name}, your main is ${main.name},and your dessert will be ${dessert.name}, with a total of ${appetizer.price + main.price + dessert.price} DAWLLARS.`
    },
};

menu.addDishToCourse('appetizers', 'wings', 5);
menu.addDishToCourse('appetizers', 'news', 4);
menu.addDishToCourse('appetizers', 'salad', 7);


menu.addDishToCourse('mains', 'landFOOD', 50);
menu.addDishToCourse('mains', 'seaFOOD', 90);
menu.addDishToCourse('mains', 'skyFOOD', 70);

menu.addDishToCourse('desserts', 'cake', 30);
menu.addDishToCourse('desserts', 'fruit', 20);
menu.addDishToCourse('desserts', 'sweets', 10);

let meal = menu.generateRandomMeal();
console.log(meal);






















































/*
const menu = {
    _courses:{
      _appetizers:[],
      _mains:[],
      _desserts:[],
    },
      set appetizers(appetizers){
        this._courses.appetizers = appetizers;
      },
      get appetizers(){
        return this._courses.appetizers;
      },
      set mains(_mains){
          this._mains;
      },
      get mains(){
          this._mains;
      },
      set desserts(_desserts){
          this._desserts;
      },
      get desserts(){
          this._desserts;
    },
    get courses(){
      Object.entries(this._courses);
        // this._courses.appetizers,
        // this._courses.mains,
        // this._courses.desserts
      
    },
    addDishToCourse(courseName,dishName, dishPrice){
        let dish = {
            name: courseName,
            dname: dishName,
            price: dishPrice,
            add(){
                switch(this.name){
                    case 'appetizers':
                        menu['_courses'].appetizers.push(dish);
                        break;
                    case 'mains':
                        menu['_courses'].mains.push(dish);
                        break;
                    case 'desserts':
                        menu['_courses'].desserts.push(dish);
                        break;
                    default:
                        console.log(dish);
                };
            }   
        };
    },
    getRandomDishFromCourse(courseName){
        let dishNum = Math.floor(Math.random()*(this['_courses'][courseName].length)); 
    },
    generateRandomMeal(){
        let appetizer = this.getRandomDishFromCourse(appetizers);
        let main = this.getRandomDishFromCourse(mains);
        let dessert = this.getRandomDishFromCourse(desserts);
        let appetizerPrice = this['_courses'].appetizers[appetizer].price;
        let mainPrice = this['_courses'].mains[main].price;
        let dessertPrice = this['_courses'].desserts[dessert].price;
        return `${appetizer} : ${appetizerPrice} \n ${main} : ${mainPrice} \n
                ${dessert} : ${dessertPrice}.`;
    }
  };

  
 menu.addDishToCourse('appetizers','sour',10);
 menu.addDishToCourse('mains','meat',20);
 menu.addDishToCourse('desserts','sweet',5);
 menu.addDishToCourse('appetizers','sour2',100);
 menu.addDishToCourse('mains','meat2',200);
 menu.addDishToCourse('desserts','sweet2',50);
 menu.addDishToCourse('appetizers','sour3',1);
 menu.addDishToCourse('mains','meat3',2);
 menu.addDishToCourse('desserts','sweet3',.5);
 
 
 let meal = menu.generateRandomMeal();
 console.log(meal);


 */
