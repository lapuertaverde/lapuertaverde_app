import { string, bool, func, number } from 'prop-types'
import { useId } from 'react'
import { LabelCustom } from '../Label/LabelCustom'

import { textArea_Box, textArea_Custom } from './textArea.module.scss'
import { Controller, useFormContext } from 'react-hook-form'
import { textareaSchema } from '../../utils/validationSchemas'
import { ErrorCustom } from '../ErrorCustom/ErrorCustom'
import { Tooltip } from '../Tooltip/Tooltip'

export const TextArea = ({
  name,
  label,
  autoCapitalize,
  autoComplete,
  autoFocus,
  disabled,
  required,
  readOnly,
  maxLength,
  minLength,
  placeholder,
  flexDirection,
  width,
  height,
  onChange,
  resize,
  fontSize,
  color,
  borderB
}) => {
  const { id } = useId()

  return (
    <Controller
      {...{ name }}
      rules={textareaSchema({ name, label, required, maxLength, minLength })}
      render={({ field, formState: { errors } }) => (
        <div className={textArea_Box} style={{ flexDirection, width, height }}>
          {label && <LabelCustom {...{ label, htmlFor: id, fontSize, color, borderB, required }} />}
          <Tooltip text={errors?.[name]?.message}>
            <textarea
              {...{
                id,
                autoCapitalize,
                autoComplete,
                autoFocus,
                disabled,
                readOnly,
                placeholder
              }}
              style={{ resize }}
              className={textArea_Custom}
              value={field.value}
              onChange={(e) => {
                if (typeof onChange === 'function') onChange(e)
                field.onChange(e)
              }}
            />
          </Tooltip>
        </div>
      )}
    />
  )
}

TextArea.propTypes = {
  name: string.isRequired,
  label: string,
  autoCapitalize: string,
  autoComplete: string,
  autoFocus: bool,
  disabled: bool,
  required: bool,
  readOnly: bool,
  maxLength: number,
  minLength: number,
  placeholder: string,
  flexDirection: string,
  onChange: func,
  resize: string,
  fontSize: string,
  color: string,
  borderB: bool
}

TextArea.defaultProps = {
  name: 'text-area',
  label: 'text-area',
  autoCapitalize: 'sentences',
  autoComplete: 'off',
  autoFocus: false,
  disabled: false,
  required: false,
  readOnly: false,
  resize: 'none'
}
