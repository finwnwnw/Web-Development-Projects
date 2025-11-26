import BankAccount from "./bankAccount.js"

const account1 = new BankAccount(1020, "John Smith", 58)
const account2 = new BankAccount(5372, "Steve Smith", 75)
const account3 = new BankAccount(6374, "Dave Smith", 29)

// account1.deposit()
// console.log(account1.balance)
// account2.withdraw()
// console.log(account2.balance)
// account3.checkBalance()

const displayMessage = document.getElementById('displayMessage')

const balanceEl = document.getElementById('balance')
balanceEl.textContent = account1.balance

document.getElementById('depositBtn').addEventListener('click', () => {
    account1.deposit()
    balanceEl.textContent = account1.balance
    displayMessage.textContent = "You have just deposited $5 to your account!"
})

document.getElementById('withdrawBtn').addEventListener('click', () => {
    if (account1.balance - 5 >= 0) {
        account1.withdraw()
        balanceEl.textContent = account1.balance
        displayMessage.textContent = "You have just withdrawn $5 from your account!"
    } else {
        return
    }
})




