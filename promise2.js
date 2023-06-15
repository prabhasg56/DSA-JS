function register() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Register end");
      resolve('success');
    }, 1000);
  });
}

function sendEmail() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Email end");
      resolve();
    }, 1000);
  });
}

function login() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Login end");
      resolve();
    }, 2000);
  });
}

function getUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Get user data end");
      resolve();
    }, 3000);
  });
}

function displayData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Display data end");
      resolve();
    }, 1000);
  });
}

//....M1....//
// register().then(sendEmail).then(login).then(getUserData).then(displayData);

//....M2....//
async function authenticate() {
   try {
    const msg = await register();
                await sendEmail();
                await login();
                await getUserData();
                await displayData();
                console.log(msg);
   }catch(err){
    console.log(err)
   }
}

authenticate().then(()=>{
    console.log('All set..')
})
// .catch((err) =>{
//     console.log(err);
// })
console.log("Other application work");
