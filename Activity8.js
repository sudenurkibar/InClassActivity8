var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };

window.onload = function () {
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
	$("add").onclick = addScore;

	$("name").focus();
};

function displayResults()
{
	var highestIndex = 0;
	var average = 0;
    var highest = scores[0];

    for (var i = 0; i < scores.length; i++) {
        average = (average * i + scores[i]) / (i + 1);
        if (scores[i] > highest) {
			highestIndex = i;
            highest = scores[i];
        }
    }
	
    document.getElementById("results").innerHTML = "<h2>Results</h2>";
    document.getElementById("results").innerHTML += "<p>Average score = " + average + "</p>";
    document.getElementById("results").innerHTML += "<p>High score = " + names[highestIndex] + " with a score of " + highest + "</p>";
}

function displayScores() {
    var table = $("scores_table");
    table.innerHTML = "<tr><td><strong>Name<strong></td><td><strong>Score<strong></td></tr>";

    for (var i = 0; i < names.length; i++) {
        table.innerHTML += "<tr><td>" + names[i] + "</td><td>" + scores[i] + "</td></tr>";
    }
}

function addScore() {
    var name = $("name").value.trim();
    var score = parseInt($("score").value);

    if (name === "" || isNaN(score) || score < 0 || score > 100) {
        document.getElementById("error").textContent = "You must enter a name and a valid score!";
    } else {
        names.push(name);
        scores.push(score);

        $("name").value = "";
        $("score").value = "";

        $("name").focus();

        document.getElementById("error").textContent = "";
    }
}
