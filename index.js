//_____________#1___________


// const str = 'КaКаЖдЫй ОхОтНиК';

// function revReg(var1) {
//     const arr = var1.split(' ');
//     const finishArr = [];

//     arr.map( item => {
//         const arrInterim = item.split('');
//         const arrRam = [];

//         arrInterim.map( item => {
//             if (item === item.toUpperCase()) {
//                 item = item.toLowerCase();
//                 arrRam.push(item);
//             } else {
//                 item = item.toUpperCase();
//                 arrRam.push(item);
//             };
//         });

//         item = arrRam.join('');
//         finishArr.push(item);
//     })

//     console.log(finishArr);
    
// };

// revReg(str);


//_____________#2___________


// let arr = [1, 2, 3, 2, 'fga', 'eEe', 'eee', 'RRR', 'rrr', true, true, 1];

// function removeDuplicates(arr) {
//     const arr1 = [];
//     const newArr = [];

//     arr.map( item => {
//         if ( typeof item === "string" ) {
//         arr1.push(item.toLowerCase());
//         } else arr1.push(item);
//     });

//     arr1.forEach( item => {
//         if (!(newArr.indexOf(item) != -1)) {
//             newArr.push(item);
//         };
//     });

//     console.log(newArr);

// };

// removeDuplicates(arr);


//_____________#3___________


// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [4, 5, 6];

// const arr3 = arr1.map( (item, idx) => {
//     if (idx > arr2.length -1) {
//         return item;
//     } else {
//         return item + arr2[idx];
//     };
// });

// console.log(arr3);


//_____________#4___________


// let arr = [1, 2, 3, 2, 'fga', 'eee', 'eEe', true, true, 1, 1, 'DDD', 'ddd', 1, 1, 1];

// function countIdentic(arr) {
//     const arr1 = [];
//     let counter = 0;
    
//     arr.map( item => {
//         if ( typeof item === "string" ) {
//         arr1.push(item.toLowerCase());
//         } else arr1.push(item);
//     });



//     const newArr = arr1.reduce( (acc, item) => {
//         if (acc.includes(item)) {
//             counter++;
//             return acc;
//         } else {
//             return [...acc, item];
//         };
//     }, []);

//     // Второй способ через фильтр 

//     // const newArr = arr1.filter((item ,idx) => {
//     //     if (arr1.indexOf(item) === idx) {
//     //         return arr.indexOf(item) === idx
//     //     } else counter++;
//     // });

//     console.log(counter);

// };

// countIdentic(arr);


//_____________#5___________


// let arr1 = [1, 2, 3, 2, 'fga', 'eee', 'eEe', 'RRR', 'rrr', true, true, 1];
// let arr2 = [false, undefined, 0, 4, 'eEe'];

// function union(var1, var2) {
//     const arrVrem = var1.concat(var2);
//     let unique = [];
//     let yes = 0;
//     const arrAll = [];

//     arrVrem.map( item => {
//         if ( typeof item === "string" ) {
//         arrAll.push(item.toLowerCase());
//         } else arrAll.push(item);
//     });

//     arrAll.forEach( item => {

//         arrAll.forEach(element => {
//             if (item === element) {
//                 yes++;
//             };
//         });

//         if (yes === 1) {
//             unique.push(item);
//         };
//         yes = 0;
//     });

//     console.log(unique);
// };

// union(arr1, arr2);


//_____________#6___________
//________Попытка сделать то что было в чате __________


// let promtarr = prompt('enter...');

// let a = 'abcd';

// function arrString(var1) {
//     let arr = var1.split('');
//     const arr2 = [];
//     for (let j = 0; j < arr.length; j++) {
//         let element = arr;
        
//         for (let i = 0; i < element.length; i++) {
//             if (i !== element.length - 1) {
//             let tmp = element[i];
//             element[i] = element[i + 1];
//             element[i + 1] = tmp;
//             console.log(element);
//             arr2.push(element.join(''));
//             }
//         }

//     }
//     console.log(arr2);

// }

// arrString(a);

