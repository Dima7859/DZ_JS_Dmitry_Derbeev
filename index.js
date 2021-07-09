//!!!!!!!!!!!!exercise1!!!!!!!!!!!!!!


const str = '1999';
const regexp = /(1|2){1}(0|9){1}[0-9]{2}/g;
console.log(regexp.test(str));


//!!!!!!!!!!!!exercise2!!!!!!!!!!!!!!


const str2 = '00:00';
const regexp2 = /[0-2]{1}[0-3]{1}\:[0-5]{1}[0-9]{1}/g;
console.log(regexp2.test(str2));


//!!!!!!!!!!!!exercise3!!!!!!!!!!!!!!

const str3 = 'aa kdshgfds wertyuiop ffghjkl ljmff ff kdshgfds ff kdshhgfds';
const regexp3 = /\w*(\w)\1\w*\s*/g;
console.log(str3.replace(regexp3, ''));


//!!!!!!!!!!!!exercise4!!!!!!!!!!!!!!


const str4 = 'aa kdshgfds wertyuiop fffghjkl ljmff ff kdshgfds ff';
const regexp4 = /(\b\S+\b)(?=.*\1)/g;
console.log(str4.replace(regexp4, ''));
