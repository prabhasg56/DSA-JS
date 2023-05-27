const maxNumFromBothDiagonal = (arr) => {

    let max1 = Number.MIN_VALUE,
        max2 = Number.MIN_VALUE,
        len = arr.length;

    for(let i=0;i<len; i++){
        let arr1 = arr[i];

        for(let j=0;j<len;j++){
            if(i===j){
                if(arr[i][j]>max1){
                    max1 = arr[i][j];
                }
            }
            if((i + j) === (len - 1)){
                console.log(arr[i][j])
                if(arr[i][j]>max2){
                    max2 = arr[i][j];
                }
            }
        }
    }

    return [max1, max2]

}


let arr = [[1,2,3],[4,5,6],[7,8,9]]
console.log(maxNumFromBothDiagonal(arr))