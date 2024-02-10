import { string, func, object, bool, oneOf } from 'prop-types'
import Icon from '../Icon/Icon'
import  styles  from './button.module.scss'

const Button = ({ text, onClick, style, disabled, type, form, autoFocus, icon, variant }) => {
  return (
    <button
      className={`${styles["buttonContainer"]} ${styles[variant]}`}
      {...{ disabled , onClick, type, form, autoFocus, style }}
    >
      {icon && <Icon {...{icon}} />}
      {text && <span>{text}</span>}
    </button>
  )
}

Button.propTypes = {
  text: string.isRequired,
  onClick: func,
  style: object,
  disabled: bool,
  type: oneOf(['button', 'submit', 'reset']),
  form: string,
  autoFocus: bool,
  variant: oneOf(["small", "medium", "large"])
}

Button.defaultProps = {
  disabled: false,
  type: 'submit',
  autoFocus: false,
  variant: "medium"
}

export default Button
