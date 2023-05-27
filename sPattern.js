// 0 1 0 3 0
// 1 1 1 3 1
// 2 1 2 3 2
// 3 1 3 3 3
// 4 1 4 3 4

for(let i = 0; i<5;i++){
    
    for(let j = 0; j<5; j++){
        if(j%2===0){
            process.stdout.write(i.toString()+" ");
        } else{
            process.stdout.write(j.toString()+" ");
        }
    }
    console.log();
}