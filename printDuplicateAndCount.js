const duplicateAndTheirCount = (str) => {
    const map = new Map();

    for(const ltr of str){
        if(map.has(ltr)){
            map.set(ltr, map.get(ltr) + 1);
        }else{
            map.set(ltr, 1);
        }
    }

    map.forEach((value, key) => {
        if(value>1){
            console.log(`${key} => ${value}`)
        }
    })
}

const str = "geekforgeeks";

duplicateAndTheirCount(str);