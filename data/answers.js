const tvFilm = [
  { number: 1,
  question: "What was the #1 watch TV show in 1999",
  image: 'friends.png',
  choices: ['Friends', 'ER', 'Fraiser', 'Seinfeld'], 
  answerIdx: 0,
  used: false,
  },
  {question: "Which animated film was the first Disney film to be released on DVD?",
  image: 'dvd.png',
  choices: ['Aladdin', 'The Lion King', 'Fantasia', 'Mulan' ],
  answerIdx: 3
  },
  {question: "What 1997 action film stars John Malkovich, Nicolas Cage, and John Cusack?",
  image: 'cage.png',
  choices: ['Say Anything', 'Being John Malkovich', 'Con Air', 'Face/Off' ],
  answerIdx: 2
  },
  {question: "What is the name of the island where Jurassic Park is set?",
  image: 'island.png',
  choices: ['Oahu', 'Dino Island', 'Isla Nublar', 'Isla Nueva' ],
  answerIdx: 2
  },
  {question: "What is the name of the movie where Bruce Willis plays a 23rd century New York City cabbie?",
  image: 'nyc.png',
  choices: ['Die Hard', 'The Fifth Element', '12 Monkeys', 'Last Man Standing' ],
  answerIdx: 1
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

const categories = [
  {name: 'TV & Film', img:'', questions: tvFilm}, 
  {name: 'Sports', img: '', questions: sports}, 
  {name: 'Pop Culture', img: '', questions: popCulture}]

const categoryCount = categories.length

function getCategory(index) {
  return categories[index]
}

export {
  getCategory,
  categoryCount
}