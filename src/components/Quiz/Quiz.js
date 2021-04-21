import Answers from '../Answers/Answers'
import Question from '../Question/Question'
import TypeOfAnswer from '../TypeOfAnswer/TypeOfAnswer'
import Button from '../UI/Button/Button'

const Quiz = () => {
  return (
    <>
      <Question />
      <TypeOfAnswer />
      <Answers />
      <Button title="Готово" />
    </>
  )
}

export default Quiz
