var wins = 0;
var losses = 0;

var score = 0;

var randomizedNumber = 0;

var crystalOne = 0;
var crystalTwo = 0;
var crystalThree = 0;
var crystalFour = 0;

function valueSetup() {
    
    randomizedNumber = Math.floor((Math.random() * 100) + 10);
    $('#randomNumber').html('<h2>' + randomizedNumber + '</h2>');

	score = 0;
	$('#score').html('<h2> Your Total: <br></h2> <h1>0</h1>');

    crystalOne = Math.floor((Math.random() * 25));
	crystalTwo = Math.floor((Math.random() * 25));
	crystalThree = Math.floor((Math.random() * 25));
	crystalFour = Math.floor((Math.random() * 25));

}

valueSetup();

function winOrLose() {
	if (score > randomizedNumber) {
		alert('BUST! You Lose!');
		losses++;
		valueSetup();
		$('#losses').html('Losses: ' + losses);
	}
	else if (score == randomizedNumber) {
		alert('You Win!');
		wins++;
		valueSetup();
		$('#wins').html('Wins: ' + wins);
	}
}



function crystalCollectorGame() {

	$("#crystalOne").on("click", function(){
		score = score + crystalOne;
		$('#score').html('<h2> Your Total: <br>' + '<h1>' + score + '</h1>' + '</h2>');
		winOrLose();
	});
	$("#crystalTwo").on("click", function(){
		score = score + crystalTwo;
		$('#score').html('<h2> Your Total: <br>' + '<h1>' + score + '</h1>' + '</h2>');
		winOrLose();
	});
	$("#crystalThree").on("click", function(){
		score = score + crystalThree;
		$('#score').html('<h2> Your Total: <br>' + '<h1>' + score + '</h1>' + '</h2>');
		winOrLose();
	});
	$("#crystalFour").on("click", function(){
		score = score + crystalFour;
		$('#score').html('<h2> Your Total: <br>' + '<h1>' + score + '</h1>' + '</h2>');
		winOrLose();
	});

}

crystalCollectorGame();