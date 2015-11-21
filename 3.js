var calculate = (function () {
    var results = {};

    var calculation = {
        '+': function (x, y) { console.log('calculation +'); return x+y },
        '-': function (x, y) { console.log('calculation -'); return x-y },
        '*': function (x, y) { console.log('calculation *'); return x*y },
        '/': function (x, y) { console.log('calculation /'); return x/y }
    };

    return function calculate(op, x, y) {
        if(x+op+y in results)//Перевіряємо наявність властивості з даною навою в кеші
            results[x+op+y] = results[x+op+y]
        else
            results[x+op+y] = calculation[op](x,y);

        console.log(results[x+op+y]);
        return results[x+op+y];
    }
})();
//Тут самовизиваюча функція використовується для того щоб під час виклику calculate(); наші обєкти results та calculation
// не занулялись(не обявлялись повторно, оскільки тоді кешування не працюватиме коректно)

calculate("+",1,1);
calculate("+",1,1);
calculate("+",2,1);

calculate("-",1,1);
calculate("-",1,1);
calculate("-",3,1);

calculate("*",1,1);
calculate("*",3,1);
calculate("*",1,1);

calculate("/",1,1);
calculate("/",2,1);
calculate("/",2,1);