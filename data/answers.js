const tvFilm = [
  {
  question: "What was the #1 watch TV show in 1999",
  image: 'friends.png',
  choices: ['Friends', 'ER', 'Fraiser', 'Seinfeld'], 
  answerIdx: 0
  },
  // -->  ADD MORE OBJECTS TO ARRAY
]

//  use image like -> `./public/${image}`


const sports = [
  {
  question: "The Dream Team won Olympic gold in what year's games?",
  choices: ['1992', '1994', '1996', '1998'],
  answerIdx: 0
  },
]

const popCulture = [
  {question: "What stuffed animal fad debuted in 1993?",
  choices: ['Cabbage Patch Kids', 'Pokemon', 'Beanie Babies', 'Looney Tunes Plushies'],
  answerIdx: 2
  },
]









const categories = [{name: 'TV & Film', img:'', questions: tvFilm}]

function getCategory(index) {
  return categories[index]
}

export {
  getCategory,
}