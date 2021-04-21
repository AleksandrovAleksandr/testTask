import './Button.scss'

const Button = ({title}) => {
  return (
    <button type="button" className="button">
      {title}
    </button>
  )
}

export default Button
