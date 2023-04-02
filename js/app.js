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

const categoryContainer = document.querySelector('#category-container')
const questionContainer = document.querySelector('#question-container')
const choicesContainer = document.querySelector('#choices-container')

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
  setCategory()
  renderCategory()
  addCatToScore()
  renderQandA() 
  // console.log(category, scores)
})

btnNextQ.addEventListener('click',function(evt){
  changeCategory()
  renderCategory()
  addCatToScore()
  renderQandA()
})
//check if question is last question. Needs to change category
//create function to update the category

/*------------ Functions ------------*/
function init() {

}

function renderCategory(){
  const categoryName = category.name
  categoryContainer.innerHTML = `<h3>${categoryName}</h3>`

}

function setCategory(){
  category = getCategory(categoryIndex)
}

function changeCategory(){
  console.log(categoryCount, categoryIndex);
  if (categoryIndex === categoryCount - 1){
    console.log('End of Game');
  } else {
    categoryIndex = categoryIndex + 1
    setCategory()
  }
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
  const allChoices = choicesContainer.querySelectorAll('.choice-button')
  for ( let i = 0; i < allChoices.length; i++ ){
    const choiceEl = allChoices[i]
    choiceEl.addEventListener('click', handleSelect)  
  }


  //   const divElement = document.createElement('div')
  //   divElement.innerHTML = `<button id="choice-${index}">${choice}</button>`
  //   choicesContainer.appendChild(divElement)
  //   const choiceEl = document.querySelector(`#choice-${index}`)
  //   choiceEl.addEventListener('click', handleSelect)
  //   // console.log(choiceEl);
  // })
}

function handleSelect(evt){
  const value = evt.target.id
  const idxString = value.split('choice-')[1]
  const choiceIndex = parseInt(idxString)
  console.log(choiceIndex, evt);
  const answerIdx = category.questions[questionIndex].answerIdx
  if (choiceIndex === answerIdx) {
    updateCatScore()
    console.log('Correct');
  //TODO -> add else statement, add correct or incorrect visual or audio feedback
  // if answer is correct, update score, else don't update score
} else {
  console.log('Incorrect');
}
// console.log(typeof choiceIndex);

}

function handleNextQuestion(){
  //need to find if current questionIndex is less than prompts.length - 1 if so proceed, otherwise handle ending category round
  //update questionIndex by + 1
  //next, call renderQandA
}

