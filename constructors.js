class bankAccount {
    constructor (accountHolder, accountNumber, accountBalance=0)
        {
            this.accountHolder = accountHolder;
            this.accountNumber = accountNumber;
            this.accountBalance = accountBalance;
        }
    deposit (Amount) {
        if (Amount > 0) {
            this.accountBalance += Amount;
        }
        else {
            console.log("Invalid Amount");
        }
    }
    withdraw (Cash) {
        if (Cash > this.accountBalance) {
            console.log(`You are Broke`);
        }
        else {
            this.accountBalance -= Cash;
            console.log(`Your Remaining Balance is ${this.accountBalance}`);
        }
    }
    checkBalance () {
        console.log(`${patelAccount.accountHolder} Your Account Balance is ${this.accountBalance}`);
    }
}

const patelAccount = new bankAccount("Patel", "0123456789");
const idrisAccount = new bankAccount("Idris", "0123456789");


patelAccount.deposit(100000000000);
console.log(`Account Holder: ${patelAccount.accountHolder}`);
console.log(`Account Number: ${patelAccount.accountNumber}`);
patelAccount.checkBalance();

idrisAccount.deposit(200000000000);
console.log(`Account Holder: ${idrisAccount.accountHolder}`);
console.log(`Account Number: ${idrisAccount.accountNumber}`);
idrisAccount.checkBalance();