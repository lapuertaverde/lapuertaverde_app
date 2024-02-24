import PropTypes from 'prop-types'
import { useState } from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'

import {
  navigationButtonContainer,
  navigationButtonContent,
  optionsClass,
  active,
  inActive
} from './navigationButton.module.scss'

const NavigationButton = ({
  text,
  onClick,
  options,
  onClickOption,
  onBlurOption,
  variant,
  optionStyle
}) => {
  const [show, setShow] = useState(false)

  const [parent] = useAutoAnimate()

  const variants = {
    active,
    inActive
  }

  return (
    <div className={navigationButtonContainer} ref={parent}>
      <div className={`${navigationButtonContent} ${variants[variant]}`}>
        <button
          onClick={(e) => {
            onClick(e)
            setShow((prev) => !prev)
          }}
        >
          {text.toUpperCase()}
        </button>
      </div>

      {show &&
        options?.length > 0 &&
        options.map(({ name }) => (
          <button
            style={
              optionStyle?.toUpperCase() === name?.toUpperCase()
                ? { color: 'blue', backgroundColor: 'white' }
                : { backgroundColor: 'inherit', color: 'white' }
            }
            onBlur={(e) => typeof onBlurOption === 'function' && onBlurOption(e)}
            key={name}
            onClick={(e) => typeof onClickOption === 'function' && onClickOption(e)}
            className={optionsClass}
          >
            {name.toUpperCase()}
          </button>
        ))}
    </div>
  )
}

NavigationButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  options: PropTypes.array,
  onClickOption: PropTypes.func
}

NavigationButton.defaultProps = {
  text: 'NAV BUTTON',
  onClick: () => console.log('onClick'),
  options: [],
  onClickOption: () => null
}

export default NavigationButton
