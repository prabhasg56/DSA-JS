////Use of this keyword
// const student = {
//     fName: 'prabhas',
//     lName: 'kumar',
//     age: 25,
//     getEmail: ()=>{
//         return `${this.fName}.${this.lName}@gmail.com`
//     }
// }
//console.log(student.getEmail()); // undefined.undefined@gmail.com

// const student = {
//     fName: 'prabhas',
//     lName: 'kumar',
//     age: 25,
//     getEmail: function(){
//         return `${this.fName}.${this.lName}@gmail.com`
//     }
// }

// console.log(student.getEmail()); // prabhas.kumar@gmail.com

// const student = {
//     fName: 'prabhas',
//     lName: 'kumar',
//     age: 25,
//     getEmail: getEmail(this.fName, this.lName)

// }

// const teacher = {
//     fName: 'Ranjit',
//     lName: 'kumar',
//     age: 35,
//     getEmail: getEmail(this.fName, this.lName)
// }


// function getEmail(fName, lName){
//     return `${fName}.${lName}@gmail.com`
// }

// console.log(student.getEmail);//undefined.undefined@gmail.com


//// Here Call, apply, and bind come to the picture

const student = {
    fName: 'prabhas',
    lName: 'kumar',
    age: 25,

}

const teacher = {
    fName: 'Ranjit',
    lName: 'kumar',
    age: 35,
}

function getEmail(){
    return `${this.fName}.${this.lName}@gmail.com`
}

function chooseSubject(sub1, sub2){
    console.log(sub1, sub2);
}

//Call:- it take any type of params 

// console.log(getEmail.call(teacher));
// console.log(chooseSubject.call(student, 'math', 'java'));

//Output:-
// Ranjit.kumar@gmail.com
// math java
// undefined


//Apply:- it take only array type of params 

// console.log(chooseSubject.apply(student, ['math', 'java']));
//Output:-
// math java
// undefined

//bind: return function, it does not call autometically, whenever we want then call that function

const getEmailTeacher = getEmail.bind(teacher);

console.log(getEmailTeacher())