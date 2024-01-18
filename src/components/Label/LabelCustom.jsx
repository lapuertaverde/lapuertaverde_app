import { string, number } from 'prop-types'

export const LabelCustom = ({ label, id, fontSize, color }) => {
  return (
    <label htmlFor={id} style={{ fontSize, color }}>
      {label}
    </label>
  )
}

LabelCustom.propTypes = {
  label: string,
  id: string || number,
  fontSize: string,
  color: string
}

LabelCustom.defaultProps = {
  label: 'label',
  fontSize: '16px',
  color: '#1f1f1f'
}
