import {connect} from 'react-redux'
import {deleteAnswer, setAnswer} from '../../store/actions/actions'
import Answer from '../Answer/Answer'
import DeleteButton from '../UI/DeleteButton/DeleteButton'
import SetAnswerButton from '../UI/SetAnswerButton/SetAnswerButton'

const Answers = ({answers, deleteAnswer, setAnswer}) => {
  return (
    <>
      <ol>
        {answers.map((answer, i) => (
          <li key={i}>
            <Answer
              id={answer.id}
              text={answer.text}
              isRightAnswer={answer.isRightAnswer}
            />
            <DeleteButton
              onClick={() => {
                deleteAnswer(answer.id)
              }}
            />
          </li>
        ))}
      </ol>

      <SetAnswerButton
        onClick={() => {
          setAnswer()
        }}
      />
    </>
  )
}

const mapStateToProps = state => ({
  answers: state.quiz.answers,
})

const mapDispatchToProps = dispatch => ({
  deleteAnswer: id => dispatch(deleteAnswer(id)),
  setAnswer: () => dispatch(setAnswer()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Answers)
