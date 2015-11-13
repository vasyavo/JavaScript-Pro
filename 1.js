//********Завдання 1********

//Прості типи
var n = 10, s = "Hello world", b = true;
console.log(typeof n);//number
console.log(typeof s);//string
console.log(typeof b);//boolean

//Складні типи
var o = {
    name: "Vasya",
    age: 19
};
console.log(typeof o);//object

var a = [1,2,3];
console.log(typeof a);//object


//Спеціальні типи
var empty = null, moreEmpty = undefined;
console.log(typeof empty);//object
console.log(typeof moreEmpty);//undefined

//функція це підвид обєкта, вона не є базовим типом javascript
var add = function(a,b){
    return a+b;
};

console.log(typeof add);//function

//********Завдання 2********

var number = 10, string = "123";
//1)
console.log(typeof number);//number
number = string + number;
console.log(typeof number);//string
//2)
console.log(typeof string);//string
string = +string - number;
console.log(typeof string);//number

//********Завдання 3********

var num = 10, str = "10";
console.log(num==str);//true
console.log(num===str);//false

//********Завдання 4********

var chislo = 10, zashifr_chislo, deshifr_chislo;
//Зашифрування
console.log(chislo);//10
zashifr_chislo = chislo.toString(16);
console.log(zashifr_chislo);//a
//Дешифрування
deshifr_chislo = parseInt(zashifr_chislo,16)
console.log(deshifr_chislo);//10