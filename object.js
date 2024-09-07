const bankAccount = {
    accountHolder : "Isma",
    accountBalance : 0,
    accountNumber : 1234567890,
    deposit : function (Amount) {
        if (Amount > 0) {
            this.accountBalance += Amount;
        }
        else {
            console.log("Invalid Amount");
        }
    },
    checkBalance : function () {
        console.log(`Your Account Balance is ${this.accountBalance}`);
    },
    withdraw : function (Cash) {
        if (Cash > this.accountBalance) {
            console.log(`You are Broke`);
        }
        else {
            this.accountBalance -= Cash;
            console.log(`Your Remaining Balance is ${this.accountBalance}`);
        }
    }
}

console.log(bankAccount.accountHolder);
console.log(bankAccount.accountNumber);
bankAccount.deposit(50000000000)
bankAccount.checkBalance();
bankAccount.withdraw(40000000000);