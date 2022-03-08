const rakib = {
    name: 'rakib',
    id: 3739338,
    balance: 9500,
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
const atik = {
    name: 'atik',
    id: 57800,
    balance: 8000,
}
//using bind for using different objects method
// rakib.treatDe(100);
const shoaibTreatDe = rakib.treatDe.bind(shoaib);
shoaibTreatDe(500);
rakib.treatDe(200);
const atikTreatDe = rakib.treatDe.bind(atik);
atikTreatDe(250);