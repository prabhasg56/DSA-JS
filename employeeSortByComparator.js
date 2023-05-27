// Write a Program to create a Class Employee

// It contains two attributes -> Name, Salary

// Create 5 objects and initialize any random values for Name and Salary to it.

// Store all these objects in an Array and print the names of the employees sorted in Descending Order using Comparators (Use Salary to sort the elements).

class Employee {
    constructor(name, salary){
        this.name = name;
        this.salary = salary;
    }

}

let arrObj = [];
let empObj = new Employee("Aman", 34000);
arrObj.push(empObj);
empObj = new Employee("Raman", 30000);
arrObj.push(empObj);
empObj = new Employee("Deepak", 24000);
arrObj.push(empObj);
empObj = new Employee("Himanshu", 31000);
arrObj.push(empObj);
empObj = new Employee("Raj", 11000);
arrObj.push(empObj);

//Sorting employee using their salary
const comparator = (a,b) => {
    return b.salary - a.salary;
}

let sortEmpName = arrObj.sort(comparator);

//Printing Employee name in Descending order
sortEmpName.forEach(element => {
    console.log(element.name)
});