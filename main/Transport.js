"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transport = void 0;
var Transport;
(function (Transport) {
    var docktype;
    (function (docktype) {
        docktype["passpart"] = "\u041F\u0430\u0441\u0441\u043F\u043E\u0440\u0442";
        docktype["snils"] = "\u0421\u041D\u0418\u041B\u0421";
    })(docktype = Transport.docktype || (Transport.docktype = {}));
    var car_body;
    (function (car_body) {
        car_body["hatchback"] = "\u0425\u0435\u0442\u0447\u0431\u0435\u043A";
        car_body["universal"] = "\u0423\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B";
        car_body["sedan"] = "\u0441\u0435\u0434\u0430\u043D";
    })(car_body = Transport.car_body || (Transport.car_body = {}));
    var car_class;
    (function (car_class) {
        car_class["bisnes"] = "\u0431\u0438\u0437\u043D\u0435\u0441";
        car_class["comfort"] = "\u043A\u043E\u043C\u0444\u043E\u0440\u0442";
        car_class["econom"] = "\u044D\u043A\u043E\u043D\u043E\u043C";
    })(car_class = Transport.car_class || (Transport.car_class = {}));
    var Owner = /** @class */ (function () {
        function Owner(surname, name, subname, birthday, docktype, dock_series, dock_number) {
            this._surname = surname;
            this._name = name;
            this._subname = subname;
            this._birthday = birthday;
            this._docktype = docktype;
            this._dock_series = dock_series;
            this._dock_number = dock_number;
        }
        Object.defineProperty(Owner.prototype, "surname", {
            get: function () {
                return this._surname;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Owner.prototype, "name", {
            get: function () {
                return this._name;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Owner.prototype, "subname", {
            get: function () {
                return this._subname;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Owner.prototype, "birthday", {
            get: function () {
                return this._birthday;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Owner.prototype, "docktype", {
            get: function () {
                return this._docktype;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Owner.prototype, "dock_series", {
            get: function () {
                return this._dock_series;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Owner.prototype, "dock_number", {
            get: function () {
                return this._dock_number;
            },
            enumerable: false,
            configurable: true
        });
        Owner.prototype.getInfo = function () {
            return 'Фамилия: ' + this._surname + ' Имя: ' + this._name + ' Отчество: ' + this._subname + ' Дата рождения: ' + this._birthday + ' Тип документа: ' + this._docktype + ' Серия: ' + this._dock_series + ' Номер: ' + this._dock_number;
        };
        return Owner;
    }());
    Transport.Owner = Owner;
    var Vechicle = /** @class */ (function () {
        function Vechicle(mark, model, release_date, vin_number, reg_number, owner_info) {
            this._mark = mark;
            this._model = model;
            this._release_date = release_date;
            this._vin_number = vin_number;
            this._reg_number = reg_number;
            this._owner_info = owner_info;
        }
        Object.defineProperty(Vechicle.prototype, "mark", {
            get: function () {
                return this._mark;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Vechicle.prototype, "model", {
            get: function () {
                return this._model;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Vechicle.prototype, "release_date", {
            get: function () {
                return this._release_date;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Vechicle.prototype, "vin_number", {
            get: function () {
                return this._vin_number;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Vechicle.prototype, "reg_number", {
            get: function () {
                return this._reg_number;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Vechicle.prototype, "owner_info", {
            get: function () {
                return this._owner_info;
            },
            enumerable: false,
            configurable: true
        });
        Vechicle.prototype.getCarInfo = function () {
            return 'Марка: ' + this._mark + ' Модель: ' + this._model + ' Дата выпуска: ' + this._release_date + ' Вин номер: ' + this._vin_number + ' Регистрационный номер: ' + this._reg_number;
        };
        return Vechicle;
    }());
    Transport.Vechicle = Vechicle;
    var Car = /** @class */ (function (_super) {
        __extends(Car, _super);
        function Car(mark, model, release_date, vin_number, reg_number, owner_info, car_body, car_class) {
            var _this = _super.call(this, mark, model, release_date, vin_number, reg_number, owner_info) || this;
            _this._car_body = car_body;
            _this._car_class = car_class;
            return _this;
        }
        Object.defineProperty(Car.prototype, "car_body", {
            get: function () {
                return this._car_body;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Car.prototype, "car_class", {
            get: function () {
                return this._car_class;
            },
            enumerable: false,
            configurable: true
        });
        Car.prototype.getCarInfo = function () {
            return _super.prototype.getCarInfo.call(this) + " Тип кузова: " + this._car_body + " Класс Автомобиля: " + this._car_class;
        };
        return Car;
    }(Vechicle));
    Transport.Car = Car;
    var Motobike = /** @class */ (function (_super) {
        __extends(Motobike, _super);
        function Motobike(mark, model, release_date, vin_number, reg_number, owner_info, frame_type, for_sport) {
            var _this = _super.call(this, mark, model, release_date, vin_number, reg_number, owner_info) || this;
            _this._frame_type = frame_type;
            _this._for_sport = for_sport;
            return _this;
        }
        Object.defineProperty(Motobike.prototype, "frame_type", {
            get: function () {
                return this._frame_type;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Motobike.prototype, "for_sport", {
            get: function () {
                return this._for_sport;
            },
            enumerable: false,
            configurable: true
        });
        Motobike.prototype.getCarInfo = function () {
            return _super.prototype.getCarInfo.call(this) + " Тип рамы: " + this._frame_type + " Для спорта: " + this._for_sport;
        };
        return Motobike;
    }(Vechicle));
    Transport.Motobike = Motobike;
    var VechicleStorage = /** @class */ (function () {
        function VechicleStorage(all_Vehicles, creation_data) {
            this._all_Vehicles = all_Vehicles;
            this._creation_data = creation_data;
        }
        Object.defineProperty(VechicleStorage.prototype, "creation_data", {
            get: function () {
                return this._creation_data;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VechicleStorage.prototype, "all_Vehicles", {
            get: function () {
                return this._all_Vehicles;
            },
            enumerable: false,
            configurable: true
        });
        VechicleStorage.prototype.getAllVehicle = function () {
            return this._all_Vehicles;
        };
        return VechicleStorage;
    }());
    Transport.VechicleStorage = VechicleStorage;
})(Transport || (exports.Transport = Transport = {}));
console.log("file Transport was compiled");
