import {connect} from 'react-redux'
import {addQuestionText} from '../../store/actions/actions'
import InputText from '../UI/InputText/InputText'

const Question = ({question, addText}) => {
  return (
    <InputText
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
