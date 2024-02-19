import { string, array, bool, number, func } from 'prop-types'
import { useId } from 'react'
import { useFormContext } from 'react-hook-form'
import { custom_select } from './InputSelect.module.scss'
import { selectSchema } from '../../utils/validationSchemas'
import { LabelCustom } from '../Label/LabelCustom'
import { ErrorCustom } from '../ErrorCustom/ErrorCustom'
import { Tooltip } from '../Tooltip/Tooltip'

const InputSelect = ({
  options,
  name,
  form,
  label,
  autoFocus,
  disabled,
  required,
  multiple,
  maxOptions,
  onChange
}) => {
  const id = useId()

  const {
    register,
    formState: { errors }
  } = useFormContext()

  return (
    <div className={custom_select}>
      {label && <LabelCustom {...{ label, id }} borderB />}
      <Tooltip text={errors?.[name]?.message}>
        <select
          {...register(name, selectSchema({ name, label, required, maxOptions, multiple }))}
          {...{ name, id, form, autoFocus, disabled, required, multiple }}
          onChange={(e) => typeof onChange === 'function' && onChange(e)}
        >
          {options.map((value) =>
            value ? (
              <option key={value} {...{ value }}>
                {value}
              </option>
            ) : null
          )}
        </select>
      </Tooltip>
      {errors[name] && <ErrorCustom error={errors[name].message} />}
    </div>
  )
}

InputSelect.propTypes = {
  name: string.isRequired,
  options: array.isRequired,
  label: string,
  form: string,
  autoFocus: bool,
  disabled: bool,
  required: bool,
  multiple: bool,
  maxOptions: number,
  onChange: func,
  fontSize: string,
  color: string,
  borderB: bool
}

InputSelect.defaultProps = {
  name: 'select',
  options: ['no defined options'],
  autoFocus: false,
  disabled: false,
  required: false,
  multiple: false
}

export default InputSelect
