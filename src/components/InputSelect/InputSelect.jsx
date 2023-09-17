import { string, array } from 'prop-types'
import { useId } from 'react'
import { useFormContext } from 'react-hook-form'
import style from './InputSelect.module.scss'

const InputSelect = ({ options, name, form }) => {
  const id = useId()
  const { register } = useFormContext()

  return (
    <select {...register(name)} {...{ name, id, form }} className={style['custom-select']}>
      {options.map(({ value }) => (
        <option {...{ value }} />
      ))}
    </select>
  )
}

InputSelect.propTypes = {
  name: string,
  options: array,
  form: string
}

InputSelect.defaultProps = {
  name: 'select',
  options: ['no defined options']
}

export default InputSelect
