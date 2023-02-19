
describe("A suite to test the mortgage caluculator", function() {

    const rate = .04;
    const amount = 1000000;
    const term = 25;



    it("should get ptrs to input objects from the form: amount, term, rate", function () {
		expect(setupIntialValues()).toBeTrue();
    });


    it('should validate input as an integer greater than 0', function () {

	setupIntialValues();
	const input_set = getCurrentValues();
	expect(validateInput(input_set)).toBeTrue();

    });

    
    it('should set defaults for each form input element', function () {

	let myObject = { amount: 1000000, term: 25, rate: .04 };

	const amount = document.querySelector("#loan-amount");
	const term = document.querySelector("#loan-years");
	const rate = document.querySelector("#loan-rate");

	setDefault(amount, term, rate);

	expect(getCurrentValues()).toEqual(myObject);

    });

    it('should get the  monhtly interest rate', function () {

	expect(getMonthlyRate(rate)).toEqual(rate / 12);

    });

    it('should get the total number of months for the term', function () {

	expect(getTermInMonths(term)).toEqual(term * 12);

    });



    it('should calculatte the numerator', function () {

	expect(calculateNumerator(amount, rate)).toEqual(amount * (rate / 12));

    });


    it('should caculate denominator', function () {

	let i = getMonthlyRate(rate);
	let n = getTermInMonths(term);

	expect(calculateDenominator(rate, term)).toEqual(1 - ((1 + i) ** -n));

    });


    it('calculated Monthly Payment should match know amounts from other calculators', function () {

	setupIntialValues();

	let input_set = getCurrentValues();

	expect(calculateMonthlyPayment(input_set)).toBeCloseTo(5278, 0);
	
    });

    it ('should get the valid DOM pbject for Monthly Payment',function(){

	let monthly = 1;
    
	expect(updateMonthly(monthly)).toBeTrue();
    
    });


    it('should get current values and update output', function() {

	expect(update()).toBeTrue();
	
    });
});




