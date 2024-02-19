import { string, node } from 'prop-types'
import { tooltip_box, tooltip_span } from './tooltip.module.scss'

export const Tooltip = ({ children, text }) => {
  return (
    <div className={tooltip_box}>
      {children}
      {text && <span className={tooltip_span}>{text}</span>}
    </div>
  )
}

Tooltip.propTypes = {
  children: node,
  text: string
}
