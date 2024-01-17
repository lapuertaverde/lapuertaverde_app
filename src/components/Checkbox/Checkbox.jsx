import { string, bool, func, oneOf } from 'prop-types'
import { useId } from 'react'
import { Controller } from 'react-hook-form'

import { checkboxContainer } from './checkbox.module.scss'

const Checkbox = ({ name, id: inputId, label, disabled, onChange, variant }) => {
  const id = inputId || useId()

  return (
    <Controller
      {...{ name }}
      render={({ field }) => (
        <div className={checkboxContainer} style={{ flexDirection: `${variant}` }}>
          {label && <label htmlFor={inputId}>{label}</label>}
          <input
            {...{ disabled, id }}
            type="checkbox"
            checked={field.value}
            onChange={(e) => {
              if (typeof onChange === 'function') onChange(e)
              field.onChange(e)
            }}
          />
        </div>
      )}
    />
  )
}

Checkbox.propTypes = {
  name: string.isRequired,
  label: string,
  disabled: bool,
  onChange: func,
  variant: oneOf(['row', 'row-reverse', 'column'])
}

Checkbox.defaultProps = {
  name: 'checkboxExample',
  disabled: false,
  variant: 'row'
}

export default Checkbox
