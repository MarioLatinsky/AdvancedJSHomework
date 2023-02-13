import Horse from "./models/animal/horse.js";
import Musician from "./models/animal/musician.js";
import Pudlica from "./models/animal/pudlica.js";
import Sarplaninec from "./models/animal/sarplaninec.js";
import StarZenskiSarplaninec from "./models/animal/starZenskiSarplaninec.js";
import Human from "./models/human.js";
import Artist from "./models/animal/artist.js";
import Farmer from "./models/animal/farmer.js";
// console.log('Main class');

// const horse1 = new Horse('Goce', 7, 'Male');

// // console.log(horse1);

// horse1.die();

// const sarplaninec1 = new Sarplaninec('Sarko', 5, 'Male');

// sarplaninec1.bark();

// console.log(sarplaninec1);

// const pudlica1 = new Pudlica("Kiko", 5, undefined);
// // pudlica1.bark();
// pudlica1.bark();
// pudlica1.bark();
// pudlica1.bark();
// pudlica1.bark();
// pudlica1.bark();
// pudlica1.bark();
// pudlica1.die("crkni");
// pudlica1.bark("gaf gaf gaf");

// pudlica1.comeAlive()

// console.log('bark');
// pudlica1.bark()
// sarplaninec1.bark()
// console.log('bark ends');

// setTimeout(() => {
//     pudlica1.die()
// }, 10000)

// console.log(horse1);

const starZenskiSarplaninec = new StarZenskiSarplaninec("Lajka", 11);

console.log(starZenskiSarplaninec);

const person1 = new Human("Mario", 21, "Male");

console.log(person1);

person1.talkToSomeone();

person1.speak();

const musician1 = new Musician("Mozzart", 35, "Male");

console.log(musician1);

const artist1 = new Artist("Leonardo", 35, "Male");
console.log(artist1);
// artist1.paint();

const farmer1 = new Farmer("Stanislav", 68, "as Male as it gets");

console.log(farmer1);

// farmer1.pickUpAxe();
