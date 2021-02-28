const firstName = 'Justin';
const lastName = 'TimberLake';
const fullName = firstName +' '+ lastName + ' '+ 'is a good boy'; // old method
const fullName2 = `${firstName} ${20+30+50}% is a good boy`         // new method --> ES6

const multiline = 'Hi , I am Lokman \n'         // Old method;
 + 'I am new here in javaScript\n'
 + 'I need to learn javaScript more.'

 // new method ES-6;below.
 const multiline2 = `Hi , I am lokman.          
 I am new here . 
 I am learning so much new thing 
 I am actually enjoying this `
console.log(multiline2);