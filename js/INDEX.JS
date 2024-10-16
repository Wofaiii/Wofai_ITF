//keyword variableName = value;
var a = 5;
let b = 6;
const c = 7;
console.log(a)
console.log(b)
console.log(c)

// updating a variable
var a = 15;
console.log(a)
b = 16;
console.log(b)
// c = 77
console.log(c)

//! operators

//? arithmetic operators
let d = 4; e = 2;

console.log(d + e) //6
console.log(d / e) //2
console.log(d * e) //8
console.log(d ** e) //15
console.log(d % e) //0
console.log(++d) //5 (UPDATED BEFORE NEXT LINE!)
console.log(--d) //4
console.log(++e) //3

//? comarison opetors
let f = 7;
console.log(f > 9); //false
console.log(f < 9); //true
console.log(f == 9); //false
console.log(f >= 9); //false
console.log(f <= 9); //true
console.log(f != 9); //true
console.log(f == '7'); //true
console.log(f === '7'); //false
console.log(f !== '7'); //true

//? logical opeators
/* 
&& is like Multiplication
in truth table 0=false and 1=true;

condition1 condition2 result action
   0           1        0     false
   1           0        0     false
   0           0        0     false
   1           1        1     true   


   || is like Addition

in truth table 0=false and 1=true;

condition1 condition2 result action
   0           1        1     true
   1           0        1     true
   0           0        0     false
   1           1        1     true

   */
let isMarried = false;

console.log(!isMarried, 'Married') //true
console.log(f > 9 && f < 9); //false
console.log(f > 9 && f < 19); //false
console.log(f < 9 && f < 19); //true
console.log(f > 9 || f < 9);//true
console.log(f > 9 || f < 19); //true
console.log(f < 9 || f < 19); //true

//compound operator

let g = 6;
/* 
  a +=b equivalent to a = a +b;
  a ==b equivalent to a = a -b;
*/
 console.log(g +=1); //7
 console.log(g +=8); //15
 console.log(g +=15); //30
 console.log(g -=15); //15
 console.log(g *=15); //225
 console.log(g /=15); //15
 console.log(g %=15); //0

 //? assignment operator
 /* 
  == assignment operator
 */

let v = 99;

//boolean algebra
console.log('***Today***')
let isMale = true;
console.log(isMale)
console.log(typeof isMale)

const isFemale = false;
console.log(isFemale)
console.log(typeof isFemale)

let blogs = null;
console.log(blogs,typeof blogs);
 blogs = []; // updating blogs
 console.log(blogs)

 let age; //declaring age without initializing it
 let age2 = undefined;

 console.log(age, age2)
 age = 969;
 console.log(age)

 let num = 10;
 let num2 = 33.5;
 console.log(num,num2)
 //number methods
 
 let r = 3; s =3;
console.log(3**3)
console.log(Math.pow(3,3));
console.log(Math.PI);
console.log(Math.sin(60));
console.log(Math.log(10));
console.log(Math.random() * 100);
console.log(Math.round((Math.random() * 100)))

//Learn how to use Math.random() to generate random numbers from 0 to any number

//?
let Name = 'Chile';
console.log(typeof Name)
// stringVariable.Length;
console.log(Name.length)
//how to get any letter from a string value
//a string is like an array
/** index: 01234
 *         chile
 items:    12345

 to get i from chile
 stringVriable[index]
 */
console.log(Name[2])
let fullName = 'Amadi Chile';

console.log(fullName.length)
console.log(fullName[6])

//replacing a letter in a string
fullName = fullName.replace('Chile', "White");
console.log(fullName)

fullName = fullName.replace('Amadi',"Omadi")
console.log(fullName)

//deleting a letter from a string
fullName = fullName.replace('a', "");
console.log(fullName)

let fruit = 'Apple';
// delete A
console.log(fruit)
fruit = fruit.replace('A', "")
console.log(fruit)

//How to convert a string to an array
let arrfruit = fruit.split('');
console.log(arrfruit)
let sentence = 'I love you';
let arrsentence = sentence.split(' ')
console.log (arrsentence)

//Joining two strings together using .concat
let text1 = "sea";
let text2 = "food";
let result = text1.concat(text2);
console.log(result)
//Joining to strings together using +
console.log(text1 + text2);

let n1 = 1;
let n2 = 1;
console.log(n1 + n2);
let n3 = "1";
let n4 = "1";
console.log(n3 + n4);
//! DO NOT ADD A NUMBER AND A STRING"" TOGETHER, IT WILL CONCATENATE

//How to inject a variable into a string
let hobby = 'trade';
// i love to trade
let sent = "i love to " + hobby;
console.log(sent)

let name = 'Wofai';
let country = 'Nigeria';
let occupation = 'Web Developer';

//My name is Wofai. I am from Nigeria and I am a Web developer
let ans = "My name is " + name + ". " + "i am from " + country + " and i am a " + occupation;
console.log (ans)

//using template string
//how to inject variable in template string `${variable}`;
let ans2 = `My Name is ${name}. I am from ${country} and I am a ${occupation} `
console.log(ans2)

//!ARRAYS
const cars = ['toyota', 'BMW', 'Lexus', 'Benz', 'GLK',];
console.log(cars)
let car = cars[0]
console.log(car)
let length = cars.length;
console.log(length)
// corrent (1)


