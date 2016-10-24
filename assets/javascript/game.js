var wins = 0;
var losses = 0;

function crystalCollectorGame() {

	var minimumNumber = 20;
    var randomNumber = Math.floor((Math.random() * 100) + 10);

    var score = 0;
    
    $('#randomNumber').html('<h2>' + randomNumber + '</h2>');

	var crystalOne = Math.floor((Math.random() * 25) + 10);
	var crystalTwo = Math.floor((Math.random() * 25) + 10);
	var crystalThree = Math.floor((Math.random() * 25) + 10);
	var crystalFour = Math.floor((Math.random() * 25) + 10);

	$("#crystalOne").on("click", function(){
		score = score + crystalOne;
		$('#score').html('<h2> Your Total: <br>' + '<h1>' + score + '</h1>' + '</h2>');
	});
	$("#crystalTwo").on("click", function(){
		score = score + crystalTwo;
		$('#score').html('<h2> Your Total: <br>' + '<h1>' + score + '</h1>' + '</h2>');
	});
	$("#crystalThree").on("click", function(){
		score = score + crystalThree;
		$('#score').html('<h2> Your Total: <br>' + '<h1>' + score + '</h1>' + '</h2>');
	});
	$("#crystalFour").on("click", function(){
		score = score + crystalFour;
		$('#score').html('<h2> Your Total: <br>' + '<h1>' + score + '</h1>' + '</h2>');
	});

}

crystalCollectorGame();