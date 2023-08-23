class Human {
    //destructuring the array

    constructor(name,age){
        this.age = age;
        this.name = name;
    }
}

class Person extends Human{
    constructor(...age){
        super("Aman",age);
    }
    printAge() {
        console.log(this.age);
        console.log(this.name)
    }
}

const PerAge = [23,27,40,30];

const prsnObj = new Person(...PerAge, 69, 90);
prsnObj.printAge();

//destructuring the properties of object
const {age, name} = prsnObj;
console.log(age);