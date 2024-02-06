import { string, oneOf, bool, func } from 'prop-types'
import { useId, useState } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { inputText_box, eye_box } from './inputText.module.scss'
import Icon from '../Icon/Icon'
import { inputTextSchema } from '../../utils/validationSchemas'
import { ErrorCustom } from '../ErrorCustom/ErrorCustom'
import { LabelCustom } from '../Label/LabelCustom'

export const InputText = ({
  name,
  label,
  type,
  placeholder,
  flexDir,
  width,
  required,
  onChange,
  autoFocus,
  fontSize,
  color,
  borderB
}) => {
  const { id } = useId()

  const [showPass, setshowPass] = useState(false)

  const {
    formState: { errors }
  } = useFormContext()

  return (
    <Controller
      {...{ name }}
      rules={inputTextSchema({ name, label, required, type })}
      render={({ field }) => (
        <div className={inputText_box} style={{ flexDirection: flexDir, width }}>
          {label && <LabelCustom {...{ label, htmlFor: id, fontSize, color, borderB, required }} />}
          <input
            {...{ id, placeholder, autoFocus }}
            type={
              showPass || type === 'text'
                ? 'text'
                : showPass || type === 'email'
                ? 'email'
                : 'password'
            }
            value={field.value}
            onChange={(e) => {
              if (typeof onChange === 'function') onChange(e)
              field.onChange(e)
            }}
          />
          {type === 'password' && (
            <div className={eye_box} style={{ top: errors?.[name] ? '40%' : '62%' }}>
              <Icon icon="eye" onClick={() => setshowPass(!showPass)} />
            </div>
          )}
          {errors?.[name] && <ErrorCustom error={errors[name].message} />}
        </div>
      )}
    />
  )
}

InputText.propTypes = {
  name: string.isRequired,
  label: string,
  type: oneOf(['text', 'password', 'email']),
  placeholder: string,
  flexDir: oneOf(['row', 'row-reverse', 'column']),
  width: string,
  required: bool,
  onChange: func,
  autoFocus: bool
}

InputText.defaultProps = {
  name: 'input-text',
  type: 'text',
  flexDir: 'column',
  required: false,
  autoFocus: false
}
