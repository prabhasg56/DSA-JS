console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMove = async () =>{
    const promiseWifeBringingTickets = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('ticket');
        }, 3000)
    })

    const getPopcorn = new Promise((resolve, reject) => resolve(`popcorn`));
    const getButter = new Promise((resolve, reject) => resolve(`butter`));
    const getColdDrinks = new Promise((resolve, reject) => resolve(`coldDrinks`));

    let ticket = await promiseWifeBringingTickets;

    // console.log(`wife: i have the ${ticket}`);
    // console.log('husband: we should go in');
    // console.log('wife: no i am hungry');

    // let popcorn = await getPopcorn;

    // console.log(`husband: i got some ${popcorn}`);
    // console.log('husband: we should go in');
    // console.log('wife: I need butter on my popcorn');

    // let butter = await getButter;

    // console.log(`husband: i got some ${butter}`);
    // console.log('husband: we should go in');
    // console.log('wife: I need colddrinks');

    // let coldDrinks = await getColdDrinks;

    // console.log(`husband: i got some ${coldDrinks}`);
    // console.log('husband: anything ele darling?');
    // console.log('wife: lets go we are getting late');
    // console.log('husband: thank you for the reminder *grins*');

    /// promise.all

    let [popcorn, butter, coldDrinks] = await Promise.all([getPopcorn, getButter, getColdDrinks]);

    console.log(`${popcorn}, ${butter}, ${coldDrinks}`)
    return ticket;

}

preMove().then((movie) => console.log(`person3: show ${movie}`));

console.log('person4: shows ticket');
console.log('person5: shows ticket');