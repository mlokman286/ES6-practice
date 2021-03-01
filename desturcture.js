const person = {name:'Jack William', age: 17, jobs:'facebook', address:'Khochukhet', gfName: 'Ema Watson', phone:017171122, friends:['Tom Curse', 'Tom HemsWorth', 'Tom holland']};


const {phone} = person

const complexObject = {
    name: 'abc',
    info: {
        address:'KolaBagan',
        Leader:'Tiger Leader'
    }
}
const {Leader} = complexObject.info;
console.log(Leader);
// const gfName = person.gfName;
// const phone = person.phone;

// console.log(gfName,phone,address);
// console.log(gfName,phone,salary,address);

const friends = ['Joynal Abedin Khan', 'Nadim Sheikh', 'Sayem Sheikh', 'Sohel Rana', 'Sujon Sarkar'];
const [first, nextFriend,...restFriend] = friends;
console.log(...restFriend);