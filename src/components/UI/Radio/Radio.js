import './Radio.scss'
const Radio = ({name, value, checked, onChange}) => (
  <label className="radio">
    <input
      className="radio__input"
      type="radio"
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
    />
    <span className="radio__box"></span>
  </label>
)

export default Radio
