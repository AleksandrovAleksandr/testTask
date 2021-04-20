import {connect} from 'react-redux'
import {addQuestionText} from '../../store/actions/actions'

const Question = ({question, addText}) => {
  return (
    <input
      type="text"
      value={question.text}
      placeholder="Введите название вопроса..."
      onChange={e => addText(e.target.value)}
    />
  )
}

const mapStateToProps = state => ({
  question: state.quiz.question,
})

const mapDispatchToProps = dispatch => ({
  addText: text => dispatch(addQuestionText(text)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Question)
