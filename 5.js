//*********************Завдання 1*********************
//*Знайти неперервний підмасив масиву , сума елементів якого є максимальною.

function getMaxSumOfSub(array) {
    if(typeof array !== "object" || array.length == undefined) {
        console.log("Type of this argument must to be array");
        return;

    }
    //Зануляємо змінні maxSum та sum
    var maxSum = 0, sum = 0;


        for (var i = 0, length = array.length; i < length; i++) {
            sum += array[i];

            if (maxSum < sum) {
                maxSum = sum;
            }    else if (sum < 0) {
                sum = 0;// Цим ми добиваємось ефекту, шо максимальна сума не може бути відємним числом
            }
        }
            return maxSum;
}

    console.log(getMaxSumOfSub(true));
    console.log(getMaxSumOfSub({a: 1, b: 2}));
    //Перевірки спрацюють оскільки ми передали не масив

    console.log(getMaxSumOfSub([1,5,-1,-5,7,8]));
    //Максимальна сума => 15, при додатніх і відємних числах у масиві

    console.log(getMaxSumOfSub([2,-3,5,-8,10,0,-5,15]));//Тут вибирається неперервнй підмасив [10,0,-5,15], сума елементів якого => 20
    //Програма враховує відємні числа тільки для обєднання 2-ох додатніх підмасивів, коли сума кожного з цих підмасивів є
    //більшою за вклад цього відємного значення

    console.log(getMaxSumOfSub([-11,-5,-75,-5,0,-7,-8]));//Максимальна сума => 0, коли серед відємних чисел зустрінеться 0

    console.log(getMaxSumOfSub([-11,-5,-75,-5,-6,-7,-8]));//У випадку всіх відємних чисел я запрограмував так, щоб Максимальна сума == 0

//*********************Завдання 2*********************
//*Створити функцію сумування двох дуже довгих чисел представлених строкою.
//Нажаль це завдання я не встиг виконати


//*********************Завдання 3*********************
//*Написати метод реалізуючий різницю двох масивів. Причому різниця має враховувати кількість однакових елементів.
// Цю задачку я з самого початку зрозумів як почергове віднімання від відповідного елементу 1-ого масиву відповідний елемент 2-ого, ось так:
function Subtraction(arrA,arrB){

    var arrC = [];
    this.getSubtraction = function(){
        if(typeof arrA !== "object" || arrA.length == undefined || typeof arrB !== "object" || arrA.length == undefined) {
            console.log("Type of this arguments must to be array");
            return;
        }
        for(var i = 0, length = arrB.length; i < length; i++){
            arrC.push(arrA[i]-arrB[i]);
        }
        //На даному етапі у масив arrC додалися відповідні різниці, але без врахування повторень

        arrC.sort();
        //Сортування необхідне для того щоб всі однакові елементи масиву стояли поруч, це необхідно в цій реалізації

        var i = arrC.length;
        while (--i) {
            if (arrC[i] == arrC[i-1]) {
                arrC.splice(i, 1);
            }
        }
        //Тепер повернутий масив враховуватиме повтореня
        return arrC;
    }
}

var sub = new Subtraction([1,2,3,5,7],[3,2,4,5]);
console.log(sub.getSubtraction());
//Різниця цих масивів [-2,0,-1], але оскільки ми використовували сортування, то цей масив буде мати всі ті елементи,
// але буде мати довільну послідовність => [-1,-2,0]

var sub2 = new Subtraction("Not array",[3,2,4,5]);
console.log(sub2.getSubtraction());
//При передачі в функцію-конструктор аргумент, тип якого не є масивом спрацює перевірка і виведеться попередження

//_________________________________________________________________________

//Потім дізнався що всетаки потрібно було віднімати як множини і переробив:
function subb(arrA, arrB){
    if(typeof arrA !== "object" || arrA.length == undefined || typeof arrB !== "object" || arrA.length == undefined){
        console.log("Type of this arguments must to be array");
        return;
    }
    var arrC = [];

    for (var i = 0, len = arrA.length; i < len; i++)
    {
        if (arrB.indexOf(arrA[i]) < 0) //якщо arrA[i] відсутнє в arrB, то пушимо його в arrC
            arrC.push(arrA[i]);
    }
    return arrC;
}

console.log(subb([1,2,3,5,7],[3,2,4,5]));//Результатом буде [1,7]
