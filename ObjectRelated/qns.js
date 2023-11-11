const data = {
    person_info_1: {
        profile: {
            fullName: "Javier Hernandez",
            nationality: {
                country: "Mexico",
            },
            tel: 904902394
        },
        current_address: {
            current_city: {
                value: "Bangalore",
                zip: '399993'
            }
        }
    },

    person_info_2: {
        profile: {
            fullName: "Emily Spade",
            nationality: {
                country: "Norway",
            },
            tel: 309320239
        },
        current_address: {
            current_city: {
                value: "Oslo",
                zip: '239292'
            }
        }
    },
    person_info_3: {
        profile: {
            fullName: "John Cigan",
            nationality: {
                country: "Turkey",
            },
            tel: 932483988
        },
        current_address: {
            current_city: {
                value: "Istanbul",
                zip: '932099'
            }
        }
    },
    person_info_4: {
        profile: {
            fullName: "Marsh Hobbs",
            nationality: {
                country: "USA",
            },
            tel: 32043988
        },
        current_address: {
            current_city: {
                value: "Istanbul",
                zip: '932099'
            }
        }
    }
}


/*
    Q1. Get all persons whose current city  is Istanbul .
        A. Get result in objects form 
        {
            person_info: {
                // that person info
            }
        }

        B. Get result in array Form
        [{// Info of the person }, { // Info of the person}]

        use Both filter and reduce.

    Q2. Copy data object properly without leaving any reference.


    Q3. Use map to get me all nationality and current location for each person.
        use person's name as key to store the person's nationality and current_address.
*/
// Q1. Get all persons whose current city  is Istanbul .
// A. Get result in objects form 
// {
//     person_info: {
//         // that person info
//     }
// }

// B. Get result in array Form
// [{// Info of the person }, { // Info of the person}]

// use Both filter and reduce.

// let res = []; // for object like stucture just assign in res = {}
// for(let key in data){
//     let temp = data[key];
//     if(temp.current_address && temp.current_address.current_city && temp.current_address.current_city.value == "Istanbul"){
//         res.push({"person_info":temp});
//     }
// }
// res.forEach((item)=>{
//     console.log(item.person_info)

// })

// M2
// use Both filter and reduce.

let result = Object.entries(data)
                .filter(([key, val])=> val.current_address.current_city.value == "Istanbul")
                .reduce((acc,[key, val])=> {
                    acc.push({[key]:val});
                    return acc;
                },[]);

// console.log(result)


// Q2. Copy data object properly without leaving any reference.
let res = JSON.stringify(data);
console.log(res)


const school = {
    "engineering": {
      "students": 324,
      "dep_id": 3,
      "faculties": 4
    },
    "medical": {
      "students": 499,
      "dep_id": 2,
      "faculties": 6
    },
    "pure-science": {
      "students": 133,
      "dep_id": 1,
      "faculties": 2
    },
    "linguistics": {
      "students": 183,
      "dep_id": 4,
      "faculties": 3
    },
    "philosophy": {
      "students": 73,
      "dep_id": 5,
      "faculties": 2
    }
  }
  /*
      1. Group the data in terms of deparment id.
      2. Filter data with students greater than 200.
      3. Add a new property (labs-required) to each object . Set value as true for engineering medical and purescience ..and false for lingustics and philosophy
      */

// const newArr = new Map();
// // const newArr1 = {};
// const schoolArr = Object.keys(school);

// 1. Group the data in terms of deparment id.

// for(let key of schoolArr){
//     // newArr1[school[key].dep_id] = {"department":key, "students": school[key].students, "faculties": school[key].faculties };
//     newArr.set(school[key].dep_id,{"department":key, "students": school[key].students, "faculties": school[key].faculties }) 
// }

// 2. Filter data with students greater than 200.

// for(let key of schoolArr){
//     if(school[key].students>200)
//     newArr.set(school[key].dep_id,{"department":key, "students": school[key].students, "faculties": school[key].faculties }) 
// }

// 3. Add a new property (labs-required) to each object . Set value as true for engineering medical and purescience ..and false for lingustics and philosophy

// for(let key of schoolArr){
//     if(key === "engineering" || key === "medical" || key === "pure-science")
//     newArr.set(school[key].dep_id,{"labs-required":true,"department":key, "students": school[key].students, "faculties": school[key].faculties });

//     if(key === "linguistics" || key === "philosophy")
//     newArr.set(school[key].dep_id,{"labs-required":false,"department":key, "students": school[key].students, "faculties": school[key].faculties })
// }

// newArr.forEach((item)=>{
//     console.log(item)
// })

// console.log(newArr)