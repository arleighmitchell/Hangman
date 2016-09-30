$(document).ready(function() {
	console.log("hello fuckers")

	var Words = function() {
		this.word = []
	};

	 hangMan = new Words();
	hangMan.word.push("apple", "unicorn", "pillow","green", "knight", "puppies", "jello", "funk", "camero");

	$("#generate-word").click(function() {

		 i = [Math.floor(Math.random()*hangMan.word.length)];

		splitWord = hangMan.word[i].split("")

		underscore = splitWord.map(function(word) {
			return "_ "
		})

		$("#word").html(underscore);
		console.log(splitWord);

	});

	$("#submit-guess").click(function() {
		
		var guess = $("#guess")[0].value;


		if (splitWord.indexOf(guess) == -1){
			$("#nope").html("nope");
			$("#nope").show();
			console.log("nope");
		}
		

		while(splitWord.indexOf(guess) != -1) {
			guessIndex = splitWord.indexOf(guess);
			splitWord[guessIndex] = "-"
			underscore[guessIndex] = guess
			$("#nope").hide();
		}

		$("#word").html(underscore);
		console.log(underscore);

	});

});