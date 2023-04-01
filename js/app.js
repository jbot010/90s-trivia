/*------------ Constants ------------*/
import { getCategory } from "../data/answers.js"



/*------------ Variables ------------*/
// const prompts = []
let category = {}
let categoryIndex = 0
let questionIndex = 0
function setCategory(){
  categoryIndex = categoryIndex + 1
  //TODO -> get category amount by length
} 

let scores = []
// [[0,0], [0,0], [0,0] ] 
// [[2,5]]   
/*---- Cached Element References ----*/
const startBtn = document.querySelector('#start-button')
const categoryContainer = document.querySelector('#category-container')
const questionContainer = document.querySelector('#question-container')
const choicesContainer = document.querySelector('#choices-container')
// const btnZero = document.querySelector('#answer-0')
// const btnOne = document.querySelector('#answer-1')
// const btnTwo = document.querySelector('#answer-2')
// const btnThree = document.querySelector('#answer-3')

const btnNextQ = document.querySelector('#next-question')

//initial score
function addCatToScore(){
  scores[categoryIndex] = [0, category.questions.length]
}

function updateCatScore(){
  scores[categoryIndex][0] = scores[categoryIndex][0] + 1

}
/*--------- Event Listeners ---------*/
startBtn.addEventListener('click', function(evt){
  category = getCategory(0)
  renderCategory()
  addCatToScore()
  renderQandA() 
  console.log(category, scores)
})

// btnZero.addEventListener('click', () => {
//   // const newAnswerZero = getCategory()
//   // categories.push(newAnswerZero)
//   // console.log(categories)
//   console.log('Answer 0')
// })

// // for selected topic ('tvFilm', 'music', 'popCulture') 
// //generate question and corresponding answer choices (as buttons) 

// btnOne.addEventListener('click', function(evt){
//   console.log('Answer 1')
// })
// btnTwo.addEventListener('click', function(evt){
//   console.log('Answer 2')
// })
// btnThree.addEventListener('click', function(evt){
//   console.log('Answer 3')
// })
// btnNextQ.addEventListener('click', function(){
//   console.log('Next Question');
// })


/*------------ Functions ------------*/
function init() {

}

function renderCategory(){
  const categoryName = category.name
  categoryContainer.innerHTML = `<h3>${categoryName}</h3>`

}

function renderQandA(){
  // console.log(category)
  const prompt = category.questions[questionIndex]
  questionContainer.innerHTML = `<h4>${prompt.question}</h4>`
  prompt.choices.forEach((choice, index) => {
    const divElement = document.createElement('div')
    divElement.innerHTML = `<button id="choice-${index}">${choice}</button>`
    choicesContainer.appendChild(divElement)
    const choiceEl = document.querySelector(`#choice-${index}`)
    choiceEl.addEventListener('click', handleSelect)
    console.log(choiceEl);
  })
}

function handleSelect(evt){
  const value = evt.target.id
console.log(value, evt);
//split value at 'choice- '
//convert string to number
//compare number to answerIdx
//add to score to object

}

function handleNextQuestion(){
  //need to find if current questionIndex is less than prompts.length - 1 if so proceed, otherwise handle ending category round
  //update questionIndex by + 1
  //next, call renderQandA
}

