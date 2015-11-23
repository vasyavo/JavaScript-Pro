"use strict";

//Завдання 1
var car = {
    speedometer: 0
};

//Завдання 2
Object.defineProperty(car, "clearSpeedometer",{
    value: function(){
        this.speedometer = 0;
    }
});

Object.defineProperties(car,{
    setSpeedometer: {
        set: function(speed) {
            if(typeof speed === "number")
                this.speedometer =  speed
            else
                console.log("type of this property must to be \"number\"");
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

//Завдання 3
Object.defineProperties(car,{
    setSpeed: {
        value: function(speed) {
            if(typeof speed === "number") {
                this.speedometer = speed;
                return this;
            }
            else {
                console.log("type of this property must to be \"number\"");
                return this;
            }
        }
    },
    getSpeed: {
        value: function(){
            return this.speedometer;
        }
    },
    clearSpeed:{
        value: function(){
            this.speedometer = 0;
            return this;
        }
    }
});

console.log("***Ланцюжковий виклик***");
console.log(car.setSpeed(200).setSpeed(300).clearSpeed().getSpeed());