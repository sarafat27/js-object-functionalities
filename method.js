const student = {
    name: 'rakib',
    id: 3739338,
    balance: 9500,
    isTalent: true,
    subjects: ['math', 'english', 'physics', 'chemistry'],
    friend: {
        name: 'habib',
        id: 35637,
        major: 'cse'
    },
    giveExam: function () {
        console.log(this.name, 'giving exam')
    },
    treatDe: function (cost, tips) {
        this.balance = this.balance - cost - tips;
        return this.balance;
    }
}
student.giveExam();
const remaining = student.treatDe(1300, 50);
const remaining2 = student.treatDe(500, 30);
console.log(remaining2);