import { useId } from 'react'
import { string } from 'prop-types'
import { FlexLayout } from '../../layouts/FlexLayout/FlexLayout'
import { LabelCustom } from '../Label/LabelCustom'

export const InputDate = ({ name, label }) => {
  const { id } = useId()
  return (
    <FlexLayout>
      {label && <LabelCustom {...{ label, htmlFot: id }} />}
      <input type="date" {...{ name, id }} />
    </FlexLayout>
  )
}

InputDate.propTypes = {
  name: string,
  label: string
}
