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
    <h2 class="question-number">Question #${STORE.questionNumber + 1}</h2>
      <h3 class="ask-question">${STORE.questions[STORE.questionNumber].question}</h3>
        <form>
          <ul class="answers">
            <li>
              <label><input type="radio" name="answer" tabindex="1" value="${STORE.questions[STORE.questionNumber].answers[0]}" required> ${STORE.questions[STORE.questionNumber].answers[0]}</label>
            </li>
            <li>
              <label><input type="radio" name="answer" tabindex="2" value="${STORE.questions[STORE.questionNumber].answers[1]}" required> ${STORE.questions[STORE.questionNumber].answers[1]}</label>
            </li>
            <li>
              <label><input type="radio" name="answer" tabindex="3" value="${STORE.questions[STORE.questionNumber].answers[2]}" required> ${STORE.questions[STORE.questionNumber].answers[2]}</label>
            </li>
            <li>
              <label><input type="radio" name="answer" tabindex="4" value="${STORE.questions[STORE.questionNumber].answers[3]}" required> ${STORE.questions[STORE.questionNumber].answers[3]}</label>
            </li>
          </ul>
          <button id="submit-button" type="submit">Submit</button>
          <button id="next-button" type="button" style="display : none">Next</button>
        </form>
      <p class="number-correct">Score: ${STORE.score}/5</p>
    </section>`;
};

function getStartScene() {
  return `<section class="start">
    <h3 class="quiz-topic">This is a quiz that test some basic knowledge about bass guitars!</h2>
    <p>Click the Start button to begin!</p>
    <button id="quiz-start" name="quiz-starter" value="s">Start</button>
  </section>`;
};

function getEndScene() {
  return `<section class="end">
    <h3 class="score">Your final score was ${STORE.score}/5</h2>
    <button id="restart" name="quiz-reset" value="r">Restart?</button>
  </section>`;
};

function getCorrectAnswer() {
  return `<div class="correctAnswer">
  <p>Correct!</p>
  </div>`;
}

function getWrongAnswer() {
  return `<div class="wrongAnswer">
  <p>Sorry, that is incorrect. The correct answer is: ${STORE.questions[STORE.questionNumber].correctAnswer}</p>
  </div>`;
}

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store
function updatePage() {
  console.log('`updatePage` ran');
  if(STORE.quizStarted && STORE.questionNumber > 4){
    //update main html to getEndScene()
    $('main').html(getEndScene());
  }
  else if(STORE.quizStarted) {
    //update main html to getQuiz()
    $('main').html(getQuiz());
  }
  else {
    //update main html to getStartScene()
    $('main').html(getStartScene());
  }
};

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)
function handleSubmit() {
  //handle answer submissions to increment score and advance to next question
  console.log('`handleSubmit` ran');
  $('main').submit( event => {
    event.preventDefault();
    
    var $answer = $('input[name="answer"]:checked');
    var isCorrect = ($answer.val() === STORE.questions[STORE.questionNumber].correctAnswer);
    
    if(isCorrect) {
      $answer.closest('li').after(getCorrectAnswer());
      STORE.score++;
    }
    else {
      $answer.closest('li').after(getWrongAnswer());
    }
    $('input').attr('disabled', true);
    $('#submit-button').css('display', 'none');  
    $('#next-button').css('display', 'inline-block');
  });
};

function handleNext() {
  console.log('`handleNext` ran');
  $('main').on('click', '#next-button', event => {
    STORE.questionNumber += 1; 
    updatePage();
  });
};

function handleClick() {
  //handle button clicks to start and restart quiz
  console.log('`handleClick()` ran');
  $('main').on('click', '#restart', function(event) {
    STORE.quizStarted = false;
    STORE.score = 0;
    STORE.questionNumber = 0;
    updatePage();
    });

  $('main').on('click', '#quiz-start', function(event) {
    STORE.quizStarted = true;
    updatePage();
  });
  
};

function handleQuizApp() {
  handleClick();
  handleNext();
  handleSubmit();
  updatePage();
}


$(handleQuizApp());