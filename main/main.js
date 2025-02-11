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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Transport_1 = require("./Transport");
var Owner = Transport_1.Transport.Owner;
var Vechicle = Transport_1.Transport.Vechicle;
var docktype = Transport_1.Transport.docktype;
var car_body = Transport_1.Transport.car_body;
var car_class = Transport_1.Transport.car_class;
function sealed(constructor) {
    console.log("Class was sealed");
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
function toBig(target, propertyName, descriptor) {
    console.log("Method is decorate");
    var originalGetter = descriptor.get;
    if (originalGetter) {
        descriptor.get = function () {
            var result = originalGetter.apply(this); // Вызываем оригинальный геттер с правильным контекстом (this)
            return result.toUpperCase(); // Возвращаем результат в верхнем регистре
        };
    }
}
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
        return _super.prototype.getCarInfo.call(this) + " Тип кузова: " + this._car_body + " Класс Автомобиля: " + this._car_class + " Электрический: ";
    };
    __decorate([
        toBig
    ], Car.prototype, "car_class", null);
    Car = __decorate([
        sealed
    ], Car);
    return Car;
}(Vechicle));
var Danel = new Owner('Kud', 'Danel', 'Yirievch', '02.01.2005', docktype.passpart, '33333', '4444');
console.log(Danel.getInfo());
var newCool_Car = new Car('Toyota', 'Camry 3.5', '2013', 'VIN23122321313', 'E777EE777', Danel, car_body.sedan, car_class.comfort);
console.log(newCool_Car.getCarInfo());
console.log(newCool_Car.car_class);
console.log(newCool_Car.car_body);
try {
    Car.prototype.fly = function () {
        console.log("Flying!");
    };
}
catch (e) {
    console.error("Error adding property:", e.message);
}
