//________________exercise1__________________


const promFunXz = (sec) => {
    const randNumb = Math.floor(Math.random() * 11);
    console.log(randNumb);

    const promRand = new Promise( (res, rej)=> {
        setTimeout(() => {
            if (randNumb % 2 == 0) {
                res(randNumb)
            } else rej()
        },sec);
    })


    promRand
        .then( res => console.log(`рандомное число ${res}`))
        .catch( () => alert('нечётное'))


};

promFunXz(1000);


//________________exercise2__________________


// const startProm = () => new Promise( res => {
//         console.log('startProm');
//         res()
// });

// const oneProm = () => new Promise( res => {
//     setTimeout(() => {
//         console.log('oneProm');
//         res()
//     },5000);
// });

// const twoProm = () => new Promise( res => {
//     setTimeout(() => {
//         console.log('twoProm');
//         res()
//     },2000);
// });

// const threeProm = () => new Promise( res => {
//     setTimeout(() => {
//         console.log('threeProm');
//         res()
//     },3000);
// });


// startProm()
//     .then( () => oneProm().then( () => twoProm().then( () => threeProm().then( () => console.log('END')))));


//________________exercise3__________________


// const arrProm = [];

// for (let i = 0; i < 4; i++) {
//     let sec = Math.floor(Math.random() * 11);
//     sec = sec * 1000
//     const thePromOne = new Promise( res => {
//         setTimeout(() => {
//             console.log(`thePromOne ${i}`);
//             res()
//         },sec);
//     });

//     const thePromoneTwo = new Promise( res => {
//         setTimeout(() => {
//             console.log(`thePromoneTwo ${i}`);
//             res()
//         },sec);
//     });

//     arrProm.push(thePromOne,thePromoneTwo);

// };

//  Promise.all(arrProm)
//  .then( () => console.log('complete Promise all'));

// Promise.race(arrProm)
// .then( () => console.log('complete Promise race'));
