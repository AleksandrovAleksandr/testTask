const answers = [
  {id: 1, text: 'green', isRightAnswer: false},
  {id: 2, text: 'blue', isRightAnswer: false},
  {id: 3, text: 'white', isRightAnswer: false},
  {id: 4, text: 'yellow', isRightAnswer: false},
]

const removeItem = (answers, id) => {
  const arr = answers.map(answer => Object.assign({}, answer))
  return arr.filter(a => a.id !== id)
}

const arr = removeItem(answers, 2)

console.log(answers)
console.log(arr)
console.log(answers)
