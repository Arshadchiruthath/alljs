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

// function greet(name) {
//     console.log("Hello, " + name);
//     sayGoodbye()
// }

// function sayGoodbye() {
//     console.log("Goodbye!");
// }

// greet("Arshad");


// (function(){
//     console.log("Hi");
// })();


// let arr = [1,2,3,4,5,6,7];
// let [one,two,...rest] = arr;

// console.log(one);
// console.log(rest);

//----------REST Parameters-----------------------//

// function sum(...number){
//     let add=number.reduce((acc,val)=>acc+val, 0);
//     return add
// }

// console.log(sum(1,2,3,4,5));

//-END---------REST Parameters-----------------------//

// const divide = function(a, b) {
//     return a / b;
// };

// console.log(divide(10, 2)); \

// const divide = ((a,b)=>a/b);
// console.log(divide(10, 2)); 


//--------shallow copy------deep copy----

// let arr = [1,2,[1,2]];
// let arr2 = [...arr]; //--------spread op----------pass by value ----shallow copy
// let arr2 = JSON.parse(JSON.stringify(arr));//-----deep copy
// arr1[2][0]=59;
// arr2=arr;
// arr2[2][0]=500;
// console.log(arr2)
// console.log(arr);
// console.log(arr2);

//---END-----shallow copy------deep copy----


// const person = {
//     name: "John",
//     age: 30,
//     city: "New York"
// };

// console.log(person.name);

// const { name, age, city } = person;

// console.log(name);


// let obj = {a:{ab:[1,2,3,4,5]},b:9}


// console.log(obj.a,obj.b);

// let sum = 0;
// for(let i in obj){
//     console.log(obj[i])
//     if(typeof obj[i] === 'object'){
//         sum += obj[i].ab.reduce((acc,val)=>acc+val,0);
//     }else{
//         sum+=obj[i];
//     }
// }
// console.log(sum);



// let arr=[1,2,3,[1,[2,3]]];

// let arr1=[...arr];
// let arr1=JSON.parse(JSON.stringify(arr))
// console.log(arr[3][1][0])
// arr1[3][1]=11;

// console.log(arr);
// console.log(arr1);

// let arr = [1,2,3,4,5,6,7,8];

// let arr2=arr.reduce((n,nm)=>n+nm,0);

// console.log(arr2);


// let arr = [1,2,3,4,5,6,7,8,9,10]

// let arr1= arr.every((num)=>num%2==0);

// console.log(arr1)


// function fun (name,called){

    // called("Hello",name)

// }

// function callback(n,s){
    // console.log(n+ " "+s);
    // console.log("goodbai")
// }

// fun("amar",callback)

// let str ="hi arshad how are you";

// let str1=str.substring(0,8);

// console.log(str1);

// let arr=[1,2,3,4]

// let arr1=arr.reduce((n,val)=>n+val,10);

// console.log(arr1);

// let arr=["ashad","nadeem","amar"];

// let arr1= arr.map((n)=>n[0].toUpperCase()+n.substring(1))

// console.log(arr1);

// let obj = [
//     {name:"Arshad",
//         id:4567890
//     },
//     {name:"Amar",
//         id:50000000000
//     }
// ]

// let arr = obj.map((n)=>n.name)

// console.log(arr);

