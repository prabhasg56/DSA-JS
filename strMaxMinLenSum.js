const strMaxMinLenSum = (str) => {
    let strArr = str.split(' ').sort((a,b)=> a.length-b.length)

    return strArr[0].length + strArr[strArr.length-1].length;

    // let max = Number.MIN_VALUE,
    //     min = Number.MAX_VALUE;
    // let strArr = str.split(' ');

    // for(let ele of strArr){
    //     if(ele.length>=max){
    //         max = ele.length;
    //     }else{
    //         min = ele.length;
    //     }
    // }
    
    // return max + min;
}

console.log(strMaxMinLenSum("eight hours of sleep is important"));