import { string, node } from 'prop-types'
import { gridContainer } from './gridLayout.module.scss'

export const GridLayout = ({
  children,
  gridTemplateColumns,
  gridTemplateRows,
  gridTemplateAreas,
  width,
  height,
  background,
  gap,
  justifyContent,
  padding
}) => {
  return (
    <div
      className={gridContainer}
      style={{
        gridTemplateColumns,
        gridTemplateRows,
        gridTemplateAreas,
        width,
        height,
        background,
        gap,
        justifyContent,
        padding
      }}
    >
      {children}
    </div>
  )
}

GridLayout.propTypes = {
  children: node,
  width: string,
  height: string,
  background: string,
  gap: string,
  justifyContent: string,
  padding: string
}

GridLayout.defaultProps = {
  width: '100%',
  height: '100%',
  justifyContent: 'center'
}
