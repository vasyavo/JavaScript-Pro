"use strict";

/*  В подальших коментарях я буду використовувати поняття "клас", маючи на увазі при цьому
 функцію-конструктор(просто так вийде компактніший запис)*/

//Опис класу Visitor
var Visitor = function(name, login, password) {
    this.name = name || 'Анонім';
    this.login = login;
    this.password = password;
};
/* Тут ми використовуємо 4-ий принцип ООП - абстракцію, ми задаємо властивості,які будуть спільними
 у екземплярів обох класів потомків(User та Admin) */

//Опис класу User
var User = function(name, login, password, avatar, dateOfBirth, mailAddress, geolocation) {
    Visitor.apply(this, arguments);
    /*Дана інструкція виконує всі інструкції класу Visitor:
     this.name = name;
     this.login = login;
     this.password = password;

     , але вже в контексті даного класу і передає аргументи, які будуть передаватись саме у цю функцію-конструктор
     при створенні екземпляру цього класу*/

    this.avatar = avatar;
    this.dateOfBirth = dateOfBirth;
    this.mailAddress = mailAddress;
    this.geolocation = geolocation;
};

//Оскільки прототипи - це об'єкти, то можна зробити наступне:
User.prototype = {
    inviteFriends: function() {},
    findFriends: function() {},
    viewThePost: function() {}
};

//Visitor.apply(this, arguments); - ця інструкція дійсно спрацювала адекватно
var user = new User();
console.log(user.name); //Перевірка спрацювала, цей код виведе => 'Анонім', оскільки в функцію-конструктор ми не передали значення імені

var user1 = new User('Василь');
console.log(user1.name);// => 'Василь'

/*  Хорошим тоном рахується, прописувати всі властивості, які будуть спільними у всіх екземплярів цього класу,
 саме у прототипі його конструктора, тому у коді, що вище ми прописали ці методи у прототипі. Це зв'язано з тим,
 що при ініціалізації обєкта, не буде виділятись память на збереження зайвих властивостей, а просто у разі виклику цих властивостей
 інтерпретатор зробить наступне: подивиться спочатку, що у власних властивостей об'єкту їх немає і піде вище по ланцюжку прототипів,
 і коли знайде то відповідно спрацює, це означає що всі екземпляри певного класу будуть у разі потреби використовувати ресурси
 обєкта-прототипа*/

inherit = (function() {
    var F = function() {};

    return function(C, P) {
        F.prototype = P.prototype;
        C.prototype = new F;
        C.prototype.constructor = C;
    }
})();

/*
 Ця функція inherit() використовується для реалізації наслідування прототипами,
 * вона реалізована досить гарно, по наступним причинам:
 * 1)Вона оптимізована, при її виклику ми не будемо постійно створювати var F = function(){}, оскільки анонімна самовизиваюча функція
 * забезпечує нам це ще при самому описі
 * 2)Клас F слугує певним посереднком між потомком і батьківським класом, він потрібен для того, щоб після унаслідування при зміні
 * в С.prototype нічого не змінювалось в P.prototype і навпаки. Це зв'язано з тим шо всі маніпуляції над об'єктами проводяться по ссилці
 * 3)C.prototype.constructor = C; - ця інструкція повертає властивість C.prototype.constructor у початкове значення, оскільки
 * твердження, що C.prototype.constructor == P не є достовірним
 */

//Опис класу SuperAdmin
var SuperAdmin = function(name, login, password) {
    Visitor.apply(this, arguments);
};

SuperAdmin.prototype.deleteUser = function() {};
SuperAdmin.prototype.deleteContent = function() {};

/*Тепер припустимо, що у нас будуть окрім супер-адміна ще й модератори(їх клас назвемо просто Admin), тоді виходить що у них будуть
 спільні методи deleteUser() та deleteContent() і ми зможемо застосувавши функцію inherit(), унаслідувати ці методи з прототипу
 класу SuperAdmin у прототип класу Admin
 */

//Опис класу Admin
var Admin = function(name, login, password) {
    Visitor.apply(this, arguments);
};

inherit(Admin, SuperAdmin);

//Перевіримо справністю методу inherit()
var admin = new Admin('Петро');

('deleteContent' in admin) ? console.log('Method "deleteContent" was successfully existed') : console.log('Unknown deleteContent');

/*Все успішно унаслідувалось, метод inherit() справний, оскільки ми отримали => 'Method "deleteContent" was successfully existed'
 Тепер переглянемо всі властивості кожного з екземплярів відповідного класу
 */
var userArray = [];
for(prop in user) {
    userArray.push(prop);
}

console.log(userArray);

var adminArray = [];

for(prop in admin) {
    adminArray.push(prop);
}

console.log(adminArray);

/*
 Ми отримали такі результати:
 Всі властивості(і ті шо знаходяться в прототипі) користвача user:
 => ["name", "login", "password", "avatar", "dateOfBirth", "mailAddress", "geolocation", "inviteFriends", "findFriends", "viewThePost"]
 Всі властивості(і ті шо знаходяться в прототипі) користвача admin:
 => ["name", "login", "password", "constructor", "deleteUser", "deleteContent"]
 Все як ми хотіли так і спрацювало, це добре
 Якби нам потрібно було перерахувати назви тільки власних властивостей екземпляра, то тоді б довелось на початку циклу for(prop in object)
 перевіряти ще умову if(object.hasOwnProperty(prop))
 */

//Опис класу Post
var Post = function(author, name, dateOfPublication, numOfLikes) {
    this.author = author.name;
    this.name = name || 'No name';
    this.dateOfPublication = dateOfPublication;
    this.numOfLikes = numOfLikes || 0;
};

var post = new Post(admin);
console.log('Автор ' + post.author + ' опублікував пост, який має ' + post.numOfLikes + ' лайків');

//Бачимо, наступне => 'Автор Петро опублікував пост, який має 0 лайків'


