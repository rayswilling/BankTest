balanceManager = balanceManager.deposit()

function Bank() {

    this._balance = 0
    this._transactions = ["date || credit || debit || balance"]

    this.deposit = function(amount) {
        credit = amount;
        this._balance += amount;  
        this.addDepositToTransactions(amount);
    };

    this.withdraw = function(amount) {
        debit = amount;
        this._balance -= amount;
        this.addWithdrawToTransactions(amount);
    };

    this.addDepositToTransactions = function(amount) {
        const movDate = new Date();
        date = (`${movDate.getDate()}/${movDate.getMonth() + 1}/${movDate.getFullYear()}`)
        balance = this._balance;
        credit == amount
        record = `${date} || ${credit.toFixed(2)} || || ${balance.toFixed(2)}`
        this._transactions.splice(1, 0, record); 
    };

    this.addWithdrawToTransactions = function(amount) {
        const movDate = new Date();
        date = (`${movDate.getDate()}/${movDate.getMonth() + 1}/${movDate.getFullYear()}`)
        balance = this._balance;
        debit == amount
        record = `${date} || || ${debit.toFixed(2)} || ${balance.toFixed(2)}`
    }

    this.bankStatement = function() {
        this._transactions.forEach(function(element) {
            console.log(element)
        });
    };
};
