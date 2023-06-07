
// Do not touch this function at all
function create3rdPost(callback) {
    setTimeout( () => {
        console.log('Post Three')
        //If callback function is passed call it
        if(callback){
            callback();
        }
    }, 3000)
}

//Please modify this function too to reach the desired output
function create4thPost(callback) {
    setTimeout( () => {
        console.log('Post Four');
        if(callback){
            callback();
        }
    }, 2000);
}

// Do not touch this function at all
function create5thPost(callback) {
    setTimeout( () => {
        console.log('Post Five')
        callback();
    }, 1000);
}

function create6thPost() {
    setTimeout( () => {
        console.log('Post Six')
    }, 1000);
}


//You have to  modify the syntax below to reach the desired output
create3rdPost(()=>create4thPost(()=>create5thPost(create6thPost)));