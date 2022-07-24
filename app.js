
//- Create a Student Array & Object Data Structure ( name, roll, age, class, gender, location, Admission fees ) 30.  now create a console data table with


const students = [

    {
        name: 'Raj',
        roll: 5,
        age: 20,
        class: 10,
        gender: 'male',
        location: 'dhaka',
        fees: 9000,
    },
    {
        name: 'Najmul',
        roll: 1,
        age: 19,
        class: 10,
        gender: 'male',
        location: 'Barishal',
        fees: 1800,
    },
    {
        name: 'Tisa',
        roll: 82,
        age: 15,
        class: 7,
        gender: 'female',
        location: 'pirojpur',
        fees: 7000,
    },
    {
        name: 'Taj',
        roll: 7,
        age: 8,
        class: 4,
        gender: 'male',
        location: 'dinajpur',
        fees: 9000,
    },

];

students.push(
    {
        name: 'Tanjila',
        roll: 17,
        age: 10,
        class: 5,
        gender: 'female',
        location: 'dhaka',
        fees: 800,
    },
    {
        name: 'Sathi',
        roll: 88,
        age: 6,
        class: 1,
        gender: 'female',
        location: 'mirpur',
        fees: 1600,
    },
)


students.map( (data) => {
    console.log(`
        Name : ${data.name}
        Roll : ${data.roll}
        Age : ${data.age}
        Class : ${data.class}
        gender : ${data.gender}
        Location : ${data.location}
        Fees : ${data.fees}
    `);
});




//- Total Admnission fees

let total = 0;

for ( data of students ) {

    console.log(`
        Name : ${data.name}  
        Roll : ${data.roll}  
        Fees : ${data.fees}  
    `)
    total += data.fees;
}
console.log(`
    -------------------------------
    Totall Fees : ${total} Taka.
`)
//----------------------------------------------------







//- Find All Female Students

for ( data of students ){

    if ( data.gender == 'female' ){
        console.log(`
        Name : ${data.name}
        Roll : ${data.roll}
        Age : ${data.age}
        Class : ${data.class}
        gender : ${data.gender}
        Location : ${data.location}
        Fees : ${data.fees}
    `);
    }
}
//----------------------------------------------------







//- Find class wise student result
for ( data of students ){

    if ( data.class == 10 ){
        console.log(`
        Name : ${data.name}
        Roll : ${data.roll}
        Age : ${data.age}
        Class : ${data.class}
        gender : ${data.gender}
        Location : ${data.location}
        Fees : ${data.fees}
    `);
    }
}
//----------------------------------------------------







//- Location wise student result
for ( data of students ){

    if ( data.location == 'dhaka' ){
        console.log(`
        Name : ${data.name}
        Roll : ${data.roll}
        Age : ${data.age}
        Class : ${data.class}
        gender : ${data.gender}
        Location : ${data.location}
        Fees : ${data.fees}
    `);
    }
}
//----------------------------------------------------







//- find student between 10 - 25 age
for ( data of students ){

    if ( data.age >= 10 && data.age > 25 ){
        console.log(`
        Name : ${data.name}
        Roll : ${data.roll}
        Age : ${data.age}
        Class : ${data.class}
        gender : ${data.gender}
        Location : ${data.location}
        Fees : ${data.fees}
    `);
    }
}