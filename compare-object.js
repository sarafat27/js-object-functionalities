const first = { a: 1 };
const second = { a: 1 };
const third = first;
if (first === third) {
    // console.log('same');
}
else {
    // console.log('different');
}
//they are same because of pass by reference
// comparing normal system
if (JSON.stringify(first) === JSON.stringify(second)) {
    // console.log('same');
}
//another system
function compareObjects(obj1, obj2) {
    if (Object.entries(obj1).length !== Object.entries(obj2).length) {
        return false;
    }
    for (const prop in obj1) {
        if (obj1[prop] !== obj2[prop]) {
            return false;
        }
    }
    return true;
}
const fourth = { a: 1, b: 2 }
const fifth = { b: 2, a: 1 }
const isEqual = compareObjects(fourth, fifth);
console.log(isEqual);