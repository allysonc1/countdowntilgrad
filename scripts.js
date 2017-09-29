console.log("I AM LOADED!!");

function updateTimer(){
	// subtract end date from now
	var now = new Date();
	var timeRemaining = endDate.getTime() - now.getTime();
	// console.log(timeRemaining);
	var seconds = Math.floor(timeRemaining/1000% 60);
	var minutes = Math.floor((timeRemaining/1000 / 60) % 60);
	var hours = Math.floor((timeRemaining/(1000 * 60 * 60)) % 24);
	var days = Math.floor((timeRemaining/ (1000 * 60 * 60 * 24)) % 7);
	var weeks = Math.floor(timeRemaining / (1000 *60 * 60 * 24 * 7));

	// console.log(seconds);
	// console.log(minutes);
	document.getElementsByClassName('weeks')[0].innerHTML = weeks;  
	document.getElementsByClassName('days')[0].innerHTML = days;  

	document.getElementsByClassName('hours')[0].innerHTML = hours;  

	document.getElementsByClassName('minutes')[0].innerHTML = minutes;  

	document.getElementsByClassName('seconds')[0].innerHTML = seconds;  

	// this returns an array of objects - must target at least 0th lement

}

var endDate = new Date("January 10, 2018")
console.log(endDate);

// setInterval will run the 1st arg (function) everry 1000 milliseconds(=1 second)
setInterval(function(){
	// console.log("tick");
	// update the html so the right numbers are showing
	updateTimer();
},1000)




