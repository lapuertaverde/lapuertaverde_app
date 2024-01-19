import { string } from 'prop-types'

export const LabelCustom = ({ label, id, fontSize }) => {
  return (
    <label htmlFor={id} style={{ fontSize }}>
      {label}
    </label>
  )
}

LabelCustom.propTypes = {
  label: string,
  id: string || number,
  fontSize: string
}

LabelCustom.defaultProp = {
  label: 'label',
  id
}
