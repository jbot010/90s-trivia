/*------------ Constants ------------*/
import { getCategory, categoryCount } from "../data/answers.js"

/*------------ Variables ------------*/
// const prompts = []
let category = {}
let categoryIndex = 0
let questionIndex = 0
let scores = []
let totalScore = [0,0]

const startSound = new Audio ('../assets/audio/start.mp3')
const youLose = new Audio ('../assets/audio/lose.mp3')
const youWin = new Audio ('../assets/audio/win.mp3')


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
const timerContainer = document.querySelector('#timer-content')

/*------------- Scoring -----------*/
function addCatToScore(){
  scores[categoryIndex] = [0, category.questions.length]  
}

function updateCatScore(){
  scores[categoryIndex][0] = scores[categoryIndex][0] + 1
}

function getCategoryScore(){
  const score = scores[categoryIndex][0]
  const totalQuesitons = scores[categoryIndex][1]
  const currentTotalScore = totalScore[0]
  const currentTotalQuestions = totalScore[1]
  totalScore = [score + currentTotalScore, totalQuesitons + currentTotalQuestions] 
}
function resetGame(){
  init()
}

function renderScore(score){
  let finalScore = ''
  finalScoreContainer.innerHTML = finalScore + `<h2> Final Score = ${score[0]} out of ${score[1]}</h2> <h3> Great Job!</h3>`
  if (score[0] > 9){
    youWin.volume = .05
    youWin.play()
    resetBtn.hidden = false
  } else {
  finalScoreContainer.innerHTML = finalScore + `<h2> Final Score = ${score[0]} out of ${score[1]}</h2> <h3> Nice Try! </h3>`
    youLose.volume = .05
    youLose.play()
    resetBtn.hidden = false
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
  startSound.volume = .05
  startSound.play()
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
  totalScore = [0,0]
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
let timeLeft = 10
let timer
function handleTimer(){
timer = setInterval(function() {
  timerContainer.textContent = timeLeft + ' seconds remaining.'
  timeLeft -= 1
  if (timeLeft < 0) {
      timerContainer.textContent = 'Finished'
      // disableChoicesBtns()
      handleSelect(null)
  }
}, 1000)
}

function stopTimer(){
  clearInterval(timer)
  timeLeft = 10
  timerContainer.textContent = ''
}

function disableChoicesBtns(){
  const allChoicesButtons = choicesContainer.querySelectorAll('.choice-button')
  for ( let i = 0; i < allChoicesButtons.length; i++ ){
    const choiceEl = allChoicesButtons[i]
    choiceEl.disabled = true 
  }
}

function setQuestionIndexToNum(num) {
  questionIndex = num
  //update questionsIndex
}

function renderQandA(){
  handleTimer()
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
  const currentQuestion = category.questions[questionIndex]
  const answerIdx = currentQuestion.answerIdx
  const correctAnswer = currentQuestion.choices[answerIdx]
  stopTimer()
  if(evt){
  const value = evt.target.id
  const idxString = value.split('choice-')[1]
  const choiceIndex = parseInt(idxString)
  if (choiceIndex === answerIdx) {
    updateCatScore()
  answerContainer.innerHTML = `<h4 class="answer" id="correct-answer"> You are correct!</h4>`
} else {
  answerContainer.innerHTML = `<h4 class="answer" id="incorrect-answer"> Wrong! The Answer is: ${correctAnswer}</h4>`
}
} else {
  answerContainer.innerHTML = `<h4 class="answer" id="incorrect-answer"> Time's up! The Answer is: ${correctAnswer}</h4>`
}
const imageEl = document.createElement('img')
imageEl.src = `${currentQuestion.image}`
answerContainer.appendChild(imageEl)
disableChoicesBtns()
}

function handleNextQuestion(){
  stopTimer()
  answerContainer.innerHTML = ''
  const lastQuestionIdx = category.questions.length - 1 
  if (questionIndex < lastQuestionIdx) {
    setQuestionIndexToNum(questionIndex + 1)
    renderQandA()
  } else {
    changeCategory()
  }
}