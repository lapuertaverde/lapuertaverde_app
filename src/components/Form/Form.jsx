import { string, object, func } from 'prop-types'
import { useId } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

const onSubmit = (values, e) => console.log(values, e)
const onError = (error, e) => console.log(error, e)

const Form = ({
  id,
  defaultValues,
  mode,
  onError,
  onSubmit,
  children,
  methods: propMethods,
  className
}) => {
  const methods = propMethods || useForm({ defaultValues, mode: mode || 'onChange' })
  const defaultId = useId()
  const { handleSubmit } = methods

  return (
    <FormProvider {...methods}>
      <form
        method="post"
        noValidate
        onSubmit={handleSubmit(
          (data, e) => onSubmit(data, e),
          (errors, e) => onError(errors, e)
        )}
        {...{ id: id || defaultId, className }}
        onKeyDown={(e) => e.key === 'Enter' && e.preventDefault()}
      >
        {children}
      </form>
    </FormProvider>
  )
}

Form.propTypes = {
  id: string,
  defaultValues: object,
  onSubmit: func,
  onError: func,
  mode: string
}

Form.defaultProps = {
  defaultValues: {},
  onSubmit,
  onError,
  mode: 'onChange'
}

export default Form
