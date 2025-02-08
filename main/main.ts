import {Transport} from './Transport';
import IOwner = Transport.IOwner;
import Owner = Transport.Owner;
import IVechicle = Transport.IVechicle;
import Vechicle = Transport.Vechicle;
import ICar = Transport.ICar;
import Car = Transport.Car;
import IMotobike = Transport.IMotobike;
import Motobike = Transport.Motobike;
import IVechicleStorage = Transport.IVechicleStorage;
import VechicleStorage = Transport.VechicleStorage;
import docktype = Transport.docktype;
import car_body = Transport.car_body;
import car_class = Transport.car_class;


let Danel:Owner = new Owner('Kud', 'Danel', 'Yirievch', '02.01.2005', docktype.passpart, '33333', '4444');
console.log(Danel.getInfo());
let Cool_Car:Vechicle = new Vechicle('Toyota', 'Land Cruiser Prado', '2013', 'VIN23122321313', 'E777KH777', Danel);
console.log(Cool_Car.getCarInfo());


let newCool_Car: Car = new Car('Toyota', 'Camry 3.5', '2013', 'VIN23122321313', 'E777EE777', Danel, car_body.sedan, car_class.comfort);
console.log(newCool_Car.getCarInfo());


let Cool_Motobile: Motobike = new Motobike('Yamaha', 'R1', '2007', 'VIN231434221313', 'H777HH777', Danel, "Монокок", true);
console.log(Cool_Motobile.getCarInfo());


let arr_veh: Vechicle[] = [Cool_Car, newCool_Car, Cool_Motobile];
let Veh_Storage:VechicleStorage<Vechicle> = new VechicleStorage(arr_veh, '30.03.2005');
console.log(Veh_Storage.getAllVehicle());
