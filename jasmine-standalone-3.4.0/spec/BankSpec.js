describe("A bank", function () {
    beforeEach(function() {
        bank = new Bank(); 
    });

    it ("has a starting bank balance of 0", function() {
        expect(bank.Balance).toEqual(0);
    });
   
    describe("Deposit", function() {
        
        it ("should increase bank balance by R1000", function() {
            bank.deposit(1000)
            expect(bank.Balance).toEqual(1000);
        });
        
    });

    describe("Withdraw", function() {
        
        it ("should decrease bank balance by R500", function() {
            bank.deposit(1000)
            bank.withdraw(500)
            expect(bank.Balance).toEqual(500);
        });

    });
});




// describe("A bank", function() { 
    
//     beforeEach(function() {
//         airport = new Airport(); 
//         plane = jasmine.createSpy('plane'); 
//         spyOn(airport, 'isStormy').and.returnValue(false);
//     }); 
    
//     it ("is an airport with an empty array", function() {
//         expect(airport.planes).toEqual([]); 
//     }); 
    
//     it ("adds a plane to its array (land)", function() {
//         airport.land(plane);
//         expect(airport.planes).toEqual([plane]);
//     });

//     it ("deletes a plane from its array (take-off)", function() {
//         airport.land(plane);
//         airport.takeOff(plane);
//         expect(airport.planes).toEqual([]); 
//     });
// });