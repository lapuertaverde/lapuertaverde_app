import { string, number } from 'prop-types'
import { useId } from 'react'
import { useFormContext } from 'react-hook-form'

const InputNumber = ({ name, value }) => {
  const id = useId()
  const { register } = useFormContext()

  return <input type="number" {...register(name)} {...{ name, value, id }} />
}

InputNumber.propTypes = {
  name: string,
  value: number
}

InputNumber.defaultProps = {
  name: 'number',
  value: 0
}

export default InputNumber
