import { string, array, bool, number, func, oneOf } from 'prop-types'
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
  onChange,
  flexDir,
  width
}) => {
  const id = useId()

  const {
    register,
    formState: { errors }
  } = useFormContext()

  return (
    <div className={custom_select} style={{ width, flexDirection: flexDir }}>
      {label && <LabelCustom {...{ label, id, required }} style={{ flexDirection: flexDir }} />}
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
  borderB: bool,
  flexDir: oneOf(['row', 'row-reverse', 'column']),
  width: string
}

InputSelect.defaultProps = {
  name: 'select',
  options: ['no defined options'],
  autoFocus: false,
  disabled: false,
  required: false,
  multiple: false,
  flexDir: 'column',
  width: '100%'
}

export default InputSelect
