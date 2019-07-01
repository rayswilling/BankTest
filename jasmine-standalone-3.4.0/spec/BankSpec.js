describe("A bank", function () {

    beforeEach(function() {
        bank = new Bank(); 
    });

    it ("has a starting bank balance of 0", function() {
        expect(bank.balance).toEqual(0);
    });
   
    describe("Deposit", function() {
        
        it ("should increase bank balance by R1000", function() {
            bank.deposit(1000)
            expect(bank.balance).toEqual(1000);
        });

        it ("should reflect a the transaction in the transaction list", function () {
            bank.deposit(1000)
            const movDate = new Date();

            expect(bank.transactions).toEqual([
                {
                    date: (`${movDate.getDate()}/${movDate.getMonth() + 1}/${movDate.getFullYear()}`),
                    credit: 1000, 
                    debit: "",
                    balance: 1000
                },
            ])
        })
    });

    describe("Withdraw", function() {
        
        it ("should decrease bank balance by R500", function() {
            bank.deposit(1000)
            bank.withdraw(500)
            expect(bank.balance).toEqual(500);
        });
    });
});

// describe('Transactions have a date attached', function() {
//     var bank 
    
//     var trnsAct1 = {amount: 250, date: new Date("2010-08-19"), type: 'credit', balance: 500}

//     beforeEach(function () {
//         bank = new Bank()
//     })

//     it('A transaction should have a date attached for statement', function () {
//         bank.transactions.push(trnsAct1)
//         expect(bank.statementCreate()).toContain("19/08/2010")
//     })
// })
