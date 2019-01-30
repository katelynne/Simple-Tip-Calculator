
let billAmount_input = document.getElementById("bill-amount");
let serviceQuality_input = document.getElementById("service-quality");
let peopleAmount_input = document.getElementById("people-amount");
let tipDisplay_span = document.getElementById("tipDisplay");
let calculate_button = document.querySelector("#calculate");
let each_small = document.querySelector("#each");
let result_div = document.querySelector("#result");
let reset_button = document.querySelector("#reset");
let form_tag = document.querySelector("#form");
let total = 0;
let bill = 0;
let service = 0;
let people = 1;

init();

function init(){
	result_div.style.display = "none";
	reset_button.style.display = "none";

	billAmount_input.addEventListener("change", function(){
	bill = this.value;
});

serviceQuality_input.addEventListener("change", function(){
	service = this.value;
});

peopleAmount_input.addEventListener("change", function(){
	people = this.value;
});

calculate_button.addEventListener("click", function(){
	total = bill * service / people;
	total = Math.round(total * 100) /100;
	total = total.toFixed(2);
	tipDisplay_span.textContent = total;
	result_div.style.display = "inline";
	if (people <= 1) {
		each_small.style.display = "none";
		}
	reset_button.style.display = "block";
	calculate_button.style.display = "none";

});
}

	


reset_button.addEventListener("click", function(){
	init();
	calculate_button.style.display = "block";
	document.querySelectorAll("input")

});


