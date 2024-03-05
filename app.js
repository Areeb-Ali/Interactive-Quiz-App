// Adding Questions
const questions = [
  {
    question:
      "Which of the following is NOT a valid way to declare a variable in JavaScript?",
    answers: [
      { text: 'var name ="John";', correct: false },
      { text: "let age = 30;", correct: false },
      { text: "const PI = 3.14;", correct: false },
      { text: "int x = 10;", correct: true }, //True that option which was correct
    ],
  },
  {
    question: "What is the purpose of a variable?",
    answers: [
      { text: "To store data in memory.", correct: false },
      { text: "To perform calculations.", correct: false },
      { text: "To control the flow of a program.", correct: false },
      { text: "All of the above.", correct: true }, //True that option which was correct
    ],
  },
  {
    question:
      " What is the difference between let and const keywords for variable declaration?",
    answers: [
      { text: "let can be reassigned, while const cannot.", correct: true }, //True that option which was correct
      {
        text: "const is used for primitive data types, while let is used for complex data types.",
        correct: false,
      },
      { text: "let is slower than const.", correct: false },
      { text: "There is no difference.", correct: false },
    ],
  },
  {
    question: "Which operator is used to compare two values in JavaScript?",
    answers: [
      { text: "=", correct: false },
      { text: "==", correct: false },
      { text: "===", correct: false },
      { text: "All of the above.", correct: true }, //True that option which was correct
    ],
  },
  {
    question: "What is the difference between == and === operators?",
    answers: [
      {
        text: "== checks for loose equality (value equality), while === checks for strict equality (value and type equality).",
        correct: true,
      },
      {
        text: "== is used for numbers, while === is used for strings.",
        correct: false,
      }, //True that option which was correct
      { text: "== is faster than ===.", correct: false },
      { text: "There is no difference.", correct: false },
    ],
  },
  {
    question:
      "Which of the following statements is NOT a valid conditional statement in JavaScript?",
    answers: [
      { text: "if (x > 0) { ... }", correct: false },
      { text: "if x > 0 { ... } (missing parentheses)", correct: true }, //True that option which was correct
      { text: "else if (y < 10) { ... }", correct: false },
      { text: "switch (value) { case 1: ...; break; }", correct: false },
    ],
  },
  {
    question: "What is the purpose of an else statement?",
    answers: [
      { text: "To execute code if the if condition is false.", correct: true },
      { text: "To loop through a block of code.", correct: false }, //True that option which was correct
      { text: "To define a variable.", correct: false },
      { text: "To terminate a program.", correct: false },
    ],
  },
  {
    question: "What is the purpose of a switch statement?",
    answers: [
      {
        text: "To compare a value against multiple possible cases.",
        correct: true,
      },
      { text: "To loop through a sequence of numbers.", correct: false }, //True that option which was correct
      { text: "To define a function.", correct: false },
      { text: "To access elements in an array.", correct: false },
    ],
  },
  {
    question: "What is DOM manipulation in JavaScript?",
    answers: [
      {
        text: "The process of modifying the structure and content of a web page using JavaScript.",
        correct: true,
      },
      {
        text: "A type of variable used to store HTML elements.",
        correct: false,
      }, //True that option which was correct
      { text: "A function for making network requests.", correct: false },
      { text: "A library for creating user interfaces.", correct: false },
    ],
  },
  {
    question:
      "Which method is used to get a reference to an element by its ID in the DOM?",
    answers: [
      { text: "getElementById()", correct: true },
      { text: "getElementByClass()", correct: false }, //True that option which was correct
      { text: "querySelector()", correct: false },
      { text: "document.get()", correct: false },
    ],
  },
  {
    question: "Which keyword is used to define a function in JavaScript?",
    answers: [
      { text: "function", correct: true },
      { text: "var", correct: false },
      { text: "const", correct: false },
      { text: "let", correct: false },
    ],
  },
  {
    question: "What method removes an element from its parent in the DOM?",
    answers: [
      { text: "removeChild(element)", correct: true },
      { text: "remove(element)", correct: false },
      { text: "delete(element)", correct: false },
      { text: "hide(element)", correct: false },
    ],
  },
  {
    question:
      "Which event listener is triggered when a user clicks on an element?",
    answers: [
      { text: "onclick", correct: true },
      { text: "onchange", correct: false },
      { text: "onmouseover", correct: false },
      { text: "onsubmit", correct: false },
    ],
  },
  {
    question: "Which operator is used for logical AND in JavaScript?",
    answers: [
      { text: "&&", correct: true },
      { text: "||", correct: false },
      { text: "!=", correct: false },
      { text: "<", correct: false },
    ],
  },
  {
    question: "What data type can store a single character in JavaScript?",
    answers: [
      { text: "string", correct: true },
      { text: "number", correct: false },
      { text: "boolean", correct: false },
      { text: "object", correct: false },
    ],
  },
  {
    question: "Which keyword is used to define a function in JavaScript?",
    answers: [
      { text: "function", correct: true },
      { text: "var", correct: false },
      { text: "const", correct: false },
      { text: "let", correct: false },
    ],
  },
  {
    question:
      "What is the difference between `innerHTML` and `textContent` when manipulating DOM elements?",
    answers: [
      {
        text: "innerHTML sets the HTML content, while textContent sets the text content only (excluding HTML tags).",
        correct: true,
      },
      {
        text: "They are the same and can be used interchangeably.",
        correct: false,
      },
      {
        text: "innerHTML is faster, while textContent is slower.",
        correct: false,
      },
      {
        text: "innerHTML is used for modifying styles, while textContent is used for text.",
        correct: false,
      },
    ],
  },
  {
    question:
      "What is the correct way to create a new element (e.g., paragraph) and append it to the body in the DOM?",
    answers: [
      {
        text: `const paragraph = document.createElement('p'); document.body.appendChild(paragraph);`,
        correct: true,
      },
      {
        text: `let p = new Element('p'); document.body.add(p);`,
        correct: false,
      },
      {
        text: `paragraph.create('p'); document.body.insert(paragraph);`,
        correct: false,
      },
      { text: `document.body.addParagraph('New paragraph');`, correct: false },
    ],
  },
  {
    question: "What does the `else if` statement do in a conditional block?",
    answers: [
      {
        text: "Checks a new condition if the previous `if` condition was false",
        correct: true,
      },
      {
        text: "Executes code if all previous conditions were false",
        correct: false,
      },
      { text: "Ends the conditional block", correct: false },
      { text: "Repeats the previous `if` condition", correct: false },
    ],
  },
  {
    question: "How can you add a class to an element using DOM manipulation?",
    answers: [
      { text: `element.classList.add('class-name');`, correct: true },
      { text: `element.className = 'class-name';`, correct: false },
      { text: `element.setAttribute('class', 'class-name');`, correct: false },
      { text: `element.addClass('class-name');`, correct: false },
    ],
  },
];
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuize() {
  currentQuestionIndex = 0;
  let score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  let currentQuestion = question[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML; = questionNo + ". " + currentQuestion.question;

  
}
