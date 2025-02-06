"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let array0 = [2, 4, 6];
let array1 = [3, 5, 7];
let interval = [3, 4, 5, 44];
let f1 = (arr) => {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
};
console.log('1:');
console.log('Array:', array0);
console.log('Answer:');
console.log(f1(array0));
let array2 = [array0, array1];
console.log(array2);
console.log('interval:', interval);
let f2 = (arr, interval) => {
    let count = 0;
    for (let num of interval) {
        if (arr[0].includes(num)) {
            count += 1;
        }
        if (arr[1].includes(num)) {
            count += 1;
        }
    }
    return count;
};
console.log('Answer:');
console.log(f2(array2, interval));
console.log('2:');
let tuple = ['Ivan', 'Ivanov', 52];
let f3 = (tuple) => {
    return tuple[0] + '-' + tuple[2] + '-' + tuple[1];
};
console.log('Tuple:', tuple);
console.log('Answer:');
console.log(f3(tuple));
console.log('3:');
var types_of_oil;
(function (types_of_oil) {
    types_of_oil["cocoa_butter"] = "Cocoa butter";
    types_of_oil["sesame_oil"] = "Sesame oil";
    types_of_oil["soybean_oil"] = "Soybean oil";
})(types_of_oil || (types_of_oil = {}));
;
console.log('Answer:');
console.log(types_of_oil.cocoa_butter);
class Pet {
    constructor() {
        this.name = 'Some pet';
        this.age = -1;
    }
    speak() {
        return "No speak. I am fish!";
    }
}
class Dog extends Pet {
    constructor() {
        super(...arguments);
        this.label = "AngryHunter";
        this.age = 8;
    }
    speak() {
        return "Yaw-Gaw!";
    }
}
class Cat extends Pet {
    constructor() {
        super(...arguments);
        this.name = 'Barsik';
        this.age = 2;
    }
    speak() {
        return "Miyau!";
    }
}
function printPetInfo(pet) {
    console.log(`Name: ${pet.name}`);
    console.log(`Age: ${pet.age}`);
    console.log(`Speak: ${pet.speak()}`);
    if (pet instanceof Dog) {
        console.log(`Label: ${pet.label}`);
    }
}
const myDog = new Dog();
const myCat = new Cat();
console.log('4:');
console.log('Answer:');
printPetInfo(myDog);
printPetInfo(myCat);
console.log('5:');
let myOil = {
    Proteins: 0,
    Fats: 99,
    Carbohydrates: 0,
    type: types_of_oil.soybean_oil
};
console.log('Answer:');
console.log(JSON.stringify(myOil));
