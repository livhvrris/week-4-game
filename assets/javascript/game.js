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

}

crystalCollectorGame();



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