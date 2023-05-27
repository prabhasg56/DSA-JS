const sumOfNatural = (n) => {
    if(n<=0){
        return 0;
    }

    let sum = n + sumOfNatural(n-1);
    return sum;
}

let n = 5;
console.log(sumOfNatural(n));