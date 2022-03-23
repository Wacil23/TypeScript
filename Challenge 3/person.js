var Personnes = /** @class */ (function () {
    function Personnes(name, age) {
        this.name = name;
        this.age = age;
    }
    Personnes.prototype.tellMyAge = function (age) {
        console.log('I\'m ' + this.age + ' ans');
    };
    Personnes.prototype.tellMyName = function (name) {
        console.log('My name is ' + this.name + ' and');
    };
    return Personnes;
}());
var John = new Personnes('John', 40);
John.tellMyName(John);
John.tellMyAge(John);
var Mary = new Personnes('Mary', 35);
Mary.tellMyName(Mary);
Mary.tellMyAge(Mary);
