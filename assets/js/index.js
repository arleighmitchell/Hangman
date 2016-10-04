$(document).ready(function() {
	console.log("hello fuckers")

	var Words = function() {
		this.word = []
	};

	hangMan = new Words();
	hangMan.word.push("apple", "unicorn", "pillow","green", "airplane", "puppies", "jello", "speaker", "camero");

	hints = new Words();
	hints.word.push("a fruit", "a mystical creature", "a piece of bedding", "a color", "a type of vehicle", "animals", "a food", "audio equipment", "type of car");
	
	 i = [Math.floor(Math.random()*hangMan.word.length)];

	splitWord = hangMan.word[i].split("");

	underscore = splitWord.map(function(word) {
		return "_ "
	});

	hint = hints.word[i];

	$("#word").html(underscore);
	console.log(splitWord);
	$("#hint").append("Hint: " + hint);

	$("#generate-word").click(function() {

		i = [Math.floor(Math.random()*hangMan.word.length)];

		hint = hints.word[i];

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
		$("#word").show();
		$("#hint").empty();
		$("#hint").append("Hint: " + hint);
		$("#hint").show();
		$("#answer").hide();

		count = 0

	});

	count = 0

	$("#submit-guess").click(function() {

		guess = $("#guess")[0].value;

		if (splitWord.indexOf(guess) == -1){
			$("#nope").html("incorrect");
			$("#nope").show();
			console.log("nope");
			function clickCount() {
				count = count + 1;
				console.log(count);
			}
			clickCount();
		}

		if (count > 3) {
			$("#word").hide();
			$("#hint").hide();
			$("#nope").html("SORRY, YOU LOSE.");
			$("#answer").show();
			$("#answer").html("ANSWER: " + hangMan.word[i])
		}

		while(splitWord.indexOf(guess) != -1) {
			guessIndex = splitWord.indexOf(guess);
			splitWord[guessIndex] = "- "
			underscore[guessIndex] = guess
			$("#nope").hide();
		}

		$("#word").html(underscore);
		console.log(underscore);

		win = "_ "

		if(underscore.indexOf(win) == -1){
			$("#end").html("CONGRATULATIONS, YOU WON!");
		};

		$("#letter-list").append(guess + ",");

		$("#guess").val("");

	});

});