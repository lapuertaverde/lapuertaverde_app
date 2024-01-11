export const numberSchema = ({ required, label, min, max }) => ({
  required: {
    value: required,
    message: `${label} is mandatory`
  },
  min: {
    value: min,
    message: `The lower value for ${label} is ${min}`
  },
  max: {
    value: max + 1,
    message: `The maximum value for ${label} is ${max}`
  },
  valueAsNumber: true
})
