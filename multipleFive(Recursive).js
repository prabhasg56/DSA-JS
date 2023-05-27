const multipleOfFive = (i,itr) => {
    
    if(itr<=0){
        return;
    }
    console.log(i*5);
    multipleOfFive(i+1,itr-1);
}

let noOfTimesItr = Math.ceil(30/5)
multipleOfFive(0,noOfTimesItr);