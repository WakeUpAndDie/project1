// let name = "dmytro";
// let surname = "ivanov";
// let arr = ["привет", "пока"]; 
// // массив

// let obj = {
//     name: "Dmytro",
//     surname: "Shulha"
// }

// // объект

// let test = [
//     {
//         name: "Dmytro"
//     },

//     {
//         surname: "Shulha"
//     }
// ];

// console.log(obj);
// console.log(obj.name);
// alert(arr[1]);
// console.log(test[1]);
// // Вывод элементов с массива и объекта


// function Factory (){
//     // alert('HELLO');

// }
// Factory();
// // Вызов функции


// // Передача параметров функции
// function Fabric (name) {
//     alert(name);
// }
// Fabric(name);

// // Если... тогда... 
// // () ? : ;
// if (!name) {
//     console.log(name);

// } else {
//     alert('NOT FOUND');
// }

// // Знак восклицания - действие наоборот

// for (let i = 0; i < arr.length; i++) {
//     alert(arr[i]);
// }
// // Оператор

// (name) ? alert(name) : alert('not found');

// Стрелочная функция

// let fnct = function (n) {
//     alert(n);
// }
// fnct(name);



// let first = (n, m) => alert(n + " " + m);
// first(name, surname);

// // Классы - это шаблон

// class Start {
//     constructor(){
//         this.hello = "hello";
        
//         this.helo = function (){
//         alert(this.hello);
//     }
//     }
    
// }

// const apple = new Start();
// console.log(apple.hello);
// apple.helo();


// ООП

class Coffee {
    
    constructor(water, coffee){  
    this.water = water;
    this.coffee = coffee;
    this.cup = true; //инкапсуляция
}
}


let coffee = new Coffee ('VODA', 'KAVA')
console.log(coffee.cup);
console.log(coffee);


class Milk extends Coffee {
    constructor(water, coffee, sugar, milk){
        super(water, coffee)
        this.sugar = sugar,
        this.milk = milk
    }
}
let milk = new Milk('1л', '2 ложки', 'без сахара','200мл')
console.log(milk);

// Полиморфизм - возможность модернизировать(менять) код который мы наследуем


class BlackCoffee extends Milk {
    constructor(water, coffee, sugar, milk, toping){
        super(water, coffee, sugar, milk)
        this.toping = toping
    }
    getCoffee(coffee){
        if (coffee == 'black'){
            coffee='black';
            console.log(`Coffee is ready ${coffee} ${this.toping}`);
        }
        else {
            coffee = false;
            console.log(`Coffee is ready ${coffee}`);
        }
    }
}

let blackCoffee = new BlackCoffee ('1л', '2 ложки', 'без сахара','200мл', 'caramel');
console.log(blackCoffee);
blackCoffee.getCoffee('black');

