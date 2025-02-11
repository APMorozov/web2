import {Transport} from "./Transport";
import Owner = Transport.Owner;
import Vechicle = Transport.Vechicle;
import ICar = Transport.ICar;
import docktype = Transport.docktype;
import car_body = Transport.car_body;
import car_class = Transport.car_class;


function sealed(constructor:Function){
    console.log("Class was sealed");
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

function toBig(target:Object, propertyName:string, descriptor:PropertyDescriptor){
    console.log("Method is decorate");
    const originalGetter = descriptor.get;
        if (originalGetter) {
            descriptor.get = function () {
            const result: string = originalGetter.apply(this);
            return result.toUpperCase();
        };
    }
}

@sealed
class Car extends Vechicle implements ICar{
    private _car_body:car_body;
    private _car_class:car_class;

    constructor(mark:string, model:string, release_date:string, vin_number:string, reg_number:string, owner_info:Owner, car_body:car_body, car_class:car_class){
        super(mark, model, release_date, vin_number, reg_number, owner_info);
        this._car_body = car_body;
        this._car_class = car_class;
    }

    get car_body(): car_body{
        return this._car_body;
    }
    @toBig
    get car_class(): car_class{
        return this._car_class;
    }

    getCarInfo(): string {
        return super.getCarInfo() + " Тип кузова: " + this._car_body + " Класс Автомобиля: " + this._car_class + " Электрический: ";
    }
}


let Danel:Owner = new Owner('Kud', 'Danel', 'Yirievch', '02.01.2005', docktype.passpart, '33333', '4444');
console.log(Danel.getInfo());
let newCool_Car: Car = new Car('Toyota', 'Camry 3.5', '2013', 'VIN23122321313', 'E777EE777', Danel, car_body.sedan, car_class.comfort);
console.log(newCool_Car.getCarInfo());
console.log(newCool_Car.car_class);
console.log(newCool_Car.car_body);



try {
    (Car.prototype as any).fly = function() {
      console.log("Flying!");
    };
  } catch (e: any) {
    console.error("Error adding property:", e.message);
  }