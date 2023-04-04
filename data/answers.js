const tvFilm = [
  { number: 1,
    question: "What was the #1 watch TV show in 1999?",
    image: 'friends.png',
    choices: ['Friends', 'ER', 'Fraiser', 'Seinfeld'], 
    answerIdx: 0,
    used: false,
  },
  { question: "Which animated film was the first Disney film to be released on DVD?",
    image: 'dvd.png',
    choices: ['Aladdin', 'The Lion King', 'Fantasia', 'Mulan' ],
    answerIdx: 3
  },
  { question: "What 1997 action film stars John Malkovich, Nicolas Cage, and John Cusack?",
    image: 'cage.png',
    choices: ['Say Anything', 'Being John Malkovich', 'Con Air', 'Face/Off' ],
    answerIdx: 2
  },
  { question: "What is the name of the island where Jurassic Park is set?",
    image: 'island.png',
    choices: ['Oahu', 'Dino Island', 'Isla Nublar', 'Isla Nueva' ],
    answerIdx: 2
  },
  { question: "What is the name of the movie where Bruce Willis plays a 23rd century New York City cabbie?",
    image: 'nyc.png',
    choices: ['Die Hard with a Vengeance', 'The Fifth Element', '12 Monkeys', 'Last Man Standing' ],
    answerIdx: 1
  },
]

//  use image like -> `./public/${image}`


const sports = [
  { question: "The Dream Team won Olympic gold in what year's games?",
    image: 'nyc.png',
    choices: ['1992', '1994', '1996', '1998'],
    answerIdx: 0
  },
  { question: "Michael Jordan led the Chicago Bulls to how many championships?",
    image: 'nyc.png',
    choices: ['2', '3', '4', '6'],
    answerIdx: 3
  },
  { question: "Which country won the men's world cup in 1998?",
    image: 'nyc.png',
    choices: ['England', 'France', 'Brazil', 'Germany'],
    answerIdx: 1
  },
  { question: "“The Great One” is the nickname of this legend who spent the 90s with the LA Kings, St. Louis Blues, and New York Rangers.",
    image: 'nyc.png',
    choices: ['Mark Messier', 'Mario Lemieux', 'Sergei Fedorov', 'Wayne Gretzky'],
    answerIdx: 3
  },
  { question: "When did Major League Soccer kick off in the U.S.?",
    image: 'nyc.png',
    choices: ['1992', '1994', '1996', '1998'],
    answerIdx: 2
  },   
]

const popCulture = [
  { question: "What is considered the first reality TV show?",
    image: 'nyc.png',  
    choices: ['Survivor', 'Road Rules', 'The Real World', 'MTV Cribs'],
    answerIdx: 2
  },
  { question: "What was the bestselling video game console of the 1990s?",
    image: 'nyc.png',  
    choices: ['Super Nintendo', 'Sega Saturn', 'Nintendo 64', 'Sony Playstation'],
    answerIdx: 3
  },
  { question: "Which Spice Girls singer wasn't an original member of the group?",
    image: 'nyc.png',  
    choices: ['Sporty Spice', 'Ginger Spice', 'Posh Spice', 'Baby Spice'],
    answerIdx: 3
  },
  { question: "What fashion accessory was invented by a high school shop teacher?",
    image: 'nyc.png',  
    choices: ['Chia Pet', 'Slap Bracelets', 'Scrunchies', 'Fanny packs'],
    answerIdx: 1
  },
  { question: "From what country did the band Ace of Base come?",
    image: 'nyc.png',  
    choices: ['Finland', 'Sweden', 'England', 'France'],
    answerIdx: 1
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