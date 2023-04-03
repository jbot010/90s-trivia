/*------------ Constants ------------*/
import { getCategory, categoryCount } from "../data/answers.js"

/*------------ Variables ------------*/
// const prompts = []
let category = {}
let categoryIndex = 0
let questionIndex = 0
let scores = []
// [[0,0], [0,0], [0,0] ] 
// [[2,5]]   

/*---- Cached Element References ----*/
const startBtn = document.querySelector('#start-button')
const NextQBtn = document.querySelector('#next-question')

const categoryContainer = document.querySelector('#category-container')
const questionContainer = document.querySelector('#question-container')
const choicesContainer = document.querySelector('#choices-container')
const answerContainer = document.querySelector('#answer-container')

/*------------- Scoring -----------*/
//initial score
function addCatToScore(){
  scores[categoryIndex] = [0, category.questions.length]
}

function updateCatScore(){
  scores[categoryIndex][0] = scores[categoryIndex][0] + 1
}

//TODO -> create renderFinalScore fn
/*--------- Event Listeners ---------*/
startBtn.addEventListener('click', function(evt){
  setCategory()
  renderCategory()
  addCatToScore()
  renderQandA()
  renderNextBtn()
  hidePlayBtn() 
  console.log(hidePlaybtn)
})

NextQBtn.addEventListener('click',function(evt){
  handleNextQuestion()
})

/*------------ Functions ------------*/
function hidePlayBtn(evt) {
  document.getElementById("start-button").hidden = true
  // document.getElementById("start-button").hidden = false
}

function init() {

}

function renderNextBtn(){
  NextQBtn.innerHTML = `<button class="next-question" id="next-btn">Next Question</button>`
  console.log(NextQBtn.innerHTML);
}


/*------------- Categories -----------*/
function setCategory(){
  category = getCategory(categoryIndex)
  //call setQuestion(0) 
}

function renderCategory(){
  const categoryName = category.name
  categoryContainer.innerHTML = `<h3>${categoryName}</h3>`
}

function changeCategory(){
  // console.log(categoryCount, categoryIndex);
  if (categoryIndex === categoryCount - 1){
//TODO -> Add end of game fn 
    console.log('End of Game');
  } else {
    categoryIndex = categoryIndex + 1
    questionIndex = 0
    category = getCategory(categoryIndex)
    addCatToScore()
    renderCategory()
    renderQandA()
  }
}

//TODO -> create function to update the category

/*------------- Questions -----------*/
function setQuestionIndexToNum(num) {
  // console.log(num);
  questionIndex = num
  //update questionsIndex
}

function renderQandA(){
  // console.log(category)
  const prompt = category.questions[questionIndex]
  questionContainer.innerHTML = `<h4>${prompt.question}</h4>`
  let choicesEls =  ''
  
  prompt.choices.forEach((choice, index) => {
    choicesEls = choicesEls + `<button class="choice-button" id="choice-${index}">${choice}</button>`

  })
  choicesContainer.innerHTML = choicesEls
  const allChoicesButtons = choicesContainer.querySelectorAll('.choice-button')
  for ( let i = 0; i < allChoicesButtons.length; i++ ){
    const choiceEl = allChoicesButtons[i]
    choiceEl.addEventListener('click', handleSelect)  
  }

}

function handleSelect(evt){
  const value = evt.target.id
  const idxString = value.split('choice-')[1]
  const choiceIndex = parseInt(idxString)
  // console.log(choiceIndex, evt);
  const currentQuestion = category.questions[questionIndex]
  const answerIdx = currentQuestion.answerIdx
  if (choiceIndex === answerIdx) {
    updateCatScore()
    // console.log('Correct');
  //TODO -> add else statement, add correct or incorrect visual or audio feedback
  // if answer is correct, update score, else don't update score
  answerContainer.innerHTML = `<h4 class="answer" id="correct-answer"> You are correct!</h4>`
} else {
  //TODO -> show correct answer
  // console.log(`The Correct Answer is: ${currentQuestion.choices[answerIdx]}`);
  answerContainer.innerHTML = `<h4 class="answer" id="incorrect-answer"> Wrong! The Answer is: ${currentQuestion.choices[answerIdx]}</h4>`
}
}

function handleNextQuestion(){
  answerContainer.innerHTML = ''
  const lastQuestionIdx = category.questions.length - 1
  // console.log(category)
  // console.log(category.questions)
  console.log(questionIndex, lastQuestionIdx)
  
  if (questionIndex < lastQuestionIdx) {
    setQuestionIndexToNum(questionIndex + 1)
    renderQandA()
  } else {
    changeCategory()
  }


/*------------- End of Game -----------*/
//TODO -> create end of game fn
  function resetGame(){
    //start from beginning
    //start categoryIndex at 0
    //start questionsIndex at 0
    //reset score to empty array []
    //reset category to empty object {}
    //set choicesContainer.innerHTML = '' an empty string
    categoryIndex = 0
    questionIndex = 0
    scores = []
    category = {}
    choicesContainer.innerHTML = ''
    setQuestionIndexToNum(0)
  }
  //need to find if current questionIndex is less than prompts.length - 1 if so proceed, otherwise handle ending category round
  //update questionIndex by + 1
  //next, call renderQandA
}

// function setCategoryIndex(num){
//   categoryIndex = categoryIndex + 1
// }