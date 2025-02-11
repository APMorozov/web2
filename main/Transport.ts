export namespace Transport{

    export enum docktype{
        passpart='Пасспорт',
        snils='СНИЛС'
        }

    export enum car_body{hatchback='Хетчбек', 
        universal='Универсал', 
        sedan = 'седан'
    }

    export enum car_class{bisnes='бизнес',
        comfort='комфорт', 
        econom='эконом'
    }


    export interface IOwner{
        surname:string;
        name:string;
        subname:string;
        birthday:string;
        docktype: docktype;
        dock_series: string;
        dock_number: string;
        getInfo(): string;
    }

    export interface IVechicle{
        mark:string;
        model:string;
        release_date:string;
        vin_number:string;
        reg_number:string;
        owner_info:Owner;
        getCarInfo():string;
    }
    
    export interface ICar extends IVechicle{
        car_body:car_body;
        car_class:car_class;
    }

    export interface IMotobike extends IVechicle{
        frame_type:string;
        for_sport:boolean;
    }

    export interface IVechicleStorage<T extends Vechicle>{
        creation_data:string;
        all_Vehicles:Array<T>;
        getAllVehicle(): Array<T>;
    }


    export class Owner implements IOwner{
        private _surname:string;
        private _name:string;
        private _subname:string;
        private _birthday:string;
        private _docktype: docktype;
        private _dock_series: string;
        private _dock_number: string;
    
        constructor(surname:string, name:string, subname:string, birthday:string, docktype:docktype, dock_series:string, dock_number:string){
            this._surname = surname;
            this._name = name;
            this._subname = subname;
            this._birthday = birthday;
            this._docktype = docktype;
            this._dock_series = dock_series;
            this._dock_number = dock_number;
        }
    
        get surname(): string {
            return this._surname;
        }
    
        get name(): string {
            return this._name;
        }
    
        get subname(): string {
            return this._subname;
        }
    
        get birthday(): string {
            return this._birthday;
        }
    
        get docktype(): docktype {
            return this._docktype;
        }
    
        get dock_series(): string {
            return this._dock_series;
        }
    
        get dock_number(): string {
            return this._dock_number;
        }
    
        getInfo():string{
            return 'Фамилия: ' + this._surname + ' Имя: ' +  this._name + ' Отчество: ' +  this._subname + ' Дата рождения: ' +  this._birthday + ' Тип документа: ' +  this._docktype + ' Серия: ' +  this._dock_series + ' Номер: ' +  this._dock_number;
        }
    }

    export class Vechicle implements IVechicle{
        private _mark:string;
        private _model:string;
        private _release_date:string;
        private _vin_number:string;
        private _reg_number:string;
        private _owner_info:Owner;
        constructor(mark:string, model:string, release_date:string, vin_number:string, reg_number:string, owner_info:Owner){
            this._mark = mark;
            this._model = model;
            this._release_date = release_date;
            this._vin_number = vin_number;
            this._reg_number = reg_number;
            this._owner_info = owner_info; 
        }
    
        get mark(): string {
            return this._mark;
        }
    
        get model(): string {
            return this._model;
        }
    
        get release_date(): string {
            return this._release_date;
        }
    
        get vin_number(): string {
            return this._vin_number;
        }
    
        get reg_number(): string {
            return this._reg_number;
        }
    
        get owner_info(): Owner {
            return this._owner_info;
        }
    
        getCarInfo():string{
            return 'Марка: ' + this._mark + ' Модель: ' + this._model + ' Дата выпуска: '  + this._release_date + ' Вин номер: ' + this._vin_number + ' Регистрационный номер: ' + this._reg_number;
        }
    }

    export class Car extends Vechicle implements ICar{
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
    
        get car_class(): car_class{
            return this._car_class;
        }
    
        getCarInfo(): string {
            return super.getCarInfo() + " Тип кузова: " + this._car_body + " Класс Автомобиля: " + this._car_class;
        }
    }

    export class Motobike extends Vechicle implements IMotobike{
        private _frame_type:string;
        private _for_sport:boolean;
        constructor(mark:string, model:string, release_date:string, vin_number:string, reg_number:string, owner_info:Owner, frame_type:string, for_sport:boolean){
            super(mark, model, release_date, vin_number, reg_number, owner_info);
            this._frame_type = frame_type;
            this._for_sport = for_sport;
        }
    
        get frame_type():string{
            return this._frame_type;
        }
    
        get for_sport():boolean{
            return this._for_sport;
        }
    
        getCarInfo(): string {
            return super.getCarInfo() + " Тип рамы: " + this._frame_type + " Для спорта: " + this._for_sport;
        }

        getFrame_type_and_for_sport():[boolean, string]{
            let tup:[boolean, string];
            tup = [this.for_sport, this.frame_type];
            return tup;
        }
    }

    export class VechicleStorage<T extends Vechicle> implements IVechicleStorage<T> {
        private _creation_data: string;
        private _all_Vehicles: Array<T>;
    
        constructor(all_Vehicles: Array<T>, creation_data: string) {
            this._all_Vehicles = all_Vehicles;
            this._creation_data = creation_data;
        }
    
        get creation_data():string{
            return this._creation_data;
        }
    
        get all_Vehicles(): Array<T>{
            return this._all_Vehicles;
        }
    
        getAllVehicle(): Array<T> {
            return this._all_Vehicles;
        }

        sortBySurname(): Array<T>{
            let sortArr:Array<T> = this._all_Vehicles;
            for(let j=0; j < (sortArr.length - 1); j++){
                for(let i=0; i < (sortArr.length - 1); i++){
                    if(sortArr[i].owner_info.surname > sortArr[i+1].owner_info.surname){
                        let buffer:T = sortArr[i];
                        sortArr[i] = sortArr[i+1];
                        sortArr[i+1] = buffer;
                    }
                }
            }
            return sortArr;
        }

        getSurnamesWithParameter(parameter:string): Array<T>{
            let acceptable_array: Array<T> = [];
            for(let i=0; i < (this._all_Vehicles.length - 1); i++){
                if(this._all_Vehicles[i].owner_info.surname.toLowerCase().includes(parameter.toLowerCase())){
                    acceptable_array.push(this._all_Vehicles[i]);
                }
            }
            return acceptable_array;
        }
    
    }
}

console.log("file Transport was compiled");