class Personnes{
    private name: string;
    private age: number;
    
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
    tellMyAge(age: Personnes){
        console.log('I\'m ' + this.age + ' ans');
    }
    tellMyName(name: Personnes){
        console.log('My name is ' + this.name + ' and');
    }
}
let John = new Personnes('John', 40);
John.tellMyName(John);
John.tellMyAge(John);

let Mary = new Personnes('Mary', 35);
Mary.tellMyName(Mary);
Mary.tellMyAge(Mary);


