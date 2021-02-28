// function doubleIt(num) {
//     return num*2;
// }

// const doubleIt = function myFun(num) {
//     return num *2;
// }

const doubleIt = num => num * 2; //---------> ES-6 method;
const add = (x,y) => x*y;   //---> ES-6 method;
const give5 = () =>5;      // ----> ES-5 method;
const doMath = (x,y) => {
    const sum = x+y;
    const diff = x-y;
    const result = sum * diff;
    return result;
}


const result = doubleIt(21);
const result2 = add(3,5);
const result3 = give5();
const result4 = doMath(8,5)
console.log(result3);