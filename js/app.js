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
		"text": "What Programming Language is used for web page Behaivor?",
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
		"answers": ["Server", "Lightbulb", "Internet", "Phone"],
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

class Quiz {
	constructor() {
		this.questions = [];
		this.currentQuestion = 0;
		this.score = 0;
	};

	// Checks if a provided answer is correct, and increments score if it is
	checkCorrect(answerID) {
		const questionToCheck = this.questions[this.currentQuestion];
		const questionIndex = answerID - 1;

		if (questionToCheck.correctAnswerIndex === questionIndex) {
			this.score++;
		} else {
			return;
		};
	};
};

function nextQuestion(quiz, answer) {
	
	if (quiz.currentQuestion > 0) {
		quiz.checkCorrect(answer)
	}
	quiz.currentQuestion++;
	const currentQuestionNumber = quiz.currentQuestion;
	const currentQuestion = quiz.questions[currentQuestionNumber - 1]
	const currentScore = quiz.score;
	const totalQuestions = quiz.questions.length;
	const answeredQuestions = totalQuestions - currentQuestionNumber - 1;

	$('.question-number').text(`Question: ${currentQuestionNumber}/${totalQuestions}`);
	$('.question-correct').text(`Correct: ${currentScore}/${answeredQuestions}`);
	$('.question-title').text(`${currentQuestion.text}`);
	$('.question-choices').empty();
	for (i=0; i < currentQuestion.answers.length; i++) {
		$('.question-choices').append(currentQuestion.answers[i])
	};
};

function startQuiz() {
	$('.quiz-welcome').hide();
	$('.quiz-questions').show();
	let codingQuiz = new Quiz;
	codingQuiz.questions.concat(quizQuestions);
	nextQuestion(codingQuiz);
	// TODO: Add event listener for submit, and reset
};

$(document).ready(function() {
	$('.quiz-start-button').click(function() {
		startQuiz();
	});
});