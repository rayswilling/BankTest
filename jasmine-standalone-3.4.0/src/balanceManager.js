 function balanceManager() {

    this._balance = 0

    this.deposit = function(amount) {
      this._balance += amount;
      return 'Deposit successful!'  
    }

    this.withdraw = function(amount) {
        this._balance -= amount; 
        return 'Withdrawal successful!'
    }
 };

 module.exports = BalanceManager;