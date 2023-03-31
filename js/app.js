/*------------ Constants ------------*/
import { getRandomPrompt } from "../data/prompts.js"
import { getAnswers } from "../data/answers.js"



/*------------ Variables ------------*/
const prompts = []
const answers = []




/*---- Cached Element References ----*/
const startBtn = document.querySelector('#start-button')

// const promptContainer = document.querySelector('#prompt-container')
const btnZero = document.querySelector('#answer-0')
const btnOne = document.querySelector('#answer-1')
const btnTwo = document.querySelector('#answer-2')
const btnThree = document.querySelector('#answer-3')


/*--------- Event Listeners ---------*/
startBtn.addEventListener('click', function(evt){
  console.log('Start Button!')
})

btnZero.addEventListener('click', () => {
  const newAnswerZero = getAnswers()
  answers.push(newAnswerZero)
  console.log(answers)
  console.log('Answer 0')
})

btnOne.addEventListener('click', function(evt){
  console.log('Answer 1')
})
btnTwo.addEventListener('click', function(evt){
  console.log('Answer 2')
})
btnThree.addEventListener('click', function(evt){
  console.log('Answer 3')
})



/*------------ Functions ------------*/
// function correctAnswer() {

// }