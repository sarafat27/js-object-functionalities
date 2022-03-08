const mobile = { brand: 'xiaomi', price: 15000, color: 'black', isFresh: true };
//getting property name
const keys = Object.keys(mobile);
// console.log(keys);
//getting value name
const values = Object.values(mobile);
// console.log(values)
//getting keys and values together
const pairs = Object.entries(mobile);
// console.log(pairs)
mobile.size = '5 inch';
//seal the object
Object.seal(mobile)
Object.freeze(mobile)
mobile.price = 20000;
//delete one property with value
delete mobile.color;
console.log(mobile)