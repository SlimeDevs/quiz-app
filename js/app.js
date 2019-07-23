class Quiz {
	constructor() {
		this.questions = [];
		this.currentQuestion = 0;
		this.score = 0;
	};

	// Checks if a provided answer is correct, and increments score if it is
	checkCorrect(answerID) {
		const questionToCheck = this.questions[this.currentQuestion - 1];
		const questionIndex = answerID - 1;

		if (questionToCheck.correctAnswerIndex === questionIndex) {
			this.score++;
		} else {
			return;
		}
	};
}

const quizQuestions = [
	{
		"text": "What Programming Language is used for web page Structure?",
		"answers": ["HTML", "CSS", "Javascript", "C#"],
		"correctAnswerIndex": 0
	},
	{
		"text": "What Programming Language is used for web page Styling?",
		"answers": ["HTML", "CSS", "Javascript", "C#"],
		"correctAnswerIndex": 1
	},
	{
		"text": "What Programming Language is used for web page Behavior?",
		"answers": ["HTML", "CSS", "Javascript", "C#"],
		"correctAnswerIndex": 2
	},
	{
		"text": "What Programming Language is used for computer applications?",
		"answers": ["HTML", "CSS", "Javascript", "C#"],
		"correctAnswerIndex": 3
	},
	{
		"text": "What is the name of the network that connects over 3 billion people today?",
		"answers": ["Cybernet", "Internet", "PC", "Network"],
		"correctAnswerIndex": 1
	},
	{
		"text": "What language do computers run on?",
		"answers": ["Binary", "C#", "HTML", "Java"],
		"correctAnswerIndex": 0
	},
	{
		"text": "What device fits in your hand and is used for calls?",
		"answers": ["Server", "Light bulb", "Internet", "Phone"],
		"correctAnswerIndex": 3
	},
	{
		"text": "What is used by developers for coding?",
		"answers": ["CSS", "IDE", "TV", "PC"],
		"correctAnswerIndex": 1
	},
	{
		"text": "How many programming languages are there?",
		"answers": ["Infinity", "256+", "0", "9000+"],
		"correctAnswerIndex": 1
	},
	{
		"text": "Who invented the first network like the internet?",
		"answers": ["Russia", "John F. Kennedy", "U.S (ARPANET)", "China"],
		"correctAnswerIndex": 2
	}
];

let quiz = new Quiz;

function showEnding() {
	const incorrectQuestions = quiz.questions.length - quiz.score;
	$('.final-correct').text('Questions Correct: ' + quiz.score);
	$('.final-incorrect').text('Questions Incorrect: ' + incorrectQuestions);
	$('.question-restart').on('click', function() {
		console.log('Restart')
	});
	$('.quiz-questions').hide();
	$('.quiz-final').show();
}

function nextQuestion(answer) {
	if (quiz.currentQuestion > 0) {
		quiz.checkCorrect(answer)
	}
	quiz.currentQuestion++;
	const currentQuestionNumber = quiz.currentQuestion;
	const currentQuestion = quiz.questions[currentQuestionNumber - 1];
	if (quiz.currentQuestion === 11) {
		return showEnding();
	}
	const currentScore = quiz.score;
	const totalQuestions = quiz.questions.length;
	const questionChoicesSelector = $('.question-choices');
	const questionAnswers = currentQuestion.answers;

	$('.question-number').text(`Question: ${currentQuestionNumber}/${totalQuestions}`);
	$('.question-correct').text(`Correct: ${currentScore}/${currentQuestionNumber - 1}`);
	$('.question-title').text(`${currentQuestion.text}`);
	questionChoicesSelector.empty();
	for (let i=0; i < currentQuestion.answers.length; i++) {
		questionChoicesSelector.append(`<li>\n<input type="radio" name="user-answer" value="${i + 1}" required>\n<label>${questionAnswers[i]}</label>\n</li>`)
	}
}

function startQuiz() {
	$('.quiz-welcome').hide();
	$('.quiz-questions').show();
	quiz.questions = JSON.parse(JSON.stringify(quizQuestions));
	console.log(quiz.questions);
	nextQuestion();
	$('#question-form').on('submit', function(event) {
		event.preventDefault();
		let answerValue = $(".question-choices input[name='user-answer']:checked").val();
		nextQuestion(answerValue);
	})
}

$(function() {
    $('.quiz-start-button').on('click', function() {
        startQuiz();
    });
});