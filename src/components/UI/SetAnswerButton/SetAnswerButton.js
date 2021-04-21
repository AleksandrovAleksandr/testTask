import './SetAnswerButton.scss'
const SetAnswerButton = props => {
  return (
    <button
      className="create-answer-button"
      type="button"
      onClick={props.onClick}
    >
      <span className="visuallyhidden">Добавить поле ответа</span>
    </button>
  )
}

export default SetAnswerButton
