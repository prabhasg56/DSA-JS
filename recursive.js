let sum =0;

let n=5;  

for(let i=0;i<15;i=i+2)

{

if(i==n)

{

break;

}

sum =sum+i;

}

console.log(sum);
let n1 = 15;
const sum1 = (s)=>{
   
    if(s==n){
        return ;
    }
    if(s>n1-1){
       return 0;
    }
    let sum = s+sum1(s+2)
    return sum;
    
}
let s=0,i=0;
console.log(sum1(s));