
// sum=(a)=>{
//     return (b)=>{
//         if(b){ 
//             return sum(a+b);}
        
//         else{return a}
//     }
// }

// console.log(sum(5)(6)(7)(8)());

//map polyfill --

// Array.prototype.myMap=function (fn){
//     let temp=[];
//     for(let i=0;i<this.length;i++){
//       temp.push(fn(this[i],i,this));
//     }
//     return temp;
// }

// arr=[2,3,5,1,6];
// let output=arr.myMap((a,i)=>{
//     return a+2;
// })
// console.log(output)



// filter polyfill


// Array.prototype.myFilter=function (fn){
//     let temp=[];
//     for(let i=0;i<this.length;i++){
//       if(fn(this[i],i,this)){
//          temp.push(this[i]);
//       }
//     }
//     return temp;
// }

// arr=[2,3,5,1,6];
// let output=arr.myFilter((a,i)=>{
//    return a>2;
// })
// console.log(output)

// reduce


// Array.prototype.myReduce=function (fn,initialvalue){
//     let accu = initialvalue;
//     for(let i=0;i<this.length;i++){
//       accu= accu ? (fn(accu,this[i],i,this)) : this[i];
//     }
//     return accu;
// }

// arr=[2,3,5,1,6];
// let output=arr.myReduce((accu,curr,i,arr)=>{
//     return accu+curr;
// },0)
// console.log(output);




// sum=(a)=>(b)=>(c)=>a+b+c;





// let total=sum(1)(2)(3);
// console.log(total);