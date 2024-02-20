import PropTypes from 'prop-types'
import { useState } from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'

import {
  navigationButtonContainer,
  navigationButtonContent,
  optionsClass
} from './navigationButton.module.scss'

const NavigationButton = ({ text, onClick, options, onClickOption }) => {
  const [show, setShow] = useState(true)

  const [parent] = useAutoAnimate()

  return (
    <div className={navigationButtonContainer} ref={parent}>
      <div className={navigationButtonContent}>
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
          <button key={name} {...{ onClick: onClickOption }} className={optionsClass}>
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
