import './Checkbox.scss'
const Checkbox = ({checked, onChange}) => (
  <label className="checkbox">
    <input
      type="checkbox"
      className="checkbox__input"
      checked={checked}
      onChange={onChange}
    />
    <span className="checkbox__box"></span>
  </label>
)

export default Checkbox
