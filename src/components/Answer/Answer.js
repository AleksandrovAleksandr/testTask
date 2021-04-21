import Radio from '../UI/Radio/Radio'
import Checkbox from '../UI/Checkbox/Checkbox'

import {connect} from 'react-redux'
import {
  addAnswerText,
  setRightAnswer,
  pickRightAnswers,
} from '../../store/actions/actions'
import InputText from '../UI/InputText/InputText'

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
      <InputText value={text} onChange={e => addText(id, e.target.value)} />
      {typeOfAnswer === 'one' && (
        <Radio
          name={questionId}
          value={id}
          checked={isRightAnswer}
          onChange={() => {
            setRightAnswer(id)
          }}
        />
      )}
      {typeOfAnswer === 'many' && (
        <Checkbox
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
