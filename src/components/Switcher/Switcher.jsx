import { string, func, bool, oneOf } from 'prop-types'
import { useId } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import {
  input_switcher,
  switcher_box,
  toggle_switch_label,
  toggle_switch_checked,
  toggle_switch_notChecked,
  toggle_switch_label_Medium,
  toggle_switch_label_Large
} from './switcher.module.scss'
import { LabelCustom } from '../Label/LabelCustom'

export const Switcher = ({
  name,
  label,
  disabled,
  onChange,
  size,
  fontSize,
  color,
  borderB,
  required
}) => {
  const { setValue } = useFormContext()
  const id = useId()

  return (
    <Controller
      {...{ name }}
      render={({ field }) => {
        let value = false
        if (field.value && field.value !== 'false') value = true
        return (
          <div className={switcher_box}>
            {label && (
              <LabelCustom {...{ label, htmlFor: id, fontSize, color, borderB, required }} />
            )}
            <input
              className={input_switcher}
              type="checkbox"
              {...field}
              onChange={(e) => {
                typeof onChange === 'function' && onChange(e)
                field.onChange(e)
              }}
              checked={value}
              disabled={disabled}
            />

            <span
              {...{ id }}
              className={`${toggle_switch_label}  ${
                value ? toggle_switch_checked : toggle_switch_notChecked
              } ${
                size == 'medium'
                  ? toggle_switch_label_Medium
                  : size == 'large'
                  ? toggle_switch_label_Large
                  : ''
              }`}
              onClick={() => !disabled && setValue(name, !value)}
            ></span>
          </div>
        )
      }}
    />
  )
}

Switcher.prototype = {
  name: string.isRequired,
  onChange: func,
  disabled: bool,
  size: oneOf(['small', 'medium', 'large']),
  required: bool
}

Switcher.defaultProps = {
  name: 'theme',
  disabled: false,
  size: 'small'
}
