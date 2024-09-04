//string fucntions---------------------------------

// let a ="  Hi Hello  ";
// console.log(a.length);
// console.log(a.toUpperCase());
// console.log(a.toLowerCase());
// console.log(a.trim());

// let b="5"
// console.log(b.padStart(2,"0"));
// console.log(b.padStart(2,"0"));
// let c ="WHAT";
// console.log(c.charAt("2"));

// let str= "Apple,Banana,Orange"
// let fruits= str.split(",");
// console.log(fruits);

// let a1 = "Hello";
// let a2 = "World";
// let result = a1.concat(", ",a2);
// console.log(result);

// let mystr = "HELLOOOO ARSHAD"

// console.log(mystr.substring(0,7));
// console.log(mystr.substring(9));


//----------. Array Methods .------------

// const array = [1,2,3,4];
// const add =array.map(num=>num+2);
// console.log(add);


// const arr =[6,7,8,9];
// const mult= arr.filter(num=>num%2==0);
// console.log(mult);


// console.log(arshad);

// let arshad= 2;



// Normal Function
// function add(a, b) {
//     return a + b;
//   }

//arrow function-----------
// const add = (a, b) => a + b;
// console.log(add(1,2));


// let a = parentInt(prompt("Enter number - "))
// console.log(a);

// setTimeout(()=>{

//     console.log("Async hai")
// },0)


// console.log(add(1,2));

// (function (num){
//     console.log("dihubf",num)
// })(3)

// console.log('1');

//this arrow function-----------


// const person= {
//     name: 'Arshad',
//     place: 'tirur',
//     ager: function(){
//         setTimeout(() =>{
//             console.log(`hello,`+this.name);

//         }, 1000)
//     }

// }

// person.ager();

//this in regular function-----------

// const arsha = {
//      name :"boss",
//      age: 50,
//     add : function(){
//         console.log(1+1+"1"+1)
//     }
// }

// arsha.add();

// let n=parseInt(prompt("Enter the number"));

// let sum=n*(n+1)/2;

// console.log(sum);

// let arr=[[1,2,3,4],[5,6,7,8]];

// let sum= arr.flat().reduce((n,val)=>n*val,1);

// console.log(sum);   

//let obj = {a:{af:[1,2,3,4,5],ab:[5,6,7,8]}}

//let sum=obj.a.af.reduce((n,val)=>n+val,0);

// let arr = [1,2,3,4,5]

// let add=arr.filter(n=>n%2==0);

// console.log(add)


// let arr=[2,1,2,3,4,],br=[2,3,2,32,2]

// let add=arr.concat(br);

// console.log(add)

// let sum=br.reduce((total, num) =>total+num,0)

// console.log(sum)


//------------------Object destructuring---------------------------


// let obj={
//     name:"arshad",
//     age: 29
// }

// const {name,age} =obj

// console.log(name)
// console.log(age)
// console.log(obj)

// const myobj ={
//     name : "arshad",
//     age : 87,
//     place: "tirur"

// }

// const {name:full, age:age1,place:loc} = myobj;

// console.log(full,)


// const arshad= {

//     name: "bro",
//     age: 30,
//     address: {
//         place : "tirur",
//         pin: 676551
//     }
// }

// const {name:fullname,age:fullage,address:{place:fullplace,pin:fullpin}}=arshad

// console.log(fullpin);


// END-------------Object destructuring-----------------------


//-------------Promises in JavaScript----------------

// let n=1
// let promise = new Promise((resolve,reject)=>{
//     if(n<3){
//         resolve('Hippopotomonostrosesquipedaliphobia');

//     }
//     else {
//         reject('asdfghjkl;');

//     }
// })
//     promise
//     .then((result)=>console.log(result))
//     .catch((result)=>console.log(result));

// let a=10

// function greet(name,callback) {
//     console.log("Hello, " + name);
//     function sayGoodbye1(){
//         console.log("bay");
//         sayGoodbye()
//     }
    
//   }
//   console.log(a);
  
  
//   function sayGoodbye() {
//     console.log("Goodbye!");
//   }
  
//   greet("Arshad",sayGoodbye);


//------------------PROBLEM------------------------------


// const ab = [{af:35},{af:35},{af:8},{af:4}]


//------------------PROBLEM------------------------------

//-------------------------call-----------------------------

// const person={
//     firstName :"arshad",
//     lastName: "c",
//     Fulname : function (a,b){
//         console.log(this.firstName+" "+this.lastName+"from "+a+" in "+b);
//     }
// }

// const person2={
//     firstName : "AAAARRRRRSSSSHHHHHAAAADDD",
//     lastName: "chiruthath",
// }
// const myall=person.Fulname.call(person2, ["Kerala","india"]);
  
//-------------------------call-----------------------------

function greet(name) {
    console.log("Hello, " + name);
    sayGoodbye()
}

function sayGoodbye() {
    console.log("Goodbye!");
}

greet("Arshad");



