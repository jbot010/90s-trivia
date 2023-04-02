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
const btnNextQ = document.querySelector('#next-question')

const categoryContainer = document.querySelector('#category-container')
const questionContainer = document.querySelector('#question-container')
const choicesContainer = document.querySelector('#choices-container')

//initial score
function addCatToScore(){
  scores[categoryIndex] = [0, category.questions.length]
}

function updateCatScore(){
  scores[categoryIndex][0] = scores[categoryIndex][0] + 1

}


// reset game -> reset score, cat index, question index
// start game -> get cat ( set score) 
// next category -> change category 

/*--------- Event Listeners ---------*/
startBtn.addEventListener('click', function(evt){
  setCategory()
  renderCategory()
  addCatToScore()
  renderQandA() 
  // console.log(category, scores)
})

btnNextQ.addEventListener('click',function(evt){
  handleNextQuestion()
  
})
//check if question is last question. Needs to change category
//create function to update the category

/*------------ Functions ------------*/
function init() {

}

function resetGame(){
  //start from beginning
  //start categoryIndex at 0
  //start questionsIndex at 0
  //reset score to empty array []
  //reset category to empty object {}
  //set choicesContainer.innerHTML = '' an empty string
  setQuestionIndexToNum(0)
}


/*--Categories--*/
function renderCategory(){
  const categoryName = category.name
  categoryContainer.innerHTML = `<h3>${categoryName}</h3>`
}

function setCategory(){
  category = getCategory(categoryIndex)
  //call setQuestion(0) 
}

// function setCategoryIndex(num){
//   categoryIndex = categoryIndex + 1

// }

function changeCategory(){
  // console.log(categoryCount, categoryIndex);
  if (categoryIndex === categoryCount - 1){

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
/*--Questions--*/
function setQuestionIndexToNum(num) {
  console.log(num);
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
    console.log('Correct');
  //TODO -> add else statement, add correct or incorrect visual or audio feedback
  // if answer is correct, update score, else don't update score
} else {
  //TODO -> show correct answer
  console.log('Incorrect');
  console.log(`The Correct Answer is: ${currentQuestion.choices[answerIdx]}`);
  questionContainer.innerHTML = `<h4>${prompt.question}</h4>`

}
// console.log(typeof choiceIndex);

}

function handleNextQuestion(){
  const lastQuestionIdx = category.questions.length - 1
  console.log(category)
  console.log(category.questions)
  console.log(questionIndex, lastQuestionIdx)
  
  if (questionIndex < lastQuestionIdx) {
    setQuestionIndexToNum(questionIndex + 1)
    renderQandA()
  } else {
    changeCategory()
  }
  //need to find if current questionIndex is less than prompts.length - 1 if so proceed, otherwise handle ending category round
  //update questionIndex by + 1
  //next, call renderQandA
}

