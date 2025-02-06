import { TupleType } from "typescript";

let array0: number[] = [2, 4, 6];
let array1: number[] = [3, 5, 7];
let interval: number[] = [3, 4, 5, 44];

let f1 = (arr:number[]): number =>{
    let sum:number = 0;
    for(let num of arr){
        sum += num;
    }
    return sum;
}
console.log('1:');
console.log('Array:',array0);
console.log('Answer:');
console.log(f1(array0));


let array2: number[][] = [array0, array1];
console.log(array2);
console.log('interval:', interval);

let f2 = (arr:number[][], interval:number[]): number =>{
    let count:number = 0;
    for(let num of interval){
        if(arr[0].includes(num)){
            count+=1;
        }
        if(arr[1].includes(num)){
            count+=1;
        }
    }
    return count;
}
console.log('Answer:');
console.log(f2(array2, interval))


console.log('2:');
let tuple: [string, string, number] = ['Ivan', 'Ivanov', 52];
let f3 = (tuple:[string, string, number]): string =>{
    return tuple[0] + '-' + tuple[2] + '-' + tuple[1];
}
console.log('Tuple:', tuple);
console.log('Answer:');
console.log(f3(tuple));

console.log('3:');
enum types_of_oil{cocoa_butter='Cocoa butter', sesame_oil='Sesame oil', soybean_oil='Soybean oil'};
console.log('Answer:');
console.log(types_of_oil.cocoa_butter);


class Pet {
    name: string = 'Some pet'
    age: number = -1
    speak() {
    return "No speak. I am fish!";
    }
    }

    class Dog extends Pet {
        label = "AngryHunter";
        age = 8;
        speak() {
        return "Yaw-Gaw!";
        }
        }
        class Cat extends Pet {
        name = 'Barsik';
        age = 2;
        speak() {
        return "Miyau!";
        }
    }

    function printPetInfo<T extends Pet>(pet: T): void {
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
type PFC = {
    Proteins: number;
    Fats: number;
    Carbohydrates: number;
    type: types_of_oil;
}

let myOil: PFC = {
    Proteins: 0,
    Fats: 99,
    Carbohydrates: 0,
    type: types_of_oil.soybean_oil
}
console.log('Answer:');
console.log(JSON.stringify(myOil));