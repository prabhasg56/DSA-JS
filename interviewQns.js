let arr = [1,2,3,4,1,2,3];

// M1
// let res = new Map();

// arr.forEach((ele, index)=>{
//     if(!res.has(ele)){
//         res.set(ele, 1);
//     }else{
//         res.set(ele, res.get(ele)+1);
//         obj[ele] = obj[ele] + 1;
//     }

// });
// // res.forEach((val, index) => {
// //     console.log(val)
// //     if(val === 1){
// //         console.log(index);
// //     }
// // })


// for(let [key, val] of res.entries()){
//     console.log(val)
//     if(key === 1){
//         console.log(val);
//     }
// }

// M2
let obj = {};

arr.forEach((val,key) => {
    if(!obj.hasOwnProperty(val)){
        obj[val] = 1;
    }else{
        obj[val] = obj[val] +1; 
    }
})

let keys = Object.keys(obj)

for(let ele of keys){
    if(obj[ele] === 1){
        console.log(ele);
    }
}


