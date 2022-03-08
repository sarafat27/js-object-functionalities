const rakib = {
    name: 'rakib',
    id: 3739338,
    balance: 9500,
    treatDe: function (cost, tips, vat) {
        this.balance = this.balance - cost - tips - vat;
        console.log(this)
        return this.balance;
    }
}

const shoaib = {
    name: 'shoaib',
    id: 5643939,
    balance: 12000,
}
const atik = {
    name: 'atik',
    id: 57800,
    balance: 8000,
}
//using call for calling method
rakib.treatDe.call(shoaib, 700, 80, 70);
rakib.treatDe.call(shoaib, 200, 30, 20);
rakib.treatDe.call(atik, 600, 70, 60);

//using apply for using method
rakib.treatDe.apply(shoaib, [700, 80, 70]);
rakib.treatDe.apply(atik, [600, 70, 60])