### 

## My Approach

### Pre-code: 

I planned out this app using diagrams. 
I planned out how I was going to work through this app by making use of pomodoro's and planning each 25 minute session out on a piece of paper. 
I setup the project with ESLint as my inter. 

Regarding the development process, I aimed to stick to: 
* Unit Tests
* Implementation 
* Console testing
* Refactoring 

### Development: 
Each session had a few goals written down, which reminded me of where and what I was doing if I got distracted. 

1. I started by initialising the Bank class, making sure the infrastructure of depositing and withdrawing was correctly setup. I always made sure I was TDD'ing at all times. 

2. I then created a _transactions array that would initialise with each instance of a bank. I moved onto editting the deposit and withdraw methods so that each transaction would be added to the _transactions list with its date, credit or debit amount and the resulting change on the bank accounts balance. 

3. I then added the date || credit || debit || balance header to the _transaction list and made sure the deposit and withdrawal methods were pushing to the second element of the array, leaving the heading to stay at 0. 

## Functionality: 

Deposit and withdrawal methods were easy to create. It has got quite difficult when I had to attach each transaction to a date. 

Looking over other solutions I have realised I can use transactions as a way to attach each transaction to a time. 

## How to run 
To run this app, just open index.html in your browser. 

### How to run the tests
Everything required to run Jasmine is within the lib folder. You just need to open SpecRunner.html in your browser to run the tests.

### Acceptance Criteria
**Given** a client makes a deposit of 1000 on 10-01-2012 
**And** a deposit of 2000 on 13-01-2012
**And** a withdrawal of 500 on 14-01-2012
**When** she prints her bank statement
Then she would see

### Images:

![[pic1]](./images/pic1.png)
![[pic2]](./images/pic2.png)
![[pic3]](./images/pic3.png)
![[pic4]](./images/pic4.png)
![[pic5]](./images/pic5.png)