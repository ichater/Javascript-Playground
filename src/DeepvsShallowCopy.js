// let person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     address: {
//         street: 'North 1st street',
//         city: 'San Jose',
//         state: 'CA',
//         country: 'USA'
//     }
// };


// let copiedPerson = Object.assign({}, person);

// copiedPerson.firstName = 'Jane'; // disconnected

// copiedPerson.address.street = 'Amphitheatre Parkway'; // connected
// copiedPerson.address.city = 'Mountain View'; // connected

// console.log(copiedPerson);


// // The reason is that the address is reference value 
// // while the first name is a primitive value. Both 
// // person and copiedPerson references different 
// // objects but these objects reference the same address objects.


// let person2 = {
//     firstName: 'John',
//     lastName: 'Doe',
//     address: {
//         street: 'North 1st street',
//         city: 'San Jose',
//         state: 'CA',
//         country: 'USA'
//     }
// };


// let copiedPerson2 = JSON.parse(JSON.stringify(person2));

// copiedPerson2.firstName = 'Jane'; // disconnected

// copiedPerson2.address.street = 'Amphitheatre Parkway';
// copiedPerson2.address.city = 'Mountain View';

// console.log(person2);


let person = {
    firstName: 'John',
    lastName: 'Doe',
    address: {
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    }
};
let copiedPerson = person;

copiedPerson.firstName = 'Jane';
copiedPerson.address.state = 'VA';
console.log(person); 