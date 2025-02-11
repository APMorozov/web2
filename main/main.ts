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

let Danel1:Owner = new Owner('AAAdel', 'Danel', 'Yirievch', '02.01.2005', docktype.passpart, '33333', '4444');
let Danel2:Owner = new Owner('BBBpel', 'Danel', 'Yirievch', '02.01.2005', docktype.passpart, '33333', '4444');
let Danel3:Owner = new Owner('CCCdel', 'Danel', 'Yirievch', '02.01.2005', docktype.passpart, '33333', '4444');
let Danel4:Owner = new Owner('DDDpel', 'Danel', 'Yirievch', '02.01.2005', docktype.passpart, '33333', '4444');

let Cool_Car1: Car = new Car('Toyota1', 'Camry 3.5', '2013', 'VIN23122321313', 'E777EE777', Danel1, car_body.sedan, car_class.comfort);
let Cool_Car2: Car = new Car('Toyota2', 'Camry 3.5', '2013', 'VIN23122321313', 'E777EE777', Danel2, car_body.sedan, car_class.comfort);
let Cool_Motobile3: Motobike = new Motobike('Yamaha3', 'R1', '2007', 'VIN231434221313', 'H777HH777', Danel3, "Монокок", true);
let Cool_Motobile4: Motobike = new Motobike('Yamaha4', 'R1', '2007', 'VIN231434221313', 'H777HH777', Danel4, "Монокок", true);
let arr_veh: Vechicle[] = [Cool_Car2, Cool_Car1, Cool_Motobile4, Cool_Motobile3]; //индексы около транспортных средств указывают на их нахождение в отсортированом массиве
let Veh_Storage:VechicleStorage<Vechicle> = new VechicleStorage(arr_veh, '30.03.2005');
console.log("Стандартной массив");
console.log("Задание номер 1");
console.log(Veh_Storage);
console.log(Veh_Storage.sortBySurname());
console.log('Задание номер 2)');
console.log(Veh_Storage.getSurnamesWithParameter("DEL"));
console.log(Cool_Motobile3.getFrame_type_and_for_sport());