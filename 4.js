"use strict";

//Завдання 1
var car = {
    speedometer: 0
};

//Завдання 2
/*  Під час створення властивості обєкта через літеральну нотацію автоматично всім атрибутам цієї властивості таким як:
 writable, enumerable і configurable присвоюється значення true, а під час створення або додавання нових або
 нової властивостей коли ми використовуємо методи обєкту Object defineProperties() і defineProperty() ці атрибути набувають
 значення false, тому ми змушені самі вказувати яким атрибутам давати значення true, нижче наведено приклад
 */

Object.defineProperty(car, "clearSpeedometer",{
    value: function(){
        this.speedometer = 0;
    },
    writable: true,//вказує на доступність зчитування і запису або тільки зчитування
    // властивості(у нашому випадку є доступ для запису і зчитування)
    enumerable: true,//вказує на те чи буде він перераховуватись у циклах for in(у нас буде)
    configurable: true//чи цю властивість можна буде в подальшому якось подібним чином налаштувати або видаляти(у нас
    // можна і видаляти і налаштовувати в подальшому)
});

Object.defineProperties(car,{
    setSpeedometer: {
        set: function(speed) {
            if(typeof speed === "number" && speed >= 0)
                this.speedometer =  speed
            else if(typeof speed !== "number")
                console.log("type of this property must to be \"number\"")
            else this.speedometer =  Math.abs(speed);
        }
    },
    getSpeedometer: {
        get: function(){
            return this.speedometer;
        }
    }
});

console.log(car.getSpeedometer);//Getter
car.setSpeedometer = 10;//Setter
console.log(car.getSpeedometer);
car.clearSpeedometer();//clearFunction
console.log(car.getSpeedometer);

//Також є можливість перевірити які атрибути встановлені у певної властивості, ось приклад:
console.log(Object.getOwnPropertyDescriptor(car, 'speedometer'));

//Завдання 3
Object.defineProperties(car,{
    setSpeed: {
        value: function(speed) {
            if(typeof speed === "number" && speed >= 0){
                this.speedometer =  speed;
                return this;
            }
            else if(typeof speed !== "number") {
                console.log("type of this property must to be \"number\"");
                return this;
            }
            else {
                this.speedometer =  Math.abs(speed);
                return this;
            }
        }
    },
    getSpeed: {
        value: function(){
             console.log(this.speedometer);
            return this;
        }
    },
    clearSpeed:{
        value: function(){
            this.speedometer = 0;
            return this;
        }
    }
});
//У прикладі вище в першій властивості встановлено Setter, який визначає для неї доступ для запису writable: true в цю властивість, проте з перевіркою.

console.log("***Ланцюжковий виклик***");
console.log(car.setSpeed(200).setSpeed(300).clearSpeed().getSpeed());

//Перевірки теж спрацювали
console.log(car.setSpeed(200).setSpeed("ssa").getSpeed());
console.log(car.setSpeed(200).setSpeed(-12).getSpeed());

//Зазвичай я в Jquery я використовую Ланцюжковий виклик у наступному вигляді
car.setSpeed(200)
    .getSpeed()
    .setSpeed(-500)
    .getSpeed()
    .setSpeed(true)
    .getSpeed()
    .clearSpeed()
    .getSpeed();