// 'use-strict'

// const adityaa ={
//     year: 1997,
//     calAge: () => {
//         console.log(this.year);
        
//     }
// }

// adityaa.calAge();

// const f= adityaa.calAge;
// console.log(f);

// f();

// console.log("hello")

// function str(stri){
//     console.log(stri.split(""))
// }

// str(aditya)

// var firstWord = "Deepak Kumar";
// var secondWord = "Deepak Kumar";

// console.log(isAnagram(firstWord,secondWord)); // true

// function isAnagram(one, two) {
//   //Change both words to lowercase for case insensitivity..
//   var a = one.toLowerCase();
//   var b = two.toLowerCase();

//   // Sort the strings, then combine the array to a string. Examine the outcomes.
// //   a = a.split("")
//   b = b.split("").reverse();
//   let c=  a.split("").reverse().join("");
//   console.log(a,b,c)
//   return a===b;
// }

// function foo()  
// {  
// var a = 65;  
// var b = 65;  
// if(a.toString() === b)  
// return 1;  
// else  
// return 0;  
// } 
// foo();


// const obj ={
//     name:'aditya',
//     age: '24',
//     getDetails(ar){
//         console.log(ar,this.name, this.age)
//     }
// }

// const obj2={
//     name:"aman",
//     age:25
// }

// console.log(obj2.length)
// // obj.getDetails();

// let bindfun= obj.getDetails.bind(obj2,"obj2");
// bindfun();
// // obj.getDetails.apply(obj2,["obj2"]);

// obj.call(obj2);


// const fun1=(a)=>{
    
//     return (b)=>{
  
//         return(c)=>{
//             console.log(a+b+c);
//         }

//     }
// }
// fun1(2)(3)(4);


// infinite curyinig

// function sum(a){
//     return function (b){
//         if(b||0) {
//             return sum(a+b)
//         }

//         return a;
//     }
// }

// console.log(sum(2)(3)(4)(false)())

function updater(id){
    return function (content){
        document.querySelector("#" + id).textContent=content
    }
}
const updateHeader = updater("heading");
updateHeader("red");