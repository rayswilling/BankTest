describe("A bank", function () {

    beforeEach(function() {
        bank = new Bank(); 
    });

    it ("has a starting bank balance of 0", function() {
        expect(bank._balance).toEqual(0);
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

            expect(bank._transactions).toEqual([`${date} || 1000 || || 1000`]);
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

            expect(bank._transactions).toEqual([`${date} || || 1000 || -1000`]);
        });
    });

    // describe("printStatement", function(){

    //     it("should print a statement list out beginning with date || credit || debit || balance as it's header", function() {
    //         expect(bank.printStatement).toContain("date || credit || debit || balance")
    //     })
    // });
});
