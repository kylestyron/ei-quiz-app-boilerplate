const STORE = {
  questions: [
    {
      question: 'How many strings do most bass guitars have?',
      answers: [
        '3',
        '4',
        '5',
        '6'
      ],
      correctAnswer: '4'
    },
    {
      question: 'What is the most common tuning for a 4-string bass guitar?',
      answers: [
        'A-A-A-A',
        'A-B-C-D',
        'E-A-D-G',
        'E-G-A-D'
      ],
      correctAnswer: 'E-A-D-G'
    },
    {
      question: 'What is the standard scale length of a bass guitar?',
      answers: [
        '30 inches',
        '32 inches',
        '33 inches',
        '34 inches'
      ],
      correctAnswer: '34 inches'
    },
    {
      question: 'How many frets are usually on a standard scale bass guitar?',
      answers: [
        '0',
        '21',
        '22',
        '24'
      ],
      correctAnswer: '24'
    },
    {
      question: 'On a 5-string bass, what is the common tuning of the lowest string?',
      answers: [
        'B',
        'E',
        'F',
        'C'
      ],
      correctAnswer: 'B'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material and access support for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates
function getQuiz() {
  return `<section>
    <h2 class="question-number">${STORE.questionNumber}</h2>
      <h3 class="ask-question">${STORE.questions[questionNumber].question}</h3>
        <form>
          <ul class="answers">
            <li>
              <input type="radio" name="answer" value="A">${STORE.questions[questionNumber].answers[0]}
            </li>
            <li>
              <input type="radio" name="answer" value="B">${STORE.questions[questionNumber].answers[1]}
            </li>
            <li>
              <input type="radio" name="answer" value="C">${STORE.questions[questionNumber].answers[2]}
            </li>
            <li>
              <input type="radio" name="answer" value="D">${STORE.questions[questionNumber].answers[3]}
            </li>
          </ul>
          <button type="submit">Submit</button>
        </form>
      <p class="number-correct">${STORE.score}/5</p>
    </section>`;
};

function getStartScene() {
  return `<section>
    <h3 class="quiz-topic">This is the topic of the quiz</h2>
    <button name="quiz-start" value="start">Start!</button>
  </section>`;
};

function getEndScene() {
  return `<section>
    <h3 class="score">Your final score was ${STORE.score}/5</h2>
    <button name="quiz-reset" value="restart">Restart?</button>
  </section>`;
};

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store
function updatePage() {
  if(STORE.quizStarted && STORE.questionNumber > 4){
    //update main html to getEndScene()
  }
  else if(STORE.quizStarted) {
    //update main html to getQuiz()
  }
  else {
    //update main html to getStartScene()
  }
};

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)
function handleSumbit(){
  //handle answer submissions to increment score and advance to next question
};

function handleClick() {
  //handle button clicks to start and restart quiz
};

function handleQuizApp() {
  handleClick();
  handleSubmit();
  updatePage();
}


$(handleQuizApp());