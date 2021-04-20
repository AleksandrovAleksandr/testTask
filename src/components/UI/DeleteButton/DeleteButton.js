const DeleteButton = props => {
  return (
    <button onClick={props.onClick}>
      <span>Удалить поле с ответом</span>
    </button>
  )
}

export default DeleteButton
