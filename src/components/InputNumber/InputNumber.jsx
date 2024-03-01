import { string, number, bool, func, oneOf } from 'prop-types'
import { useId } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { numberSchema } from '../../utils/validationSchemas'
import { inputContainer, inputControls } from './inputNumber.module.scss'
import Icon from '../Icon/Icon'
import { LabelCustom } from '../Label/LabelCustom'

import { Tooltip } from '../Tooltip/Tooltip'

const InputNumber = ({
  name,
  label,
  max,
  min,
  step,
  required,
  onChange,
  placeholder,
  fontSize,
  color,
  borderB,
  flexDir,
  width
}) => {
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
        <Tooltip text={errors?.[name]?.message}>
          <div className={inputContainer} style={{ flexDirection: flexDir, width }}>
            {label && (
              <LabelCustom {...{ label, htmlFor: id, fontSize, color, borderB, required }} />
            )}
            <div style={{ display: 'flex', gap: '0.5rem', height: '13px', alignItems: 'center' }}>
              <Icon
                color="white"
                icon="minus"
                className={inputControls}
                onClick={() => {
                  if (getValues(name) <= min) setValue(name, min)
                  else setValue(name, Number(getValues(name) - step))
                }}
              />
              <input
                style={{ height: '1.3rem' }}
                {...{ id, max, min, step, placeholder }}
                type="number"
                value={field.value}
                onChange={(e) => {
                  if (typeof onChange === 'function') onChange(e)

                  field.onChange(e)
                }}
              />
              <Icon
                color="white"
                icon="plus"
                className={inputControls}
                onClick={() => {
                  if (getValues(name) >= max) setValue(name, max)
                  else setValue(name, Number(getValues(name) + step))
                }}
              />
            </div>
          </div>
        </Tooltip>
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
  placeholder: string,
  fontSize: string,
  color: string,
  borderB: bool,
  flexDir: oneOf(['row', 'row-reverse', 'column']),
  width: string
}

InputNumber.defaultProps = {
  name: 'number',
  label: null,
  max: Infinity,
  min: 0,
  required: false,
  step: 1,
  placeholder: 'Introduce un número',
  flexDir: 'column',
  width: '100%'
}

export default InputNumber
