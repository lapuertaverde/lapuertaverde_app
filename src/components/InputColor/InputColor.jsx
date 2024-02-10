import { string, bool, func } from 'prop-types'
import { useId } from 'react'
import { Controller } from 'react-hook-form'

import { inputColorContainer } from './inputColor.module.scss'
import { ErrorCustom } from '../ErrorCustom/ErrorCustom'
import { inputColorSchema } from '../../utils/validationSchemas'
import { LabelCustom } from '../Label/LabelCustom'

const InputColor = ({
  name,
  id: inputId,
  label,
  disabled,
  onChange,
  required,
  value,
  fontSize,
  color,
  borderB
}) => {
  const id = inputId || useId()

  return (
    <Controller
      {...{ name }}
      rules={inputColorSchema({ name, label, required })}
      render={({ field, formState: { errors } }) => {
        return (
          <div className={inputColorContainer}>
            {label && (
              <LabelCustom {...{ label, htmlFor: id, fontSize, color, borderB, required }} />
            )}
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
  value: string,
  fontSize: string,
  color: string,
  borderB: bool
}

InputColor.defaultProps = {
  disabled: false
}

export default InputColor
