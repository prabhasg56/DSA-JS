let users = {
  username: "Raman",
  lastActivityTime: new Date().getTime()
};

let posts = [];

function createPost(post) {
  return new Promise((resolve, reject) => {

    setTimeout(() => {
        posts.push(post);
        resolve(posts);
    }, 1000);
  });
}

function updateLastActivityTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        users.lastActivityTime = new Date().getTime();
        resolve(users.lastActivityTime);
    }, 1000);
  });
}

function deletePost() {
    return new Promise((resolve, reject) => {
        if(posts.length > 0){
            const post = posts.pop();
            resolve(post);
        }else{
            reject('ERROR: there is no user');
        }
    }, 1000)
}

Promise.all([createPost({'title' : 'Post'}), updateLastActivityTime()])
.then(([createPostResolve, updateLastActivityTimeResolve])=>{
    console.log(`After update activity posts  ${JSON.stringify(createPostResolve)} and time ${updateLastActivityTimeResolve}`);
    
    deletePost().then((deletePostResolve)=> {
        console.log(deletePostResolve);
    })

}).catch(err => console.log(err))
