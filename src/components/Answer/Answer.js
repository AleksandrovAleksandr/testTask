import {connect} from 'react-redux'
import {
  addAnswerText,
  setRightAnswer,
  pickRightAnswers,
} from '../../store/actions/actions'

const Answer = ({
  id,
  text,
  isRightAnswer,
  questionId,
  typeOfAnswer,
  setRightAnswer,
  pickRightAnswers,
  addText,
}) => {
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={e => addText(id, e.target.value)}
      />
      {typeOfAnswer === 'one' && (
        <input
          type="radio"
          name={questionId}
          value={id}
          checked={isRightAnswer}
          onChange={() => {
            setRightAnswer(id)
          }}
        />
      )}
      {typeOfAnswer === 'many' && (
        <input
          type="checkbox"
          checked={isRightAnswer}
          onChange={() => {
            pickRightAnswers(id)
          }}
        />
      )}
    </div>
  )
}

const mapStateToProps = state => ({
  questionId: state.quiz.question.id,
  typeOfAnswer: state.quiz.typeOfAnswer,
})

const mapDispatchToProps = dispatch => ({
  setRightAnswer: id => dispatch(setRightAnswer(id)),
  pickRightAnswers: id => dispatch(pickRightAnswers(id)),
  addText: (id, text) => dispatch(addAnswerText(id, text)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Answer)
