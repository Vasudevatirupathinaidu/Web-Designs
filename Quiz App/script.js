
const quizData = [
  {
    question: 'Where does the inception film open?',
    a: 'In a city',
    b: 'On a beach',
    correct: 'b'
  }, {
    question: 'What is the name of Cobb\'s first architect ?',
    a: 'Mosh',
    b: 'Nash',
    correct: 'b'
  }, {
    question: 'Where does Cobb recruit Yusuf and Eames?',
    a: 'Mumbasa',
    b: 'Mombasa',
    correct: 'b'

  }, {
    question: 'The code is 528 491.',
    a: 'true',
    b: 'false',
    correct: 'a'
  },

];

const quiz = document.querySelector('#quiz');
const questionElement = document.querySelector('#question');
const answerElements = document.querySelectorAll('.answer');
const a_text = document.querySelector('#a_text');
const b_text = document.querySelector('#b_text');
const submit = document.querySelector('#submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {

  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];
  questionElement.innerText = currentQuizData.question;

  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
} 

function getSelected() {
  let answer = '';

  answerElements.forEach((answerElement) => {
    if (answerElement.checked) {
      return answer = answerElement.id;
    }
  });
  return answer;
}

function deselectAnswers() {
  answerElements.forEach((answerElement) => {
    answerElement.checked = false;
  });
}


submit.addEventListener('click', () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
      <h2>You answered correctly at ${score}/${quizData.length} questions.</h2> 
      
      <button onclick="location.reload()">Reload</button>
      `;
    }
  }
  
});