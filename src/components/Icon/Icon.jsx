import { findIconDefinition, library } from '@fortawesome/fontawesome-svg-core'

import { faKey, faUser } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Icon = ({
  icon,
  prefix = 'fas',
  style,
  className,
  callBack,
  tabIndex,
  onFocus,
  onBlur,
  onKeyDown,
  onClick,
  disabled,
  color
}) => {
  library.add(faKey, faUser)

  return (
    icon && (
      <FontAwesomeIcon
        icon={findIconDefinition({
          prefix,
          iconName: icon
        })}
        {...{ onBlur, onFocus, onKeyDown, style, className, tabIndex, disabled }}
        style={style || { color }}
        onClick={onClick || callBack}
        focusable="true"
      />
    )
  )
}

export default Icon
