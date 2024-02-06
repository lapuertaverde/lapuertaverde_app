import { string, array, func, bool, number } from 'prop-types'
import { Controller } from 'react-hook-form'
import { radioButtonSchema } from '../../utils/validationSchemas'
import {
  radioButton_box,
  radioSection_container,
  radioButton_section
} from './radioButton.module.scss'
import { ErrorCustom } from '../ErrorCustom/ErrorCustom'
import { LabelCustom } from '../Label/LabelCustom'

export const RadioButton = ({
  name,
  options,
  label,
  required,
  width,
  disabled,
  disabledElements,
  size,
  flexDir,
  onChange,
  fontSize,
  color,
  borderB
}) => {
  return (
    <Controller
      {...{ name }}
      rules={radioButtonSchema({ name, label, required, disabledElements })}
      render={({ field, formState: { errors } }) => (
        <div className={radioButton_box}>
          {label && <LabelCustom {...{ label, fontSize, color, borderB, required }} />}
          <div
            className={radioSection_container}
            style={{ flexDirection: flexDir, gap: flexDir === 'row' ? '1.5rem' : '1rem' }}
          >
            {options.map(
              (element) =>
                element && (
                  <section className={radioButton_section} key={element}>
                    <LabelCustom
                      {...{
                        label: element,
                        htmlFor: element,
                        fontSize,
                        color,
                        borderB
                      }}
                      style={{ width, placeSelf: 'center' }}
                    />
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
          {errors[name] && <ErrorCustom error={errors[name].message} />}
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
  flexDir: string,
  onChange: func
}

RadioButton.defaultProps = {
  name: 'button-radio',
  options: ['no defined options'],
  label: 'Select one option',
  size: 17,
  flexDir: 'column'
}
