//******Завдання 1******
var foo = 1;
function bar() {
    if (!foo) {
        var foo = 10;
    }
    alert(foo);//Вивело 10
}
bar();

//******Завдання 2******
/*Оскільки на початку виконання функції наша змінна foo тільки проініціалізована, не визначена(undefined),
(це ми зробили у функції, змінивши область видимості змінної foo з глобальної на локальну на 5-ому рядку вказавши
ключеве слово var (var foo = 10;)), то ми змінюємо значення з undefined на 10 і після цього виводимо нашу змінну
зі значенням щойно зміненим 10*/

//******Завдання 3******
var a = 1;
function b() {
    a = 10;
    return;
    function a() {}
}
b();
console.log(a);
/*В даному випадку return; ні на шо не впливає, оскільки після нього є тільки оголошення функції з іменем таким самим
як у нашої глобальної змінної a, саме тому завдяки цій внутрішній ф-ії наша змінна у рядку a = 10; перетворюється у локальну
змінну цієї ф-ії і відповідно ніяк не впливає на глобальну змінну a = 1; Такий принцип парсера JavaScript, тому
виводиться 1.*/

//******Завдання 4******
var a = 1;
function b() {
    a = 10;
    return;
    function c() {}
}
b();
console.log(a);
//я змінив назву внутрішньої функції з a на c

//******Завдання 5******
//1)Унарні оператори
console.log("Оператор перетворення рядка в число");
var myVar = "hello";
console.log(typeof myVar);
myVar = +myVar;
console.log(typeof myVar);
//Оператори інкременти і декременти
//Префіксні
console.log("Префіксні оператори інкременти і декременти");
function pref_incr(a){
    return ++a;
}
function pref_decr(a){
    return --a;
}
console.log(pref_incr(2));
console.log(pref_decr(2));
//Постфіксні
console.log("Постфіксні оператори інкременти");
var myVar = 10;
console.log(myVar++ + 5);
console.log(myVar++ + 5);
console.log("Постфіксні оператори декременти");
console.log(myVar-- + 5);
console.log(myVar-- + 5);
//2)Бінарні оператори(Порівняння(умовні оператори), присвоєння, арифметичні операції)
var summa = 0;
if(summa == 0)
    summa += 100;//summa = summa + 100;
//3)Тенарний умовний оператор
var f = 0, n = f==0?2:3;
console.log(n);

//******Завдання 6******
function concat(str1, str2){
    if(typeof str1 == "string" && typeof str2 == "string")
        return str1 + str2;
    else if(typeof str1 != "string"){
        var type = typeof str1;
        console.log("Метод \"concat\" не приймає аргументи типу " + type);
    }
    else if(typeof str2 != "string"){
        var type = typeof str2;
        console.log("Метод \"concat\" не приймає аргументи типу " + type);
    }
}
var string = "";
var song = {a:"Нехай завжди буде сонце, ",
            b:"Нехай завжди буде небо, ",
            c:"Нехай завжди буде мама, ",
            d:"Нехай завжди буду я."};
for(var element in song){
    string = concat(string, song[element]);
}
console.log(string);

//******Завдання 7******
var n = 9; dx=8;
for(var i = 0; i < 5; i++){
    for(var j = 0; j < n; j++){
        document.write("*");
    }
    document.write("<br>");
    switch(i){
        default: n+= dx; dx-=2; break;
    }
}

for(var i = 0; i < 5; i++){
    for(var j = 0; j < n; j++){
        document.write("*");
    }
    document.write("<br>");
    switch(i){
        case 0: dx+=4; n-=dx; break;
        default: dx+=2; n-=dx; break;
    }
}

//******Завдання 8******
var now = new Date(), startSeconds = parseInt(now.getTime()/1000), finishSeconds = startSeconds + 10;

while (startSeconds != finishSeconds){
    startSeconds = parseInt((new Date).getTime()/1000);
}
alert("Пройшло 10 секунд");