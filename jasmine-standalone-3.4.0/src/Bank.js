function Bank() {

    this.balance = 0.00
    this.transactions = []

    this.deposit = function(amount) {
        const movDate = new Date();
        this.balance += amount;

        this.transactions.push({
            date: (`${movDate.getDate()}/${movDate.getMonth() + 1}/${movDate.getFullYear()}`),
            credit: amount,
            debit: "",
            balance: this.balance
        });

        return true
    };

    this.withdraw = function(amount) {
        const movDate = new Date();
        this.balance -= amount;

        this.transactions.push({
            date: (`${movDate.getDate()}/${movDate.getMonth() + 1}/${movDate.getFullYear()}`),
            credit: "",
            debit: amount,
            balance: this.balance
        });

        return true
    };
};
