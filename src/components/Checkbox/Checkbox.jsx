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
              ? options.map(({ value, label }) => (
                  <div key={value}>
                    <label for={`${inputId + value}`}>{label}</label>
                    <input id={`${inputId + value}`} type="checkbox" />
                  </div>
                ))
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
