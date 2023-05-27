function printSubsequences(arr, i, subarr) { 
 
    if (i == arr.length) { 
        if (subarr.length != 0) { 
            console.log(subarr); 
        } 
        return; 
    } 
  
    // Case 1: include current element 
    printSubsequences(arr, i + 1, subarr.concat(arr[i])); 
  
    // Case 2: exclude current element 
    printSubsequences(arr, i + 1, subarr); 
} 
  
// Driver Code 
let arr = [1, 2, 3]; 
printSubsequences(arr, 0, []); 