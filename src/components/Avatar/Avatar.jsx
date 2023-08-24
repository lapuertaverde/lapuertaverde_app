/* eslint-disable multiline-ternary */
import PropTypes from 'prop-types'

import './Avatar.css'
import { capLetters, coloringText, validate } from './avatarController'

const Avatar = ({ src, size }) => {
  return (
    <div className={`avatar avatar-${size}`} style={validate(src) ? {} : coloringText(src)}>
      {validate(src) ? (
        <img src={src} className={'avatar-image'} />
      ) : (
        <div className={'avatar-letters'}>{capLetters(src)}</div>
      )}
    </div>
  )
}

Avatar.propTypes = {
  src: PropTypes.string,
  size: PropTypes.oneOf(['xs', 's', 'm', 'l', 'xl'])
}

Avatar.defaultProps = {
  src: "Avatar's Image",
  size: 'm'
}

export default Avatar
