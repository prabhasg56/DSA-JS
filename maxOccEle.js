const maxOccEle = (arr) => {
  let map = new Map();

  for (let ele of arr) {
    if (!map.has(ele)) {
      map.set(ele, 1);
    } else {
      map.set(ele, map.get(ele) + 1);
    }
  }

  let max = Number.MIN_VALUE,
      res;  

  map.forEach((value, key) => {
    if(value>max){
        max=value;
        res = key;
    }
  });

  return res;
};

let arr = [8, 10, 8, 10, 8, 8,8, 3];
console.log(maxOccEle(arr));
