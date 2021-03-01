const doMultiply = (x,y) =>{
    const sum = x+y;
    const differ = x-y;
    const result = sum * differ;
    return result;
};

const multiply = doMultiply(10,8);
console.log(multiply);