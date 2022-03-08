const mobile = { brand: 'xiaomi', price: 15000, color: 'black', isFresh: true };
//using for in for object
for (const prop in mobile) {
    // console.log(prop, ':', mobile[prop])
}
//using for of for object by converting the keys into array
const keys = Object.keys(mobile);
for (const prop of keys) {
    // console.log(prop, mobile[prop]);
}
//using for of for object by converting the property and value into array
const entries = Object.entries(mobile);
// const [key,value]=['color','black']
for (const [key, value] of Object.entries(mobile)) {
    console.log(key, value);
}