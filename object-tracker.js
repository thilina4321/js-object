//acount details
const myAccount = {
  name: "thilina",
  expense: 0,
  income: 0,
};

//account summery
const accountSummery = function (account) {
  return `Account for ${account.name} has \$ ${account.income - account.expense}.  \$ ${account.income} in income and \$ ${account.expense} in expenses
    `;
};

// Add income to the account
const addIncome = function (account, amount) {
  account.income += amount;
};

// Add expenses to the account
const addExpense = function (account, amount){
    account.expense += amount
}

// Reset the account
const resetAccount = function(account){
    account.income = 0
    account.expense = 0
}

// exxcute the functions
addIncome(myAccount, 3000)
addExpense(myAccount, 2000)
console.log(accountSummery(myAccount))
resetAccount(myAccount)
console.log(myAccount)