

window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
    if (form) {
	setupIntialValues();
	form.addEventListener("submit", function(e) {
	    e.preventDefault();
	    update();
    });
  }
});

function setupIntialValues() {

    const amount = document.querySelector("#loan-amount");
    const term   = document.querySelector("#loan-years");
    const rate   = document.querySelector("#loan-rate");

    if (amount && term && rate) {
	setDefault(amount,term,rate);
	update();
	    return true;
    }
}


function setDefault(amount,term,rate) {
    
    amount.value = 1000000;
    term.value = 25;
    rate.value = 4;
}


function getCurrentValues() {
    return {
	amount: +document.querySelector("#loan-amount").value,
	term:   +document.querySelector("#loan-years").value, 
	rate:   +document.querySelector("#loan-rate").value/100,  
    };

}

function validateInput(input_set) {

   for (const input in input_set)
	if ((typeof(input_set[input]) != 'number' || input_set[input] <= 0))
	    return false;
    return true;
}

function update() {

    let input_set = getCurrentValues();

    if (validateInput(input_set)) {
	let monthly =  calculateMonthlyPayment(input_set);
	updateMonthly(`$ ${monthly.toFixed(2)}`);
	return true;
    }

    else 
	updateMonthly('BAD INPUT: INPUT INTEGERS GREATER THAN 0 FOR ALL FIELDS');

}


function updateMonthly(monthly) {
    const output = document.querySelector('#monthly-payment');
    if(output) {
	output.innerHTML = monthly;
	return true;
    }
}


function calculateMonthlyPayment(input_set) {


    let numerator = calculateNumerator (input_set.amount, input_set.rate);
    let denominator = calculateDenominator (input_set.rate, input_set.term);
    
    return (numerator/denominator);
}


function calculateNumerator(amount, rate) {
    
    return amount * getMonthlyRate(rate); 
}

function calculateDenominator(rate, term){


    let i =  getMonthlyRate(rate);
    let n =  getTermInMonths(term);

    let x = (1+i)**-n;

    return  (1 - x);

}


function getMonthlyRate(rate){

    return (rate / 12);
}

function getTermInMonths(term){

    return (term *  12);
}
