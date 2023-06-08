console.log('person1: shows ticket');
console.log('person2: shows ticket');

const promiseWifeBringingTickets = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('ticket');
    }, 3000)
})

const getPopcorn = promiseWifeBringingTickets.then((ticket) => {
    console.log('wife: i have the ticket');
    console.log('husband: we should go in');
    console.log('wife: no i am hungry');

    return new Promise((resolve, reject) => resolve(`${ticket} popcorn`));
})

const getButter = getPopcorn.then((ticket) => {
    console.log('husband: i got some popcorn');
    console.log('husband: we should go in');
    console.log('wife: I need butter on my popcorn');

    return new Promise((resolve, reject) => resolve(`${ticket} butter`));
})

const getColdDrinks = getButter.then((ticket) => {
    console.log('husband: i got the butter');
    console.log('husband: we should go in');
    console.log('wife: I need colddrinks');

    return new Promise((resolve, reject) => resolve(`${ticket} coldDrinks`));
})

getColdDrinks.then((ticket) => console.log(ticket));


console.log('person4: shows ticket');
console.log('person5: shows ticket');