var triviaQuestions = {
	q1: {
		question : "Where is the Venus de Milo Currently displayed?",
		correct : "The Louvre",
		answers : ["The Louvre","The British Museum", "Uffizi", "The Vatican"],
	},
	q2: {
		question : "Which of the following was painted by Vincent Van Gogh?",
		correct : "Starry Night",
		answers : ["Water Lillies", "Starry Night", "The Persistance of Memory", "On the River Blue"]
	},
	q3: {
		question : "Who painted the Mona Lisa?",
		correct : "Leonardo da Vinci",
		answers: ["Pablo Picasso", "Caravaggio", "Raphael", "Leonardo da Vinci"],
	},
	q4: {
		question : "Who is the creator of the statue of David?",
		correct : "Michaelangelo",
		answers : ["Leornardo da Vinci", "Donatello", "Michaelangelo", "Raphael"],
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
		correct : "The interpretation of Adam and God as large brain shapes",
		answers : ["The depiction of hell", "The insclusion of Cardinals in Hell", "The interpretation of Adam and God as large brain shapes", "A lack of recognition of the Crusades"]
	},
	q8: {
		question : "In what dynasty was the Terracotta Army created?",
		correct : "Qin",
		answers : ["Qin", "Ming", "Xiao", "Yang"]
	}

}

var ansCorrect;
var ansIncorrect;
var ansTimeout;
var inTime;

// Holds js until loaded and clicked
$(document).ready(function(){
	$('.welcome').on("click", function(){
		game()
	})
})

// core game
function game(){
	ansCorrect = 0;
	ansIncorrect = 0;
	ansTimeout = 0;

	timerRunning = false

	var i = 0;
	var limit = Object.keys(triviaQuestions).length - 1;
	var delay = 5000;//change to allow for more time!
	$('.game').empty()
	$('.welcome').remove()

	// changing of questions
	var slideShow = function() {
		if (i <= limit){
			timer = setTimeout(slideShow, delay)
		}

		else{
			clearTimeout(timer)
			$('.new').empty()
			$('.game').html('<div class="end">');
			$('.end').append('<h1>Correct: ' + ansCorrect);
			$('.end').append('<h1>Incorrect: ' + ansIncorrect);
			$('.end').append('<h1>Timed Out: ' + ansTimeout);
		}

		if (inTime === false){
			i++
			ansTimeout++
		}
		

		console.log('i - in for loop or while loop',i);

		console.log('i - before jQuery', i);
		$('.new').html('<h1>' + Object.values(triviaQuestions)[i].question);
		$('.game').empty()
		for (var x = 0; x < Object.values(triviaQuestions)[i].answers.length; x++){
			var question = $('<h3 class="picker">')
			question.append(Object.values(triviaQuestions)[i].answers[x]);
			question.attr('dataName', Object.values(triviaQuestions)[i].answers[x])
			$('.game').append(question);
		}

		$('.picker').on("click", function(){
			console.log(i)
			console.log($(this).attr('dataName'))
			if ($(this).attr('dataName') === Object.values(triviaQuestions)[i].correct){
				ansCorrect++
				i++
				inTime = true
				clearTimeout(timer)
				$('.new').empty()
				$('.game').html('<h1>GOOD JOB!')
				setTimeout(slideShow,2000)
			}
			else{
				ansIncorrect++
				i++
				inTime = true
				clearTimeout(timer)
				$('.new').empty()
				$('.game').html('<h1>SORRY!')
				setTimeout(slideShow,2000)
			}
		})

		inTime = false

	}
	slideShow();

}