describe("A bank", function () {

    beforeEach(function() {
        bank = new Bank(); 
    });

    it ("has a starting bank balance of 0.00", function() {
        expect(bank._balance).toEqual(0.00);
    });

    it ("has two decimal places", function() {
        expect(bank._balance).toEqual(0.00);
    });
   
    describe("Deposit", function() {
        
        it ("should increase bank balance by R1000", function() {
            bank.deposit(1000)
            expect(bank._balance).toEqual(1000);
        });

        it ("should reflect the transaction in the transaction list", function () {
            bank.deposit(1000)

            const movDate = new Date();
            date = (`${movDate.getDate()}/${movDate.getMonth() + 1}/${movDate.getFullYear()}`)

            expect(bank._transactions).toEqual(["date || credit || debit || balance", `${date} || 1000 || || 1000`]);
        });
    });

    describe("Withdraw", function() {
        
        it ("should decrease bank balance by R500", function() {
            bank.deposit(1000)
            bank.withdraw(500)
            expect(bank._balance).toEqual(500);
        });

        it ("should reflect the transaction in the transaction list", function () {
            bank.withdraw(1000)

            const movDate = new Date();
            date = (`${movDate.getDate()}/${movDate.getMonth() + 1}/${movDate.getFullYear()}`)

            expect(bank._transactions).toEqual(["date || credit || debit || balance", `${date} || || 1000 || -1000`]);
        });
    });

    describe("Transaction list", function(){

        it("'has || credit || debit || balance' is it's header", function() {
            expect((bank._transactions).indexOf("date || credit || debit || balance")).toEqual(0)
        })
        
        it("new transactions added from index 1", function() {
            bank.deposit(1000)

            expect((bank._transactions).indexOf(`${date} || 1000 || || 1000`)).toEqual(1)
        })
    });

    // describe("bankStatement", function() {
        
    //     it ("should print a bank statement", function() {
    //         bank.deposit(1000)
    //         expect(bank._balance).toEqual(["date || credit || debit || balance", `${date} || 1000 || || 1000`]);
    //     });
    // });
});
