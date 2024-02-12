import { string, oneOf, bool, func } from 'prop-types'
import { useId, useState } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { inputText_box, inputText_Custom_kill, eye_box } from './inputText.module.scss'
import Icon from '../Icon/Icon'
import { inputTextSchema } from '../../utils/validationSchemas'
import { ErrorCustom } from '../ErrorCustom/ErrorCustom'
import { LabelCustom } from '../Label/LabelCustom'

export const InputTextLaura = ({
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
            className={inputText_Custom_kill}
          />
          {type === 'password' && (
            <div className={eye_box} style={{ top: errors?.[name] ? '40%' : '62%' }}>
              <Icon color={'#6c8d12'} icon="eye" onClick={() => setshowPass(!showPass)} />
            </div>
          )}
          {errors?.[name] && <ErrorCustom error={errors[name].message} />}
        </div>
      )}
    />
  )
}

InputTextLaura.propTypes = {
  name: string.isRequired,
  label: string,
  type: oneOf(['text', 'password', 'email']),
  placeholder: string,
  flexDir: oneOf(['row', 'row-reverse', 'column']),
  width: string,
  required: bool,
  onChange: func,
  autoFocus: bool,
  fontSize: string,
  color: string,
  borderB: bool
}

InputTextLaura.defaultProps = {
  name: 'input-text',
  type: 'text',
  flexDir: 'column',
  required: false,
  autoFocus: false
}
