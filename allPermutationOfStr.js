const allPsblePermutationOfStr = (str, output) => {
    
    if(str.length === 0){
        console.log(output);
        return;
    }

    for(let i=0;i<str.length;i++){
        allPsblePermutationOfStr(str.substring(0,i)+str.substring(i+1), output+str[i]);
    }
}

//approach2
function permutation(str){
    let result = [];
    if(str.length === 1) return str;
  
    for(let i = 0; i < str.length; i++){
      let firstChar = str[i];
      let charsLeft = str.substring(0, i) + str.substring(i + 1);
      let innerPermutations = permutation(charsLeft);
      console.log(innerPermutations)
      for(let j = 0; j < innerPermutations.length; j++){
        result.push(firstChar + innerPermutations[j]);
      }
    }
    return result;
  }

allPsblePermutationOfStr('abc', '');