/*------------ Constants ------------*/
import { getCategory, categoryCount } from "../data/answers.js"

/*------------ Variables ------------*/
// const prompts = []
let category = {}
let categoryIndex = 0
let questionIndex = 0
let scores = []
let totalScore = [0,0]
let startTimeLeft = 3


/*---- Cached Element References ----*/
const startBtn = document.querySelector('#start-button')
const NextQBtn = document.querySelector('#next-question')
const categoryContainer = document.querySelector('#category-container')
const questionContainer = document.querySelector('#question-container')
const choicesContainer = document.querySelector('#choices-container')
const answerContainer = document.querySelector('#answer-container')
const finalScoreContainer = document.querySelector('#final-score')
const resetBtn = document.querySelector('#reset-button')
const gameContent = document.querySelector('#game-container')
const gameIntro = document.querySelector('#game-intro')

// let startTimer = setInterval(function(){
//   startTimeLeft -= 1
//   console.log(startTimeLeft);
// }, 1000)


/*------------- Scoring -----------*/
function addCatToScore(){
  scores[categoryIndex] = [0, category.questions.length]  
}

function updateCatScore(){
  scores[categoryIndex][0] = scores[categoryIndex][0] + 1
  console.log(scores[categoryIndex]);
}

function getCategoryScore(){
  const score = scores[categoryIndex][0]
  const totalQuesitons = scores[categoryIndex][1]
  const currentTotalScore = totalScore[0]
  const currentTotalQuestions = totalScore[1]
  totalScore = [score + currentTotalScore, totalQuesitons + currentTotalQuestions] 
}
//TODO -> create end of game fn
function resetGame(){
  init()
}
//need to find if current questionIndex is less than prompts.length - 1 if so proceed, otherwise handle ending category round
//update questionIndex by + 1
//next, call renderQandA

//TODO -> create renderFinalScore fn
function renderScore(score){
  let finalScore = ''
  finalScoreContainer.innerHTML = finalScore + `<h2> Final Score = ${score[0]} out of ${score[1]}</h2>`
  if (score[0] > 10){
  console.log('great job!');
  } else {
    console.log('🙁 try again!');
  } 
  renderResetBtn()
}

function renderResetBtn(){
  resetBtn.innerHTML = `<button class="reset-button">Try again!</button>`
  resetBtn.addEventListener('click', resetGame)
}

/*--------- Event Listeners ---------*/
startBtn.addEventListener('click', function(evt){
  setCategory()
  renderCategory()
  addCatToScore()
  renderQandA()
  renderNextBtn()
  hidePlayBtn()
})

NextQBtn.addEventListener('click',function(evt){
  handleNextQuestion()
})


/*------------ Functions ------------*/
function hidePlayBtn(evt) {
  startBtn.hidden = true
}

function init() {
  categoryIndex = 0
  questionIndex = 0
  scores = []
  category = {}
  choicesContainer.innerHTML = ''
  finalScoreContainer.innerHTML = ''
  setQuestionIndexToNum(0)
  startBtn.hidden = false
  resetBtn.hidden = true
 // gameIntro.appendChild = document.createElement('button')
}

function renderNextBtn(){
  NextQBtn.innerHTML = `<button class="next-question">Next Question</button>`
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

//TODO -> Create fn to clear board, then renderScore. Can be re use with resetGame
//TODO -> Add end of game fn
function clearGame(){
  categoryContainer.innerHTML = ''
  questionContainer.innerHTML = ''
  choicesContainer.innerHTML = ''
  answerContainer.innerHTML = ''
  NextQBtn.innerHTML = ''
}

function endGame(){
  clearGame()
  renderScore(totalScore)
  console.log('End of Game');

}

function changeCategory(){
  getCategoryScore()
  if (categoryIndex === categoryCount - 1){
    endGame()
  } else {
    categoryIndex = categoryIndex + 1
    questionIndex = 0
    category = getCategory(categoryIndex)
    addCatToScore()
    renderCategory()
    renderQandA()
  }
}

/*------------- Questions -----------*/
function setQuestionIndexToNum(num) {
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
    console.log(choiceEl)
      
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
//TODO -> DISABLE after click    
    // console.log('Correct');
  //TODO -> add else statement, add correct or incorrect visual or audio feedback
  answerContainer.innerHTML = `<h4 class="answer" id="correct-answer"> You are correct!</h4>`
} else {
  answerContainer.innerHTML = `<h4 class="answer" id="incorrect-answer"> Wrong! The Answer is: ${currentQuestion.choices[answerIdx]}</h4>`
  console.log('INCORRECT');
} 
const imageEl = document.createElement('img')
imageEl.src = `${currentQuestion.image}`
answerContainer.appendChild(imageEl)
const allChoicesButtons = choicesContainer.querySelectorAll('.choice-button')
for ( let i = 0; i < allChoicesButtons.length; i++ ){
  const choiceEl = allChoicesButtons[i]
  choiceEl.disabled = true  
}
}





function handleNextQuestion(){
  answerContainer.innerHTML = ''
  const lastQuestionIdx = category.questions.length - 1 
  if (questionIndex < lastQuestionIdx) {
    setQuestionIndexToNum(questionIndex + 1)
    renderQandA()
  } else {
    changeCategory()
  }
}