import { string, number, bool } from 'prop-types'

export const LabelCustom = ({ label, id, fontSize, color, borderB }) => {
  return (
    <label htmlFor={id} style={{ fontSize, color, borderBottom: borderB && `1px solid ${color}` }}>
      {label}
    </label>
  )
}

LabelCustom.propTypes = {
  label: string,
  id: string || number,
  fontSize: string,
  color: string,
  borderB: bool
}

LabelCustom.defaultProps = {
  label: 'label',
  fontSize: '16px',
  color: '#1f1f1f',
  borderB: false
}
