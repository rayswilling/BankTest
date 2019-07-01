function Bank () {
    this.Balance = 0;

    this.deposit = function(amount, date) {
        this.Balance += amount
    }

    this.withdraw = function(amount, date) {
        this.Balance -= amount
    }
};