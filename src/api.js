//Fetch Quizes

const fetchQuizes = async () => {
  const res = await fetch('http://localhost:5000/quizes')
  const data = await res.json()

  return data
}

// Fetch Quiz
const fetchQuiz = async id => {
  const res = await fetch(`http://localhost:5000/quizes${id}`)
  const data = await res.json()

  return data
}

//Add Quiz

const addQuiz = async quiz => {
  const res = await fetch('http://localhost:5000/quizes', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify.quiz,
  })

  const data = await res.json()

  setquizes([...quizes, data])
}

//Delete Quiz

const deleteQuiz = async id => {
  await fetch(`http://localhost:5000/quizes/${id}`, {
    method: 'DELETE',
  })

  setquizes(quizes.filter(quiz => quiz.id !== id))
}

// Toggle Reminder
const toggleReminder = async id => {
  const taskToToggle = await fetchTask(id)
  const updTask = {...taskToToggle, reminder: !taskToToggle.reminder}

  const res = await fetch(`http://localhost:5000/quizes/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(updTask),
  })

  const data = await res.json()

  setQuizes(
    quizes.map(task =>
      task.id === id ? {...task, reminder: data.reminder} : task
    )
  )
}

console.log(quizes)
