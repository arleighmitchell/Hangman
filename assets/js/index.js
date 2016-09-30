$(document).ready(function() {
	console.log("hello fuckers")

	var Words = function() {
		this.word = []
	};

	hangMan = new Words();
	hangMan.word.push("apple", "unicorn", "pillow","green", "knight", "puppies", "jello", "funk", "camero");

	 i = [Math.floor(Math.random()*hangMan.word.length)];

	splitWord = hangMan.word[i].split("");

	underscore = splitWord.map(function(word) {
		return "_ "
	});

	$("#word").html(underscore);
	console.log(splitWord);

	$("#generate-word").click(function() {

		 i = [Math.floor(Math.random()*hangMan.word.length)];

		splitWord = hangMan.word[i].split("");

		underscore = splitWord.map(function(word) {
			return "_ "
		});

		$("#word").html(underscore);
		console.log(splitWord);

		$("#letter-list").empty();
		$("#end").empty();
		$("#guess").val("");
		$("#nope").hide();

	});

	$("#submit-guess").click(function() {
		
		guess = $("#guess")[0].value;

		if (splitWord.indexOf(guess) == -1){
			$("#nope").html("incorrect");
			$("#nope").show();
			console.log("nope");
		}

		while(splitWord.indexOf(guess) != -1) {
			guessIndex = splitWord.indexOf(guess);
			splitWord[guessIndex] = "- "
			underscore[guessIndex] = guess
			$("#nope").hide();
		}

		$("#word").html(underscore);
		console.log(underscore);

		hi = "_ "

		if(underscore.indexOf(hi) == -1){
			$("#end").html("winner winner chicken dinner!");
		};

		$("#letter-list").append(guess + ",");

	});

});