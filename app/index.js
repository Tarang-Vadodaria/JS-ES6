//import {fellowship} from './fellowship.js';
//import Animal from './Animal'
// ^^ Exports and Imports not working through Babel^^
{
  /*
  * -- ES6 new operators --
  */

  const limit =100;
  //limit+=100;
  let message =` Event limited to ${limit} people`
  console.log(message);
  let a =[20,30,40,50];
  let b =[10, ...a, 60]; // using ... spread operator
  console.log(b);

  function collect( ...a){
    console.log(a);
  }
  collect(1,2,3,4,5);

  let animals =["Simba", "Zazu", "Ed"];
  let [lion, bird] = animals; // destructuring
  console.log(lion, bird);

  let king = { name : 'Mufasa', kids :1}
  {let name = king.name;
    let kids = king.kids;
    let msg = `Without destructuring ${name} ${kids}`
    console.log( msg);
  }
  // for objects string is matched with object keys
  let {name, kids} = king;
  let msg = `With destructuring ${name} ${kids}`
  console.log( msg);
}


{
  /*
  * -- ES6 new methods and functions  --
  */

  // cheer is not an anonymous function , since it has a declaration
  {
    function cheer() {
      console.log(" Declared !!!");
    }
    cheer();
  }
  {
    // anonymous function expression
    var cheer = function(){
      console.log("Anonymouss cheer!!!");
    }
    cheer();
  }

  setTimeout(function () {
    console.log("3 secs timeout ")},
    "3000")
    //Arrow function
    setTimeout(() => {
      console.log("3 secs timeout Arrow function ")},
      "3000")

      var cheer = () => {
        console.log("Cheer Arrow function "),"6000"}
        cheer();
}

{
/*
* -- ES6 new methods and functions  --
*/
      {
        let values = [20,30,40]
        let double =(n) => {
          return n*2;
        }
        let doubled = values.map(double);
        //console.log(doubled);
      }

      // Map and Filter
      {
        let values = [20,30,40]
        let double =(n) => {
          return n*2;
        }
        let doubles = values.map((n) => {
          return n*2;
        });
        //console.log(doubles);
      }

      // Map and Filter
      {
        let values = [20,30,40]
        let double =(n) => {
          return n*2;
        }
        let doubles = values.map((n) => n*2);
        console.log(doubles);
      }
      {
        let points =[7,6,21,22,4,3,5]

        let highScores= points.filter((n) => {return n>15;});
        //console.log(highScores);
      }

      let points =[7,6,21,22,4,3,5]

      let highScores= points.filter((n) =>n>15);
      console.log(highScores);
}

{
/*
* -- Classes and Prototypess  --
*/
      class Animal {
        constructor(name, height) {
          this.name = name;
          this.height = height;
        }
        hello(){
          console.log(`Hi I'm ${this.name} from Animal Kingdom`)
        }
      }

      let king = new Animal('Mufasa',4.5);
      //console.log(king);
      king.hello();

      class Lion extends Animal {
        constructor(name, height, color){
          super(name, height);
          this.color = color;
        }
        hello(){
          console.log(`Hi i'm ${this.name} from pride rock`);
        }
      }
      let son = new Lion("Simba",2, 'Golden');
      //console.log(son);
      son.hello();


      // static classes in es6

      class Calculator{
        static multiply(a,b){
          return a*b;
        }
      }
      let res= Calculator.multiply(2,5)

      console.log(res);

      // prototypes in es6
      function wizard(name, house, pet){
        this.name= name;
        this.house = house;
        this.pet = pet;

        this.greet = () => `I'm ${this.name} from ${this.house}`
      }
      wizard.prototype.pet_name;
      wizard.prototype.info = function(){
        return `I have a ${this.pet} named ${this.pet_name}`
      }

      let Harry = new wizard("Harry Potter", "Gryffindor", "Owl");
      Harry.pet_name="Hedwig";
      console.log(Harry.greet());
      console.log(Harry)
}

{
/*
* -- ES6 DataStructures --
*/
//Sets in ES6
  let a = new Set();
  a.add(5);
  a.add(43);
  a.add("Woohoo");
  a.add({x : 50 , y:200});
  console.log(a);
  console.log(a.has(5));

  let numbers = [1,2,3,4,5,5,4];
  let numSet = new Set(numbers);
  console.log(numSet);

  for (let element of numSet.values()){
    console.log(element);
  }

  let chars = 'randomizedStringOfAlphabets';
  let charsArr = chars.split("");
  let charsSet = new Set(charsArr);

  console.log(charsSet);

// Maps in es6

  let sampleMap = new Map();
  let key_1 = "String key";
  let key_2 = {a: 'key'};
  let key_3 = function(){};
  sampleMap.set(key_1, 'return value for string key');
  sampleMap.set(key_2, 'return value for object key');
  sampleMap.set(key_3, 'return value for a function key');
  console.log(sampleMap);

  let numArr = [[1,'one'],[2,'two'],[3,'three']];
  let valMap = new Map(numArr);

  for (let [key,value] of valMap.entries()){
    console.log(`${key} points to ${value}`);
  }

  let string = 'dgdfhgfdgfsfdsghjhg';
  let letters = new Map();
  for(let i=0;i<string.length; i ++) {
    let letter = string[i];
    if(!letters.has(letter)) {
      letters.set(letter,1)
    }
    else{
      letters.set(letter, letters.get(letter) +1);
      }
  }

  console.log(letters);
}
