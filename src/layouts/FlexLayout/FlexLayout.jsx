import { string, node } from 'prop-types'
import { flexContainer } from './flexLayout.module.scss'

export const FlexLayout = ({
  children,
  flexDirection,
  justifyContent,
  alignItems,
  flexWrap,
  width,
  height,
  background,
  gap,
  padding
}) => {
  return (
    <div
      className={flexContainer}
      style={{
        flexDirection,
        justifyContent,
        alignItems,
        flexWrap,
        width,
        height,
        background,
        gap,
        padding
      }}
    >
      {children}
    </div>
  )
}

FlexLayout.propTypes = {
  children: node,
  width: string,
  height: string,
  background: string,
  gap: string,
  flexDirection: string,
  justifyContent: string,
  alignItems: string,
  flexWrap: string,
  padding: string
}

FlexLayout.defaultProps = {
  width: '100%',
  height: '100%',
  justifyContent: 'center'
}
