import { formatDateToDDMMYYYY } from './dateFormat'

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
    if (multiple && maxOptions && typeof value === 'object')
      return value.length <= maxOptions || `The maximum options are: ${maxOptions}`
  }
})

export const radioButtonSchema = ({ name, label, required, disabledElements }) => ({
  required: {
    value: required,
    message: `${label || name} is mandatory`
  },
  validate: (value) => {
    if (disabledElements) {
      let isDisabled = false
      disabledElements.forEach((element) => {
        if (value === element) isDisabled = true
      })
      return !isDisabled || `The option: ${value} is disabled`
    }
  }
})

export const inputTextSchema = ({ name, label, required, type }) => ({
  required: {
    value: required,
    message: `${label || name} is mandatory`
  },
  validate: (value) => {
    if (required && type === 'email') {
      return isValidEmail(value) || `The email is not correct`
    }
  }
})

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}


export const textareaSchema = ({ name, label, required, maxLength, minLength, readOnly }) => ({
  required: {
    value: required,
    message: `${label || name} is mandatory`
  },
  maxLength: {
    value: maxLength,
    message: `The maximum number of characters for ${label || name} is ${maxLength}`
  },
  minLength: {
    value: minLength,
    message: `The minimum number of characters for ${label || name} is ${minLength}`
  }
})

export const inputDateSchema = ({ name, label, required, maxDate, minDate }) => ({
  required: {
    value: required,
    message: `${label || name} is mandatory`
  },
  validate: (value) => {
    let isCorrect = true
    if (minDate && value < minDate) {
      isCorrect = false
      return isCorrect || `The minimum date is ${formatDateToDDMMYYYY(minDate)}`
    }
    if (maxDate && value > maxDate) {
      isCorrect = false
      return isCorrect || `The maximum date is ${formatDateToDDMMYYYY(maxDate)}`
    }
  }
})

