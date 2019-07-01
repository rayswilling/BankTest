function Bank() {

    this._balance = 0
    this._transactions = []

    this.deposit = function(amount) {
        const movDate = new Date();
        this._balance += amount;

        date = (`${movDate.getDate()}/${movDate.getMonth() + 1}/${movDate.getFullYear()}`)
        credit = amount;
        balance = this._balance;
        record = `${date} || ${credit} || || ${balance}`

        this._transactions.push(record);

        return true
    };

    this.withdraw = function(amount) {
        const movDate = new Date();
        this._balance -= amount;
        
        date = (`${movDate.getDate()}/${movDate.getMonth() + 1}/${movDate.getFullYear()}`)
        debit = amount;
        balance = this._balance;
        record = `${date} || || ${debit} || ${balance}`

        this._transactions.push(record);

        return true
    };
};
