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


/*---- Cached Element References ----*/
const startBtn = document.querySelector('#start-button')
const categoryContainer = document.querySelector('#category-container')
const promptContainer = document.querySelector('#prompt-container')
const btnZero = document.querySelector('#answer-0')
const btnOne = document.querySelector('#answer-1')
const btnTwo = document.querySelector('#answer-2')
const btnThree = document.querySelector('#answer-3')

const btnNextQ = document.querySelector('#next-question')

/*--------- Event Listeners ---------*/
startBtn.addEventListener('click', function(evt){
  category = getCategory(0)
  renderCategory()
  renderQandA() 
  console.log(category)
})

btnZero.addEventListener('click', () => {
  // const newAnswerZero = getCategory()
  // categories.push(newAnswerZero)
  // console.log(categories)
  console.log('Answer 0')
})

// for selected topic ('tvFilm', 'music', 'popCulture') 
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
btnNextQ.addEventListener('click', function(){
  console.log('Next Question');
})


/*------------ Functions ------------*/
function init() {

}

function renderCategory(){
  const categoryName = category.name
  categoryContainer.innerHTML = `<h3>${categoryName}</h3>`

}

function renderQandA(){
  // console.log(category)
  const question = category.questions[questionIndex]
  promptContainer.innerHTML = `<h4>${question.question}</h4>`
}


// function updateQuestions() {
//   category.forEach((questionItem, index) => {
//     const prompt = promptContainer[index]

//   })
// }

// console.log(getCategory);
