"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transport = void 0;
var Transport;
(function (Transport) {
    let docktype;
    (function (docktype) {
        docktype["passpart"] = "\u041F\u0430\u0441\u0441\u043F\u043E\u0440\u0442";
        docktype["snils"] = "\u0421\u041D\u0418\u041B\u0421";
    })(docktype = Transport.docktype || (Transport.docktype = {}));
    let car_body;
    (function (car_body) {
        car_body["hatchback"] = "\u0425\u0435\u0442\u0447\u0431\u0435\u043A";
        car_body["universal"] = "\u0423\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B";
        car_body["sedan"] = "\u0441\u0435\u0434\u0430\u043D";
    })(car_body = Transport.car_body || (Transport.car_body = {}));
    let car_class;
    (function (car_class) {
        car_class["bisnes"] = "\u0431\u0438\u0437\u043D\u0435\u0441";
        car_class["comfort"] = "\u043A\u043E\u043C\u0444\u043E\u0440\u0442";
        car_class["econom"] = "\u044D\u043A\u043E\u043D\u043E\u043C";
    })(car_class = Transport.car_class || (Transport.car_class = {}));
    class Owner {
        constructor(surname, name, subname, birthday, docktype, dock_series, dock_number) {
            this._surname = surname;
            this._name = name;
            this._subname = subname;
            this._birthday = birthday;
            this._docktype = docktype;
            this._dock_series = dock_series;
            this._dock_number = dock_number;
        }
        get surname() {
            return this._surname;
        }
        get name() {
            return this._name;
        }
        get subname() {
            return this._subname;
        }
        get birthday() {
            return this._birthday;
        }
        get docktype() {
            return this._docktype;
        }
        get dock_series() {
            return this._dock_series;
        }
        get dock_number() {
            return this._dock_number;
        }
        getInfo() {
            return 'Фамилия: ' + this._surname + ' Имя: ' + this._name + ' Отчество: ' + this._subname + ' Дата рождения: ' + this._birthday + ' Тип документа: ' + this._docktype + ' Серия: ' + this._dock_series + ' Номер: ' + this._dock_number;
        }
    }
    Transport.Owner = Owner;
    class Vechicle {
        constructor(mark, model, release_date, vin_number, reg_number, owner_info) {
            this._mark = mark;
            this._model = model;
            this._release_date = release_date;
            this._vin_number = vin_number;
            this._reg_number = reg_number;
            this._owner_info = owner_info;
        }
        get mark() {
            return this._mark;
        }
        get model() {
            return this._model;
        }
        get release_date() {
            return this._release_date;
        }
        get vin_number() {
            return this._vin_number;
        }
        get reg_number() {
            return this._reg_number;
        }
        get owner_info() {
            return this._owner_info;
        }
        getCarInfo() {
            return 'Марка: ' + this._mark + ' Модель: ' + this._model + ' Дата выпуска: ' + this._release_date + ' Вин номер: ' + this._vin_number + ' Регистрационный номер: ' + this._reg_number;
        }
    }
    Transport.Vechicle = Vechicle;
    class Car extends Vechicle {
        constructor(mark, model, release_date, vin_number, reg_number, owner_info, car_body, car_class) {
            super(mark, model, release_date, vin_number, reg_number, owner_info);
            this._car_body = car_body;
            this._car_class = car_class;
        }
        get car_body() {
            return this._car_body;
        }
        get car_class() {
            return this._car_class;
        }
        getCarInfo() {
            return super.getCarInfo() + " Тип кузова: " + this._car_body + " Класс Автомобиля: " + this._car_class;
        }
    }
    Transport.Car = Car;
    class Motobike extends Vechicle {
        constructor(mark, model, release_date, vin_number, reg_number, owner_info, frame_type, for_sport) {
            super(mark, model, release_date, vin_number, reg_number, owner_info);
            this._frame_type = frame_type;
            this._for_sport = for_sport;
        }
        get frame_type() {
            return this._frame_type;
        }
        get for_sport() {
            return this._for_sport;
        }
        getCarInfo() {
            return super.getCarInfo() + " Тип рамы: " + this._frame_type + " Для спорта: " + this._for_sport;
        }
    }
    Transport.Motobike = Motobike;
    class VechicleStorage {
        constructor(all_Vehicles, creation_data) {
            this._all_Vehicles = all_Vehicles;
            this._creation_data = creation_data;
        }
        get creation_data() {
            return this._creation_data;
        }
        get all_Vehicles() {
            return this._all_Vehicles;
        }
        getAllVehicle() {
            return this._all_Vehicles;
        }
    }
    Transport.VechicleStorage = VechicleStorage;
})(Transport || (exports.Transport = Transport = {}));
console.log("file Transport was compiled");
