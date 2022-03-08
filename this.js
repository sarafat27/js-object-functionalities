// console.log(this)
const rakib = {
    name: 'rakib',
    id: 3739338,
    balance: 9500,
    treatDeArrow: () => {
        console.log(this)
    },
    treatDeInside: function () {
        const myArrow = () => console.log(this);
        myArrow();
    },
    treatDe: function (cost) {
        this.balance = this.balance - cost;
        console.log(this)
        return this.balance;
    }
}
const shoaib = {
    name: 'shoaib',
    id: 5643939,
    balance: 12000,
}
function add() {
    console.log(this);
}