import { string, array, bool, number, func } from 'prop-types'
import { useId } from 'react'

import { Controller } from 'react-hook-form'

const Checkbox = ({ name, id, label, options, disabled, required, onChange }) => {
  const inputId = id || useId()

  return (
    <Controller
      {...{ name }}
      render={({ field }) => {
        return (
          <div>
            {label && <label>{label}</label>}
            {options?.length
              ? options.map(({ label }) => <input id={`${inputId + label}`} type="checkbox" />)
              : null}
          </div>
        )
      }}
    />
  )
}

InputSelect.propTypes = {
  name: string.isRequired,
  options: array.isRequired,
  label: string,
  disabled: bool,
  required: bool,
  onChange: func
}

InputSelect.defaultProps = {
  name: 'chekboxExample',
  disabled: false,
  required: false
}

export default Checkbox
