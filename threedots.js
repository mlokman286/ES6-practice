const ages = [12, 14, 16, 13, 17];
const ages2 = [15, 16, 12];
const ages3 = [25, 36, 22, 29];
const allAges = ages.concat(ages2).concat(5).concat(ages3);          //old method to sum of many arrys;
const allAges2 = [...ages, ...ages2,5, ...ages3]                     // New method -->ES-6;
// console.log(allAges2);
const business = 650;
const minister = 450;
const shochib = 250;
const takaPoisa = [650, 450, 250, 350, 750, 800];
// const maximum = Math.max(business,minister,shochib)            //new and easier method;
const maximum = Math.max(...takaPoisa)                             // ES-6 method
console.log(maximum);