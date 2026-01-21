export default class BankAccount {
    constructor (accountNumber, accountHolder, balance) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    deposit() {
        this.balance += 5
        console.log(`$5 has been added to your account! Your new balance is $${this.balance}`)
    }
    withdraw() {
        this.balance -= 5
        console.log(`You have withrawn $5 from your bank account! Your new balance is $${this.balance}`)
    }
    checkBalance() {
        console.log(`Your balance is: $${this.balance}`)
    }
}

