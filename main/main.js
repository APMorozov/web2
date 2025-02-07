"use strict";
var docktype;
(function (docktype) {
    docktype["passpart"] = "\u041F\u0430\u0441\u0441\u043F\u043E\u0440\u0442";
    docktype["snils"] = "\u0421\u041D\u0418\u041B\u0421";
})(docktype || (docktype = {}));
class Owner {
    getSurname() {
        return this._surname;
    }
    getName() {
        return this._name;
    }
    constructor(surname, name, subname, birthday, docktype, dock_series, dock_number) {
        this._surname = surname;
        this._name = name;
        this._subname = subname;
        this._birthday = birthday;
        this._docktype = docktype;
        this._dock_series = dock_series;
        this._dock_number = dock_number;
    }
    getInfo() {
        return 'Фамилия: ' + this._surname + ' Имя: ' + this._name + ' Отчество: ' + this._subname + ' Дата рождения: ' + this._birthday + ' Тип документа: ' + this._docktype + ' Серия: ' + this._dock_series + ' Номер: ' + this._dock_number;
    }
}
class Vechicle {
    constructor(mark, model, release_date, vin_number, reg_number, owner_info) {
        this._mark = mark;
        this._model = model;
        this._release_date = release_date;
        this._vin_number = vin_number;
        this._reg_number = reg_number;
        this._owner_info = owner_info;
    }
    getCarInfo() {
        return 'Марка: ' + this._mark + ' Модель: ' + this._model + ' Дата выпуска: ' + this._release_date + ' Вин номер: ' + this._vin_number + ' Регистрационный номер: ' + this._reg_number;
    }
}
let Danel = new Owner('Kud', 'Danel', 'Yirievch', '02.01.2005', docktype.passpart, '33333', '4444');
console.log(Danel.getInfo());
let Cool_Car = new Vechicle('Toyota', 'Land Cruiser Prado', '2013', 'VIN23122321313', 'E777KH777', Danel);
console.log(Cool_Car.getCarInfo());
var car_body;
(function (car_body) {
    car_body["hatchback"] = "\u0425\u0435\u0442\u0447\u0431\u0435\u043A";
    car_body["universal"] = "\u0423\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B";
    car_body["sedan"] = "\u0441\u0435\u0434\u0430\u043D";
})(car_body || (car_body = {}));
;
var car_class;
(function (car_class) {
    car_class["bisnes"] = "\u0431\u0438\u0437\u043D\u0435\u0441";
    car_class["comfort"] = "\u043A\u043E\u043C\u0444\u043E\u0440\u0442";
    car_class["econom"] = "\u044D\u043A\u043E\u043D\u043E\u043C";
})(car_class || (car_class = {}));
;
class Car extends Vechicle {
    constructor(mark, model, release_date, vin_number, reg_number, owner_info, car_body, car_class) {
        super(mark, model, release_date, vin_number, reg_number, owner_info);
        this._car_body = car_body;
        this._car_class = car_class;
    }
    getCarInfo() {
        return super.getCarInfo() + " Тип кузова: " + this._car_body + " Класс Автомобиля: " + this._car_class;
    }
}
let newCool_Car = new Car('Toyota', 'Camry 3.5', '2013', 'VIN23122321313', 'E777EE777', Danel, car_body.sedan, car_class.comfort);
console.log(newCool_Car.getCarInfo());
class Motobike extends Vechicle {
    constructor(mark, model, release_date, vin_number, reg_number, owner_info, frame_type, for_sport) {
        super(mark, model, release_date, vin_number, reg_number, owner_info);
        this._frame_type = frame_type;
        this._for_sport = for_sport;
    }
    getCarInfo() {
        return super.getCarInfo() + " Тип рамы: " + this._frame_type + " Для спорта: " + this._for_sport;
    }
}
let Cool_Motobile = new Motobike('Yamaha', 'R1', '2007', 'VIN231434221313', 'H777HH777', Danel, "Монокок", true);
console.log(Cool_Motobile.getCarInfo());
class VechicleStorage {
    constructor(all_Vehicles, creation_data) {
        this._all_Vehicles = all_Vehicles;
        this._creation_data = creation_data;
    }
    getAllVehicle() {
        return this._all_Vehicles;
    }
}
let arr_veh = [Cool_Car, newCool_Car, Cool_Motobile];
let Veh_Storage = new VechicleStorage(arr_veh, '30.03.2005');
console.log(Veh_Storage.getAllVehicle());
