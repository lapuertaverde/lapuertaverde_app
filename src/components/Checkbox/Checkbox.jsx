import { string, bool, func, oneOf } from 'prop-types'
import { useId } from 'react'
import { Controller } from 'react-hook-form'

import { checkboxContainer } from './checkbox.module.scss'
import { LabelCustom } from '../Label/LabelCustom'

const Checkbox = ({
  name,
  id: inputId,
  label,
  disabled,
  onChange,
  variant,
  fontSize,
  color,
  borderB,
  required
}) => {
  const id = inputId || useId()

  return (
    <Controller
      {...{ name }}
      render={({ field }) => (
        <div className={checkboxContainer} style={{ flexDirection: `${variant}` }}>
          {label && <LabelCustom {...{ label, htmlFor: id, fontSize, color, borderB, required }} />}
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
  variant: oneOf(['row', 'row-reverse', 'column']),
  fontSize: string,
  color: string,
  borderB: bool
}

Checkbox.defaultProps = {
  name: 'checkboxExample',
  disabled: false,
  variant: 'row'
}

export default Checkbox
