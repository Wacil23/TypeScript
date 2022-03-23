var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animals = /** @class */ (function () {
    function Animals(TypeOfAnimals) {
        this.TypeOfAnimals = TypeOfAnimals;
    }
    Animals.prototype.Photo = function () {
        console.log(this.TypeOfAnimals + ' has been took in photo');
    };
    return Animals;
}());
var ChartreuxCat = /** @class */ (function (_super) {
    __extends(ChartreuxCat, _super);
    function ChartreuxCat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChartreuxCat.prototype.miaou = function (ChartreuxCat) {
        console.log(ChartreuxCat.TypeOfAnimals + ' Miaouuuuuu !');
    };
    ChartreuxCat.prototype.Petting = function (Animal) {
        console.log(Animal.TypeOfAnimals + ' loves petting');
    };
    return ChartreuxCat;
}(Animals));
var EuropeanCat = /** @class */ (function (_super) {
    __extends(EuropeanCat, _super);
    function EuropeanCat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EuropeanCat.prototype.Feeding = function (Animal) {
        console.log(Animal.TypeOfAnimals + ' loves food');
    };
    return EuropeanCat;
}(ChartreuxCat));
var MoonDog = /** @class */ (function (_super) {
    __extends(MoonDog, _super);
    function MoonDog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MoonDog.prototype.barking = function (MoonDog) {
        console.log(MoonDog.TypeOfAnimals + ' Waouuf Waouuf !');
    };
    MoonDog.prototype.Petting = function (Animal) {
        console.log(Animal.TypeOfAnimals + ' loves petting');
    };
    return MoonDog;
}(Animals));
var TerreNeuveDog = /** @class */ (function (_super) {
    __extends(TerreNeuveDog, _super);
    function TerreNeuveDog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TerreNeuveDog.prototype.Feeding = function (Animal) {
        console.log(Animal.TypeOfAnimals + ' loves food');
    };
    return TerreNeuveDog;
}(MoonDog));
var Mésange = /** @class */ (function (_super) {
    __extends(Mésange, _super);
    function Mésange() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mésange.prototype.Fly = function (Mésange) {
        console.log(Mésange.TypeOfAnimals + '  Jack I\'m flying !');
    };
    return Mésange;
}(Animals));
var Merle = /** @class */ (function (_super) {
    __extends(Merle, _super);
    function Merle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Merle.prototype.Feeding = function (Animal) {
        console.log(Animal.TypeOfAnimals + ' loves food');
    };
    return Merle;
}(Mésange));
var Tuna = /** @class */ (function (_super) {
    __extends(Tuna, _super);
    function Tuna() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tuna.prototype.Swim = function (Tuna) {
        console.log(Tuna.TypeOfAnimals + '  Swim !');
    };
    return Tuna;
}(Animals));
var Shark = /** @class */ (function (_super) {
    __extends(Shark, _super);
    function Shark() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Shark.prototype.Swim = function (Shark) {
        console.log(Shark.TypeOfAnimals + '  Swim !');
    };
    return Shark;
}(Animals));
var Asticot = /** @class */ (function (_super) {
    __extends(Asticot, _super);
    function Asticot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Asticot;
}(Animals));
var chartreuxCat = new ChartreuxCat('Chartreux cat');
chartreuxCat.miaou(chartreuxCat);
chartreuxCat.Petting(chartreuxCat);
chartreuxCat.Photo();
var europeanCat = new EuropeanCat('European Cat');
europeanCat.miaou(europeanCat);
europeanCat.Petting(europeanCat);
europeanCat.Feeding(europeanCat);
europeanCat.Photo();
var moonMoonDog = new MoonDog('Moon Moon Dog ');
moonMoonDog.barking(moonMoonDog);
moonMoonDog.Petting(moonMoonDog);
moonMoonDog.Photo();
var terreNeuveDog = new TerreNeuveDog('Terre neuve dog ');
terreNeuveDog.barking(terreNeuveDog);
terreNeuveDog.Petting(terreNeuveDog);
terreNeuveDog.Feeding(terreNeuveDog);
terreNeuveDog.Photo();
var mesange = new Mésange('Mésange ');
mesange.Fly(mesange);
mesange.Photo();
var merle = new Merle('merle');
merle.Fly(merle);
merle.Photo();
var shark = new Shark('Baby Shark ');
shark.Swim(shark);
shark.Photo();
var asticot = new Asticot('Strom ');
asticot.Photo();
