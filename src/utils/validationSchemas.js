export const numberSchema = ({ name, required, label, min, max }) => ({
  required: {
    value: required,
    message: `${label || name} is mandatory`
  },
  min: {
    value: min,
    message: `The lower value for ${label || name} is ${min}`
  },
  max: {
    value: max + 1,
    message: `The maximum value for ${label || name} is ${max}`
  },
  valueAsNumber: true
})

export const selectSchema = ({ name, label, required, maxOptions, multiple }) => ({
  required: {
    value: required,
    message: `${label || name} is mandatory`
  },
  validate: (value) => {
    if (multiple && maxOptions && typeof value == Object)
      return value.length <= maxOptions || `No puedes tantas opciones, máximo ${maxOptions}`
  }
})
