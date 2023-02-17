
window.addEventListener('DOMContentLoaded', (event) => {
    init_form();
});



function init_form() {

    const form = document.getElementById("calc-form");

    if (form) {
	console.log("in if");
	return true;	// });
    }
	// form.addEventListener("submit", function(e) {
	//     e.preventDefault();
}


// function getCurrentUIValues() {
//     return {
// 	amount: +(document.getElementById("loan-amount").value),
// 	years: +(document.getElementById("loan-years").value),
// 	rate: +(document.getElementById("loan-rate").value),
//     };
// }


// // Get the inputs from the DOM.
// // Put some default values in the inputs
// // Call a function to caculate the current monthly payment
// function setupIntialValues() {
//     document.querySelector('#loan-amount').value = 1000000;
//     document.querySelector('#loan-years').value = 25;
//     document.querySelector('#loan-rate').value = 6;
//     update();
// }

// // Get the current values from the UI
// // Update the monthly payment
// function update() {
//     const values = getCurrentUIValues();
//     const monthly = calculateMonthlyPayment(values);
//     updateMonthly(monthly);

// }

// // Given an object of values (a value has amount, years and rate ),
// // calculate the monthly payment.  The output should be a string
// // that always has 2 decimal places.
// function calculateMonthlyPayment(values) {
//     const i = (values.rate / 100) / 12;
//     const n = values.years * 12;
//     const p = values.amount;
    
//     return ((p * i) / (1 - Math.pow((1 + i),-n))).toFixed(2);
// }

// // Given a string representing the monthly payment value,
// // update the UI to show the value.
// function updateMonthly(monthly) {
//     document.querySelector('#monthly-payment').innerText = monthly;
// }




