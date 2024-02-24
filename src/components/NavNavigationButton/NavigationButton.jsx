import PropTypes from 'prop-types'
import { useState } from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'

import {
  navigationButtonContainer,
  navigationButtonContent,
  optionsClass
} from './navigationButton.module.scss'

const NavigationButton = ({ text, onClick, options, onClickOption, color, onBlurOption }) => {
  const [show, setShow] = useState(false)

  const [parent] = useAutoAnimate()

  return (
    <div className={navigationButtonContainer} ref={parent}>
      <div className={navigationButtonContent}>
        <button
          style={{ color }}
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
        options.map(({ name, optionColor }) => (
          <button
            onBlur={(e) => typeof onBlurOption === 'function' && onBlurOption(e)}
            key={name}
            {...{ onClick: onClickOption }}
            className={optionsClass}
            style={{ color: optionColor }}
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
