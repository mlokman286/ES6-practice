function add(num1, num2 = 20){   // ES-6 /new method.
    // if(num2 == undefined){
    //     num2 = 20;         ------------->Old Method
    // }
    // num = num2 || 20;      -------------> second old method
    return num1 + num2; 
}
const total = add(34,25);   // if i forget to use second parameter than we need above backup method.
console.log(total);