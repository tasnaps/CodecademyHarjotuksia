const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: [],
        get courses() {
            return {
                appetizers: this.appetizers,
                mains: this.mains,
                desserts: this.desserts,
            }
        },
    },
    addDishToCourse(courseName, dishName, dishPrice){
        let dish = {dishName, dishPrice};
        this._courses[courseName].push(dish);
    },
    get appetizers(){
        return this.appetizers;
    },
    get mains(){
        return this.mains;
    },
    get desserts(){
        return this.appetizers;
    },
    set appetizers(appetizers){
        this.appetizers = appetizers;
    },
    set mains(mains){
        this.mains = mains;
    },
    set desserts(desserts){
        this.desserts = desserts;
    },
    getRandomDishFromCourse(courseName){
        //get array of CourseName dishes from menu's _courses, store in var dishes:
        const dishes = this._courses[courseName];
        const randomIndex = Math.floor(Math.random()*dishes.length);
        return dishes[randomIndex];
    },
    generateRandomMeal(){
        const appetizer = this.getRandomDishFromCourse('appetizer');
        const main = this.getRandomDIshFromCourse('main');
        const dessert = this.getRandomDIshFromCourse('dessert');
        const summa = appetizer.dishPrice + main.dishPrice + dessert.dishPrice;
        return "Alkuruoka on: " + appetizer + "Pääruoka on: " + main + " jälkiruoka on "+ dessert + " Ruokien summa: " + summa;


    }
};

menu.addDishToCourse("Aamuapala", "Puuro", 1);
menu.addDishToCourse("Lounas", "Keittolounas", 2);
menu.addDishToCourse("Päivällinen", "Lasgane", 5);
console.log(menu.generateRandomMeal());