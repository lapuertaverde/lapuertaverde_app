import { string, number, bool, func } from 'prop-types'
import { useId } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { numberSchema } from '../../utils/validationSchemas'
import { inputContainer, inputControls } from './inputNumber.module.scss'
import Icon from '../Icon/Icon'

const InputNumber = ({ name, label, max, min, step, required, onChange, placeholder }) => {
  const id = useId()

  const {
    getValues,
    setValue,
    formState: { errors }
  } = useFormContext()

  return (
    <Controller
      {...{ name }}
      rules={numberSchema({ required, label, min, max })}
      render={({ field }) => (
        <div className={inputContainer}>
          {label && <label htmlFor={id}>{label}</label>}
          <div style={{ display: 'flex', gap: '0.5rem', height: '13px' }}>
            <Icon
              icon="minus"
              className={inputControls}
              onClick={() => {
                if (getValues(name) <= min) setValue(name, min)
                else setValue(name, Number(getValues(name) - step))
              }}
            />
            <input
              {...{ id, max, min, step, placeholder }}
              type="number"
              value={field.value}
              onChange={(e) => {
                if (typeof onChange === 'function') onChange(e)

                field.onChange(e)
              }}
            />
            <Icon
              icon="plus"
              className={inputControls}
              onClick={() => {
                if (getValues(name) >= max) setValue(name, max)
                else setValue(name, Number(getValues(name) + step))
              }}
            />
          </div>
          {errors?.[name] && <span style={{ color: 'white' }}>{errors[name].message}</span>}
        </div>
      )}
    />
  )
}

InputNumber.propTypes = {
  name: string,
  value: number,
  label: string,
  max: number,
  min: number,
  step: number,
  required: bool,
  onChange: func,
  placeholder: string
}

InputNumber.defaultProps = {
  name: 'number',
  label: null,
  max: Infinity,
  min: 0,
  required: true,
  step: 1,
  placeholder: 'Introduce un número'
}

export default InputNumber
