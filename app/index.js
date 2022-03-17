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


{
  /*
  * -- ES6 Closures --
  */
    console.log("hello");
    let call = () => {
      let secret = 'ES6 rocks!';
      let reveal = () => {
        console.log(secret);
      }
    //reveal();
    return reveal;
    }
    let unveil = call();
    unveil();

    // function factories

    const addSuffix = (x) => {
      const concat = (y) => {
        return y+x
      }
      return concat;
    }
    let add_ness = addSuffix("ness");
    console.log(add_ness);
    let h = add_ness("happi");
    console.log(h);
    let add_ful = addSuffix("ful");
    let f = add_ful("fruit");
    console.log(f);
    /*
    const product =(x) => {
      return y => {
        return y*x;
      }
    }
    */

    /*
    const product =(x) => {
      return y => y*x
    }
    */
    const product = x => y => y*x


    let mult5 = product(5);
    console.log(mult5(3));

    let double =product(2);
    console.log(double(9))


    // private  - methods in es6
    const budget = () =>{
      let balance = 0;
      let changeBal =(val) => {
        return balance+=val;
      }

      const deposit20 = () => changeBal(20);
      const withdraw20 = () => changeBal(-20);
      const check = () => balance;

      return{
        deposit20 :deposit20,
        check: check,
        withdraw20: withdraw20
      }
    }


    let wallet =budget();
    console.log(wallet);
    wallet.deposit20();
    console.log(wallet.check());
    console.log(wallet.balance); // cannot access private variable
    //Does JavaScript support private methods natively ?
      //NO, But we can emulate the behavior of private methods with closures!
}


{

  /*
  * -- ES6 Generators --
  */

  function* letterMaker(){
    yield 'a';
    yield 'b';
    yield 'c';
  }
  let letterGen = letterMaker();
  console.log(letterGen.next().value);
  console.log(letterGen.next().value);
  console.log(letterGen.next().value);
  console.log(letterGen.next().value);

  function* countMaker(){
    let count = 0;
    while (count <3){
      count +=1;
      yield count;

    }
  }
  let countGen = countMaker();
  console.log(countGen.next().value);
  console.log(countGen.next().value);
  console.log(countGen.next().value);

  function* evens(){
    let counteven = 0;
    while(true){
      counteven+=2;
      let reset = yield counteven;
      if(reset){
        counteven = 0;
      }
    }
  }
  let seq = evens();
  console.log(seq.next().value);
  console.log(seq.next().value);
  console.log(seq.next().value);
  console.log(seq.next(true).value);
  console.log(seq.next().value);




const  arrayIterator =(array) => {
  let index = 0;
  return {
    next: () => {
      if (index < array.length){
        let next = array[index];
        index +=1;
        return next;
      }
    }
  }
  }

 let it = arrayIterator(['1','2','3']);
 console.log(it.next());
 console.log(it.next());
 console.log(it.next());
 console.log(it.next());


function* arrayGenerator(){
  // for(let arg of arguments){
  //   yield arg;
  // }
 yield* arguments

}

var itg = arrayGenerator(1,2,3);
console.log(itg.next().value);
console.log(itg.next().value);
console.log(itg.next().value);
console.log(itg.next().value);
}
