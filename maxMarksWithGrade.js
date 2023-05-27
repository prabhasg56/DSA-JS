// Given an object of student grades and their marks in the mentioned below format, print the highest scored student for each grade along with the total
// V-Prateek-90
// VI-Albert-90
// VII-Sandhya-90

let student = [
	{
		grade: "V",
		students: [
			{name: "Nrupul", marks: [10, 20, 30]},
			{name: "Prateek", marks: [20, 30, 40]}
		]
	},
	{
		grade: "VI",
		students: [
			{name: "Aman", marks: [10, 20, 30]},
			{name: "Albert", marks: [20, 30, 40]}
		]
	},
	{
		grade: "VII",
		students: [
			{name: "Yogesh", marks: [10, 20, 30]},
			{name: "Sandhya", marks: [20, 30, 40]}
		]
	}
]

student.forEach((obj)=>{
    obj.students.forEach((stdObj)=>{
        acc +=cur.marks
        console.log(acc)
        //return cur
    },0)
})

console.log(res)


