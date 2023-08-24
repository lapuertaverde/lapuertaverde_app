import PropTypes from 'prop-types'
import { useState } from 'react'
const NavigationButton = ({ text, onClick, options, onClickOption }) => {
  const [show, setShow] = useState(true)
  return (
    <div
      style={{
        cursor: 'pointer',
        display: 'flex',
        // padding: '.5rem .9rem',
        minWidth: '90%',
        maxWidth: '100%',
        flexDirection: 'column',
        gap: '1.5rem',
        alignItems: 'center',
        color: 'whitesmoke',
        backgroundColor: 'rgb(156, 111, 219)'
      }}
    >
      <div
        style={{
          background: 'transparent',
          padding: '.5rem',
          borderRadius: '10px',
          fontSize:'1.2rem'
        }}
      >
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
        options.length > 0 &&
        options.map(({ name }) => (
          <button key={name} {...{ onClick: onClickOption }} style={{
            fontSize:'.9rem',
            padding:'0 0 .5rem 0'
          }}>
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
