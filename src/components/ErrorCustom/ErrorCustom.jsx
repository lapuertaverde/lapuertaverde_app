import { string } from 'prop-types'

export const ErrorCustom = ({ error, color, fontSize }) => {
  return <span style={{ color, fontSize }}>{error}</span>
}

ErrorCustom.propTypes = {
  error: string,
  color: string,
  fontSize: string
}

ErrorCustom.defaultProps = {
  error: 'An error has occurred',
  color: 'white',
  fontSize: '16px'
}
