import { string, bool, func } from 'prop-types'
import { useId } from 'react'
import { Controller } from 'react-hook-form'

import { inputColorContainer } from './inputColor.module.scss'
import { ErrorCustom } from '../ErrorCustom/ErrorCustom'
import { inputColorSchema } from '../../utils/validationSchemas'

const InputColor = ({ name, id: inputId, label, disabled, onChange, required, value }) => {
  const id = inputId || useId()

  return (
    <Controller
      {...{ name }}
      rules={inputColorSchema({ name, label, required })}
      render={({ field, formState: { errors } }) => {
        console.log('field', field)
        return (
          <div className={inputColorContainer}>
            {label && <label htmlFor={id}>{label}</label>}
            <input
              {...{ disabled, id, name }}
              type="color"
              value={field.value}
              onChange={(e) => {
                if (typeof onChange === 'function') onChange(e)
                field.onChange(e)
              }}
            />
            {errors[name] && <ErrorCustom error={errors[name].message} />}
          </div>
        )
      }}
    />
  )
}

InputColor.propTypes = {
  name: string.isRequired,
  id: string,
  label: string,
  disabled: bool,
  onChange: func,
  value: string
}

InputColor.defaultProps = {
  disabled: false
}

export default InputColor
