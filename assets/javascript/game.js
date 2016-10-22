var wins = 0;
var losses = 0;

function crystalsCollectorGame() {

	var minimumNumber = 20;
    var randomNumber = Math.floor((Math.random() * 100) + 10);
    
    $('#randomNumber').html('<h2>' + randomNumber + '</h2>');

	var crystalOne = Math.floor((Math.random() * 25) + 10);
		console.log(crystalOne);
	var crystalTwo = Math.floor((Math.random() * 25) + 10);
		console.log(crystalTwo);
	var crystalThree = Math.floor((Math.random() * 25) + 10);
		console.log(crystalThree);
	var crystalFour = Math.floor((Math.random() * 25) + 10);
		console.log(crystalFour);

}

crystalsCollectorGame();



$("#crystalOne").on("click", function(){
	console.log("!")
});
$("#crystalTwo").on("click", function(){
	console.log("!!")
});
$("#crystalThree").on("click", function(){
	console.log("!!!")
});
$("#crystalFour").on("click", function(){
	console.log("!!!!")
});