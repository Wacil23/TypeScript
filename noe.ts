interface CanBePet  {
  Petting(Animal: object): void
}
interface CanBeFeed  {
  Feeding(Animal: object): void
}

class Animals {
  TypeOfAnimals: string;
  constructor(TypeOfAnimals: string){
    this.TypeOfAnimals = TypeOfAnimals;
  }
  Photo(){
    console.log(this.TypeOfAnimals + ' has been took in photo');
  }
}

class ChartreuxCat extends Animals implements CanBePet{
  miaou(ChartreuxCat: ChartreuxCat) {
    console.log(ChartreuxCat.TypeOfAnimals + ' Miaouuuuuu !');
  }
  Petting(Animal: ChartreuxCat){
    console.log(Animal.TypeOfAnimals + ' loves petting');
  }
}

class EuropeanCat extends ChartreuxCat implements CanBeFeed{
  Feeding(Animal: EuropeanCat){
    console.log(Animal.TypeOfAnimals + ' loves food');
  }
}
class MoonDog extends Animals implements CanBePet{
  barking(MoonDog: MoonDog) {
    console.log(MoonDog.TypeOfAnimals + ' Waouuf Waouuf !');
  }
  Petting(Animal: MoonDog){
    console.log(Animal.TypeOfAnimals + ' loves petting');
  }
}

class TerreNeuveDog extends MoonDog implements CanBeFeed{
  Feeding(Animal: TerreNeuveDog){
    console.log(Animal.TypeOfAnimals + ' loves food');
  }
}
class Mésange extends Animals{
  Fly(Mésange: Mésange) {
    console.log(Mésange.TypeOfAnimals + '  Jack I\'m flying !');
  }
}

class Merle extends Mésange implements CanBeFeed{
  Feeding(Animal: Merle){
    console.log(Animal.TypeOfAnimals + ' loves food');
  }
}

class Tuna extends Animals{
  Swim(Tuna: Tuna) {
    console.log(Tuna.TypeOfAnimals + '  Swim !');
  }
}

class Shark extends Animals{
  Swim(Shark: Shark) {
    console.log(Shark.TypeOfAnimals + '  Swim !');
  }
}

class Asticot extends Animals{

}

let chartreuxCat = new ChartreuxCat('Chartreux cat');
chartreuxCat.miaou(chartreuxCat);
chartreuxCat.Petting(chartreuxCat);
chartreuxCat.Photo();

let europeanCat = new EuropeanCat('European Cat');
europeanCat.miaou(europeanCat);
europeanCat.Petting(europeanCat);
europeanCat.Feeding(europeanCat);
europeanCat.Photo();

let moonMoonDog = new MoonDog('Moon Moon Dog ');
moonMoonDog.barking(moonMoonDog);
moonMoonDog.Petting(moonMoonDog);
moonMoonDog.Photo();

let terreNeuveDog = new TerreNeuveDog('Terre neuve dog ');
terreNeuveDog.barking(terreNeuveDog);
terreNeuveDog.Petting(terreNeuveDog)
terreNeuveDog.Feeding(terreNeuveDog);
terreNeuveDog.Photo();

let mesange = new Mésange('Mésange ');
mesange.Fly(mesange);
mesange.Photo();

let merle = new Merle('merle');
merle.Fly(merle)
merle.Photo();

let shark = new Shark('Baby Shark ');
shark.Swim(shark);
shark.Photo();

let asticot = new Asticot('Strom ');
asticot.Photo();


