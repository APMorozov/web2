let  f1 = (elm1:number, elm2:number, elm3:number):number => {
    return elm1 + elm2 + elm3;
}
console.log(f1(3,5,6))

const age:number = 23;
const surname:string = "Ivanov";
let arr:Array<number> = [3,5,6];
console.log(arr);
let flag:boolean = true;
console.log(flag);


interface Entity {
    id: number;
}

interface ToJsonStringify extends
Entity {
e1?: number;
e2: string;
}

const data: ToJsonStringify = {
id: 3,
e1: 12345,
e2: "Поле 2",
}

const jsonData: string = JSON.stringify(data);
console.log(jsonData)
