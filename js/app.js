/*------------ Constants ------------*/
import { getCategory } from "../data/answers.js"




/*------------ Variables ------------*/
// const prompts = []
let category = {}




/*---- Cached Element References ----*/
const startBtn = document.querySelector('#start-button')

// const promptContainer = document.querySelector('#prompt-container')
const btnZero = document.querySelector('#answer-0')
const btnOne = document.querySelector('#answer-1')
const btnTwo = document.querySelector('#answer-2')
const btnThree = document.querySelector('#answer-3')


/*--------- Event Listeners ---------*/
startBtn.addEventListener('click', function(evt){
  category = getCategory(0) 
  console.log('Start Button!', category)
})

btnZero.addEventListener('click', () => {
  // const newAnswerZero = getCategory()
  // categories.push(newAnswerZero)
  // console.log(categories)
  // console.log('Answer 0')
})

// for selected topic ('tvFilm', 'music', 'popCulter') 
//generate question and corresponding answer choices (as buttons) 

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