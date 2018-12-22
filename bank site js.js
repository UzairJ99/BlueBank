//Icon buttons for welcome section
var findCreditCardBtn = document.getElementById("findCreditCard");
var getAMortgageBtn = document.getElementById("getMortgage");
var ratesBtn = document.getElementById("rates");
var borrowBtn = document.getElementById("borrow");

//Hover effect for the find a credit card icon
findCreditCardBtn.addEventListener("mouseover", function() {
	this.src = "credit card logo hover.jpg";
});
findCreditCardBtn.addEventListener("mouseout", function() {
	this.src = "credit card logo.jpg";
});

//Hover effect for the get a mortgage icon
getAMortgageBtn.addEventListener("mouseover", function() {
	this.src = "house logo hover.jpg";
});
getAMortgageBtn.addEventListener("mouseout", function() {
	this.src = "house logo.jpg";
});

//Hover effect for the see rates icon
ratesBtn.addEventListener("mouseover", function() {
	this.src = "rates logo hover.jpg";
});
ratesBtn.addEventListener("mouseout", function() {
	this.src = "rates logo.jpg";
});

//Hover effect for the borrow money icon
borrowBtn.addEventListener("mouseover", function() {
	this.src = "borrow logo hover.jpg";
});
borrowBtn.addEventListener("mouseout", function() {
	this.src = "borrow logo.jpg";
});