// Beginning of game needs to reset all buttonValues

// these variables are based on HTML "id" tags
var scoreTarget
var buttonTally = 0;
var wins = 0;
var losses = 0;
var phil = 0;

// Need to generate a random scoreTarget automatically

function randNum(){
	scoreTarget = Math.floor((Math.random()+1) * 40);

	buttonTally = 0

// Need to link C1, C2, C3, C4 to generate buttonValues

	button1 = Math.floor((Math.random()+1) * 2);
	button2 = Math.floor((Math.random()+1) * 3);
	button3 = Math.floor((Math.random()+1) * 4);
	button4 = Math.floor((Math.random()+1) * 5);

	document.getElementById("scoreTarget").innerHTML = "Critical Star Heading: "+scoreTarget;
	document.getElementById("buttonTally").innerHTML = buttonTally;	

	document.getElementById("wins").innerHTML = "Wins: "+wins;
	document.getElementById("losses").innerHTML = "Losses: "+losses;
}

randNum();

// Console logs

console.log(scoreTarget);
console.log(button1);
console.log(button2);
console.log(button3);
console.log(button4);

// Button 1 - with tally, win and loss incrementer

$("#crys1").on("click", function(){
	buttonTally += button1;
	$("#buttonTally").html(buttonTally);
	if (scoreTarget == buttonTally){
		wins ++;
		randNum();
		alert("We all survived! You're a hero!")
	} 

	if (scoreTarget < buttonTally){
		losses ++;
		randNum();
		alert("Wow. We dead.")
	}
});

// Button 2 - with tally, win and loss incrementer

$("#crys2").on("click", function(){
	buttonTally += button2;
	$("#buttonTally").html(buttonTally);
	if (scoreTarget == buttonTally){
		wins ++;
		randNum();
		alert("We all survived! You're a hero!")		
	} 

	if (scoreTarget < buttonTally){
		losses ++;
		randNum();
		alert("Don't be too hard on yourself, but we're all gonna die because of you")
	}
});

// Button 3 - with tally, win and loss incrementer

$("#crys3").on("click", function(){
	buttonTally += button3;
	$("#buttonTally").html(buttonTally);
	if (scoreTarget == buttonTally){
		wins ++;
		randNum();
		alert("We all survived! You're a hero!")
	} 

	if (scoreTarget < buttonTally){
		losses ++;
		randNum();
		alert("We all died!! Do you believe in re-incarnation?")
	}
});

// Button 4 - with tally, win and loss incrementer

$("#crys4").on("click", function(){
	buttonTally += button4;
	$("#buttonTally").html(buttonTally);
	if (scoreTarget == buttonTally){
		wins ++;
		randNum();
		alert("We all survived! You're a hero!")
	} 

	if (scoreTarget < buttonTally){
		losses ++;
		randNum();
		alert("Well.... Better drink the rest of the rum")
	}
});