console.log('Assignment');
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits) 
//POP: REMOVES ELEMENT FROM AN ARRAY
fruits.pop(); // correct
console.log(fruits)
//PUSH: ADDS ELEMENT TO AN ARRAY
fruits.push("Kiwi"); // correct
console.log(fruits)
//SHIFT: REMOVES THE FIRST ELMENT FRON AN ARRAY
fruits.shift(); // correct
console.log(fruits)
//UNSHIFT: ADDS NEW ELEMENTS TO THE BEGINNING OF THE ARRAY
fruits.unshift("Lemon","Pineapple"); // correction
console.log(fruits)
//SPLICE: replacing old items with new items
fruits.splice(2, 3, "Corn", "Pear");
console.log(fruits)
//SPLICE: removing items without leaving holes in array
fruits.splice(0, 1); 
console.log(fruits)

// correct
// how to delete items from an array
delete cars [2];
console.log(cars)
// how to check if an items is present in an array
console.log(cars.includes('Benz'))
console.log(cars.includes('venza'))
//another method
console.log(cars.indexOf('Benz'))
console.log(cars.indexOf('venza'))// "-1" shows it doest exist in the array

let question = "how to check an item exist in an array";
console.log(question.includes('array'))
console.log(question.indexOf('a'))
console.log(question.lastIndexOf('a'))

//! object

let remote = {
   name: 'LG',
   color: 'Black',
   "owner": 'Elitepath',
}
// the key: value pairs form the properties on an object

//how to get object values
//objectName.key or objectName['key']
console.log(remote.name)
console.log(remote.owner)
console.log(remote['color'])

//Adding new properties to na object
Object.defineProperty(remote, 'age', {value: '1 year'});
// method 2
remote.button = true;// if the key exists, then update the value, else add the key and value.
console.log(remote)

Object.defineProperty(remote, 'color', {value: 'white'});
console.log(remote)

//deleting a property from an object
delete  remote.button;
console.log(remote)

//! function
/** uses of function
 * aids for reusability of code
 */
//? how to create a function
//* function keyword 
/**
  function functionName{
  code block
  }
  calling the function
  functionName();
 */
function greetUser(name = 'Chile', title='Mr') {
   console.log(`Good Morning ${title}. ${name}!`)
}
//* using arow function
/**
  const functionName = ()=> {
   code block
   }
  
  calling the function
  functionName();
 */
const greetUser2 = ()=> {
   console.log('Good AfterNoon Ms. Wofai!')
}
//?how to call a function
greetUser()
greetUser2()
//! Assigment
//? Hoisting in Js
//?how to make a function dynamic
//Create a function that sums any two numbers
function sumNumbers(x=3,y=4){
   console.log(x+y);
}

sumNumbers()
function multiply(h=5,g=5){
   console.log(h*g);
}

multiply()
//create a function that subtracts any 3 numbers
function subtract(a=10,b=5,c=3){
   console.log(a-b-c);
}

subtract(12,5,3)
//?Returning a function in javascript
function subThree(a=3,b=2,c=1){
   return a-b-c;
}

console.log(subThree(12,7)*5)
//Create a function that adds, multplies, subtracts and divides any two numbers
function amsd(a=5,b=4,c=3,d=2,e=1){
   let add = a+b+c+d+e;
   let subt = a-b-c-d-e;
   let multiply = a*b*c*d*e;
   let divide = a/b/c/d/e;
   //return[add,subt,multiply,divide]
   return{add,subt,multiply,divide}
}
//?destructure
//let [add, subt] = amsd();
let {add, subt} = amsd();
console.log(amsd())
console.log(add,subt)



//! CONDITIONALS
let input = prompt ('Please type a number from 0-10');
// //if
// if(Number(input) > 5) {
//    console.log('is greater than 5')
// }else{
//    console.log('is less than 5')
// }
// let input = prompt ('Please enter your Age:');
// if (Number(input)>17){
//    console.log('Can drink alcohol');
// }else if(Number(input)>15 && Number(input) <=17){
//    console.log('Can drink alcohol under parents supervision')
// }else if(Number(input)>10 && Number(input) <=15){
//    console.log('I recommend Hollandia Yoghurt')
// }else{
//    console.log('I recommend Water')
// }
// switch (Number(input)) {
//    case 19:
//    case 18:
//       console.log('Can drink alcohol');
//       break;
//    case 16:
//    case 17:
//       console.log('Can drink alcohol under parents supervision');
//    case 10:
//    case 11:
//    case 12:
//    case 13:
//    case 14:
//    case 15:
//       console.log('I recommend Hollandia');      

//    default:

//    console.log('I recommend Water')
//       break;
// }
// if(Number(input)>=18){
//    console.log('Can drink alcohol')
//    console.log('What is your brand?')
// }else{
//    console.log('Cannot drink alcohol')
// }

/* 
  if (condition) {
  code block;
  }
*/
//?Tenary operator
//condition? statement to run if true: statement torun if false;
if(Number(input)>=18 ? console.log('Can drink alcohol'): console.log('Cannot drink alcohol!'));

//? conditional rendering

// condition && statement to run if true;

Number(input)>= 50 & console.log('Please stop drinking alcohol or drink in moderation');
!(Number(input)>= 50) & console.log('Drink alcohol responsbly');