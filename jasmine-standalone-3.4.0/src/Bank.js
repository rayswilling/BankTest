function Bank() {

    this._balance = 0
    this._transactions = ["date || credit || debit || balance"]

    this.deposit = function(amount) {
        const movDate = new Date();
        this._balance += amount;

        date = (`${movDate.getDate()}/${movDate.getMonth() + 1}/${movDate.getFullYear()}`)
        credit = amount;
        balance = this._balance;
        record = `${date} || ${credit.toFixed(2)} || || ${balance.toFixed(2)}`

        this._transactions.splice(1, 0, record);

        return true
    };

    this.withdraw = function(amount) {
        const movDate = new Date();
        this._balance -= amount;
        
        date = (`${movDate.getDate()}/${movDate.getMonth() + 1}/${movDate.getFullYear()}`)
        debit = amount;
        balance = this._balance;
        record = `${date} || || ${debit.toFixed(2)} || ${balance.toFixed(2)}`

        this._transactions.splice(1,0, record);

        return true
    };

    this.bankStatement = function() {
        this._transactions.forEach(function(element) {
            console.log(element)
        });
    };
};
