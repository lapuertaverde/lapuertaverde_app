import { string, array, func, bool, number } from 'prop-types'
import { Controller } from 'react-hook-form'
import { radioButtonSchema } from '../../utils/validationSchemas'
import {
  radioButton_box,
  radioSection_container,
  radioButton_section
} from './radioButton.module.scss'

export const RadioButton = ({
  name,
  options,
  label,
  required,
  width,
  disabled,
  disabledElements,
  size,
  onChange
}) => {
  return (
    <Controller
      {...{ name }}
      rules={radioButtonSchema({ name, label, required, disabledElements })}
      render={({ field, formState: { errors } }) => (
        <div className={radioButton_box}>
          {label && <label>{label}</label>}
          <div className={radioSection_container}>
            {options.map(
              (element) =>
                element && (
                  <section className={radioButton_section} key={element}>
                    <label
                      htmlFor={element}
                      style={{ width, placeSelf: 'center', cursor: 'pointer' }}
                    >
                      {element}
                    </label>
                    <input
                      type="radio"
                      value={element}
                      id={element}
                      name={element}
                      onChange={(e) => {
                        typeof onChange === 'function' && onChange(e)
                        field.onChange(e)
                      }}
                      checked={field.value === element ? true : false}
                      disabled={
                        disabled ||
                        (disabledElements && disabledElements.some((item) => item === element))
                      }
                      style={{ width: `${size}px`, height: `${size}px` }}
                    />
                  </section>
                )
            )}
          </div>
          {errors[name] && <span style={{ color: 'white' }}>{errors[name].message}</span>}
        </div>
      )}
    />
  )
}

RadioButton.propTypes = {
  name: string.isRequired,
  options: array.isRequired,
  label: string.isRequired,
  required: bool,
  width: string,
  disabled: bool,
  disabledElements: array,
  size: number,
  onChange: func
}

RadioButton.defaultProps = {
  name: 'button-radio',
  options: ['no defined options'],
  label: 'Select one option',
  size: 17
}
