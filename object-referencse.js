let myAccount = {
    name:'thilina',
    income:0,
    amount:0
}


let otherAccount = myAccount
myAccount.game = 'cricket'

myAccount = {}


console.log(myAccount);
console.log(otherAccount);