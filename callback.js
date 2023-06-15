function register(callback){
    setTimeout(()=>{
        console.log('Register end');
        callback();
    }, 1000);
}

function sendEmail(callback){
    setTimeout(()=>{
        console.log('Email end');
        callback();
    }, 4000);
}

function login(callback){
    setTimeout(()=>{
        console.log('Login end');
        callback();
    }, 1000);
}

function getUserData(callback){
    setTimeout(()=>{
        console.log('Get user data end');
        callback();
    }, 4000);
}

function displayData(){
    setTimeout(()=>{
        console.log('Display data end');
    }, 1000);
}

register(() => {
    sendEmail(() => {
        login(() => {
            getUserData(() => {
                displayData();
            })
        })
    })
})


console.log('Other application work');