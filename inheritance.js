class Parent{
    constructor() {
        this.parentName = 'Schwerznegger';
    }
    getFullName(){
        return this.name +' '+ this.parentName;
    }
}
class Child extends Parent{
    constructor(name) {
        super();
        this.name = name;
    }
}
const baby = new Child("Arnold");
const baby2 = new Child('Tom');
console.log(baby.getFullName());
console.log(baby2.getFullName());