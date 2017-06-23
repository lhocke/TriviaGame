var triviaQuestions = {
	q1: {
		question : "Where is the Venus de Milo Currently displayed?",
		correct : "The Louvre",
		answers : ["The Louvre","The British Museum", "Uffizi", "The Vatican"],
	},
	q2: {
		question : "Which of the following was painted by Vincent Van Gogh?",
		correct : "Starry Night",
		answers : ["Starry Night", "Water Lillies", "The Persistance of Memory", "On the River Blue"]
	},
	q3: {
		question : "Who painted the Mona Lisa?",
		correct : "Leonardo da Vinci",
		answers: ["Leonardo da Vinci", "Pablo Picasso", "Caravaggio", "Raphael"],
	},
	q4: {
		question : "Who is the creator of the statue of David?",
		correct : "Michaelangelo",
		answers : ["Michaelangelo", "Leornardo da Vinci", "Donatello", "Raphael"],
	},
	q5: {
		question: "What famous event from the Bible did Leonardo da Vinci paint?",
		correct: "The Last Supper",
		answers : ["The Crucifixion", "Noah's Ark", "David and Goliath", "The Last Supper"]
	},
	q6: {
		question : "The Sistine Chapel holds one of the world's most famous paintings. What was changed after the original was painted?",
		correct : "The genitals of subjects were painted over to promote modesty",
		answers : ["An image of Christ on the cross was added", "Pope Innocent inserted himself to show off his piety", "The genitals of subjects were painted over to promote modesty", "Dogs were added in an outreach effort by John Paul II"]
	},
	q7: {
		question : "The Sistine Chapel has caused some contreversy in recent years for what image?",
		correct : "The interpratation of Adam and God as large brain shapes",
		answers : ["The depiction of hell", "The insclusion of Cardinals in Hell", "The interpratation of Adam and God as large brain shapes", "A lack of recognition of the Crusades"]
	},
	q8: {
		question : "In what dynsaty was the Terracotta Army created?",
		correct : "",
		answers : []
	}

}

var ansCorrect;
var ansIncorrect;
var ansTimeout;

// var possibleChoices;
var choice;
// var picked;
var inTime = true 
// var choice1;
// var choice2;
// var choice3;
// var choice4;
// game()

$(document).ready(function(){
	$('.welcome').on("click", function(){
		game()
	})
})


function game(){
	ansCorrect = 0
	ansIncorrect = 0
	ansTimeout = 0

	var i = 0;
	var limit = Object.keys((triviaQuestions).length - 1);
	var delay = 5000;//change to allow for more time!
	// var picked;
	$('.game').empty()

	var slideShow = function() {
		if (i <= limit){
			setTimeout(slideShow, delay);
		}

		if (inTime === false){
			i++
			inTime = true
			ansTimeout++
		}
		

		console.log('i - in for loop or while loop',i);

		console.log('i - before jQuery', i);
		$('.welcome').html('<h1>' + Object.values(triviaQuestions)[i].question);
		$('.game').empty()
		for (var x = 0; x < Object.values(triviaQuestions)[i].answers.length; x++){
			var question = $('<h3 class="picker">')
			question.append(Object.values(triviaQuestions)[i].answers[x]);
			// console.log(question)
			question.attr('dataName', Object.values(triviaQuestions)[i].answers[x])
			$('.game').append(question);
		}

		$('.picker').on("click", function(){
			console.log(i)
			console.log($(this).attr('dataName'))
			// console.log($('picker').attr('dataName'))
			if ($(this).attr('dataName') === Object.values(triviaQuestions)[i].correct){
				ansCorrect++
				i++
				inTime = true
				slideShow()
			}
			else{
				ansIncorrect++
				i++
				inTime = true
				slideShow()
			}
		})

		inTime = false

		// console.log("counter");
	}
	// setTimeout(slideShow, delay);
	slideShow();

}