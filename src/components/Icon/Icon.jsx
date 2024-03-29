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
  faThumbsUp,
  faFileInvoice,
  faHeart as heartSolid,
  faBasketShopping
} from '@fortawesome/free-solid-svg-icons'

import { faHeart } from '@fortawesome/free-regular-svg-icons'

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
  color,
  size
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
    faThumbsUp,
    faFileInvoice,
    faHeart,
    heartSolid,
    faBasketShopping
  )

  return (
    icon && (
      <FontAwesomeIcon
        icon={findIconDefinition({
          prefix,
          iconName: icon
        })}
        {...{ onBlur, onFocus, onKeyDown, style, className, tabIndex, disabled, size }}
        style={style || { color } || {}}
        onClick={onClick || callback}
        onMouseEnter={({ target: { style } }) => (style.cursor = 'pointer')}
        focusable="true"
      />
    )
  )
}

export default Icon
