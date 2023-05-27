const factorial = (n) => {
    if(n<=0){
        return 1;
    }

    let sum = n * factorial(n-1);
    return sum;
}

let n = 5;
console.log(factorial(n));