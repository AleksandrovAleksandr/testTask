import {connect} from 'react-redux'

import {setTypeOfAnswer} from '../../store/actions/actions'

const TypeOfAnswer = ({typeOfAnswer, setTypeOfAnswer}) => {
  return (
    <select
      name="isManyRightAnswers"
      value={typeOfAnswer}
      onChange={e => setTypeOfAnswer(e.target.value)}
    >
      <option value="one">Один верный</option>
      <option value="many">Множественный выбор</option>
    </select>
  )
}

const mapStateToProps = state => ({
  typeOfAnswer: state.quiz.typeOfAnswer,
})

const mapDispatchToProps = dispatch => ({
  setTypeOfAnswer: value => dispatch(setTypeOfAnswer(value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TypeOfAnswer)
