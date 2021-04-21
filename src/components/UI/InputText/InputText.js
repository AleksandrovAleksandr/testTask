import './InputText.scss'
const InputText = ({value, placeholder = '', onChange}) => (
  <input
    className="input-text"
    type="text"
    value={value}
    placeholder={placeholder}
    onChange={onChange}
  />
)
export default InputText
