//using object literal
const student = { name: 'Sabbir hasan', roll: 189282 };

const player = new Object();
// console.log(player);
//by null or inheritence
// const doctor = Object.create(null);
const doctor = Object.create(student);
// console.log(doctor.roll);

//creating object from class
class Football {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const footballer = new Football('Ronaldo', 36);
// console.log(footballer);
//creating object from function
function Cricket(name) {
    this.name = name;
}
const crick = new Cricket('tamim');
console.log(crick)