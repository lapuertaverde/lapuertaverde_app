import { findIconDefinition, library } from '@fortawesome/fontawesome-svg-core'

import {
  faKey,
  faUser,
  faPlus,
  faMinus,
  faXmark,
  faEye,
  faAsterisk,
  faCaretDown,
  faCaretUp,
  faClipboardCheck,
  faTriangleExclamation,
  faThumbsUp
} from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Icon = ({
  icon,
  prefix = 'fas',
  style,
  className,
  callback,
  tabIndex,
  onFocus,
  onBlur,
  onKeyDown,
  onClick,
  disabled,
  color
}) => {
  library.add(
    faKey,
    faUser,
    faPlus,
    faMinus,
    faXmark,
    faEye,
    faAsterisk,
    faCaretDown,
    faCaretUp,
    faClipboardCheck,
    faTriangleExclamation,
    faThumbsUp
  )

  return (
    icon && (
      <FontAwesomeIcon
        icon={findIconDefinition({
          prefix,
          iconName: icon
        })}
        {...{ onBlur, onFocus, onKeyDown, style, className, tabIndex, disabled }}
        style={style || { color }}
        onClick={onClick || callback}
        focusable="true"
      />
    )
  )
}

export default Icon
