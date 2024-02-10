import { string, number, bool, object } from 'prop-types'
import { span_label } from './labelCustom.module.scss'
import Icon from '../Icon/Icon'

export const LabelCustom = ({ label, id, fontSize, color, borderB, required, style }) => {
  return (
    <label
      htmlFor={id}
      style={style || { fontSize, color, borderBottom: borderB && `1px solid ${color}` }}
    >
      {required && <Icon icon="asterisk" style={{ color: '#d71d1d', width: '8px' }} />} {label}
    </label>
  )
}

LabelCustom.propTypes = {
  label: string,
  id: string || number,
  fontSize: string,
  color: string,
  borderB: bool,
  style: object
}

LabelCustom.defaultProps = {
  label: 'label',
  fontSize: '16px',
  color: '#1f1f1f',
  borderB: false
}
