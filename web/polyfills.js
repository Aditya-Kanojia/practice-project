

//for map

// Array.prototype.myMap= function(cb){
//     let temp=[];
//     for(let i=0;i<this.length;i++){
//       let a=cb(this[i],i,this)
//       temp.push(a)
//     }
//     return temp
// }

// let arr=[1,2,3,4];

// let result= arr.myMap((a,i,arr)=>{
//     return a*5;
// })

// console.log(result);

//for filter

// let arr=[2,3,6,5,7];

// Array.prototype.myFilter= function(fn){
//     let temp=[];

//     for(let i=0;i<=this.length;i++){
//        if(fn(this[i],i,this)) temp.push(this[i])
//     }
//     return temp;
// }
// const a=arr.myFilter((a)=>{
//         return a>2;
//     });
// console.log(a);

// let b=arr.filter((a)=>{
//     return a>3;
// })
// console.log(b)

//reduce 

// let arr=[2,6,1,4,5];

// Array.prototype.myReduce=function (cb,initialValue){
//     var accumulator = initialValue;
//     for(let i=0;i<this.length;i++){
//         accumulator=accumulator ? cb(accumulator,this[i],i,this) : this[i];
//     }
//     return accumulator;
// };

// // let output=arr.myReduce((accu,curr,i,arr)=>{
// //     return accu+curr;
// // },0)
// let output=arr.myReduce((accu,curr,i,arr)=>{
//     return accu+curr;
// },0)

// console.log(output);


// let forEachOutput=arr.forEach((a,i)=>{
//     arr[i]= a+2;
// })
// console.log(arr);

// let students=[
//     {name:"Piyush",rollNumber:31,marks:80},
//     {name:"Jenny",rollNumber:15,marks:69},
//     {name:"Kaushal",rollNumber:16,marks:35},
//     {name:"Dilpr eet",rollNumber:7,marks:55},
// ];

// let totalMarks=students.filter((stu)=>stu.marks<60).map(stu=>stu.marks+20);//.filter(stu=>stu.marks>60);//.reduce((accu,curr)=> accu+curr.marks);

// console.log(totalMarks);

// const fn= (a,b,c,...nums)=>{
//     console.log(a,b,c,nums)
// }
// let arr=[5,6,2]
// fn(...arr,1,2,5,5)


// function find1(index){
//     let a=[];
//     for(let i=0;i<1000000;i++){
//         a[i]=i*i;
//     }
//     return (index)=>{
//     console.log(a[index]);
//     }
  
// }
// let find =find1();
// console.time("6");
// find(6);
// console.timeEnd("6");
// console.time("50");
// find(9);
// console.timeEnd("50")



//map 


// let arrow = ()=>{
//      (()=>{
//         console.log(this);
//      })
// }

// arrow();



// let arr=[1,5,6,7,8]



// Array.prototype.myMap=function (fn){
//      let temp=[];
//     for(let i=0;i<this.length;i++){
//         let a=fn(this[i],i,this)
//             temp.push(a);
//         }
//         return temp;
//     }
   
//   let total=  arr.myMap((ele,i,arr)=>{
//         return ele*2;
//     });
// console.log(total);

// Array.prototype.myFilter= function (fn){
//     let temp=[];

//     for(let i=0;i<this.length;i++){
//         if(fn(this[i],i,this))
//           temp.push(this[i])
//     }
//    return temp;

// }

//    let fil=arr.myFilter((ele,i,arr)=>{
//       return ele>3;
//    })
//  console.log(fil);


// Array.prototype.myReduce= function(fn,initialValue){

//     let accu= initialValue;
//    for(let i=0;i<this.length;i++){
//     accu= accu ? fn(accu,this[i],i,this) : this[i];
//    }
//   return accu;
// }

// let sum=arr.myReduce((accu,curr,i,arr)=>{
//     return accu+curr;
// },0)

// console.log(sum);





 




