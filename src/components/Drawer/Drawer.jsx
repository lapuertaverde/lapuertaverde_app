import PropTypes from 'prop-types'
import { memo, useEffect, useState, useRef } from 'react'
import Icon from '../../components/Icon/Icon'
import styles from './Drawer.module.scss'
import Button from '../Button/Button'

const Drawer = memo(
  ({ open, onClose, children, drawerTitle, toolbaredChildren, formId, isValid, width }) => {
    /* It could accept more options regarding its position in the future */
    const position = 'right'
    const titleHeader = true

    const [closeDrawer, setCloseDrawer] = useState(false)

    /* Ref for the drawer for resizing it*/
    const drawerRef = useRef()

    /* Avoid propagation issues on clicking the drawer area */
    const handleDrawerClick = (e) => {
      e.stopPropagation()
      setCloseDrawer(true)
    }

    useEffect(() => {
      if (isValid && closeDrawer) {
        onClose()
        setCloseDrawer(false)
      }
    }, [isValid, closeDrawer])

    /* get the class for styling the drawer (based on open/close/position values) */
    const statusDrawerClass = `${styles['drawer-container']} ${styles[position]} ${
      open ? styles.open : styles.closed
    }`

    return (
      <>
        <aside ref={drawerRef} className={statusDrawerClass} style={{ width, position: 'fixed' }}>
          <div className={styles['drawer']}>
            <div className={styles['drawer-content']}>
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: drawerTitle ? 'space-between' : 'flex-end',
                  padding: '5px'
                }}
              >
                {drawerTitle && drawerTitle}
                <Icon icon="xmark" callback={() => onClose()} />
              </div>
              <div className={styles['drawer-content-content']}>{children}</div>
              {toolbaredChildren ? (
                toolbaredChildren
              ) : (
                <div
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    padding: '5px',
                    gap: '1rem'
                  }}
                >
                  <Button type="button" text="Cerrar" onClick={() => onClose()} />
                  <Button text="Guardar" form={formId} />
                </div>
              )}
            </div>
          </div>
        </aside>
      </>
    )
  }
)

Drawer.displayName = 'Drawer'

Drawer.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  drawerTitle: PropTypes.string,
  toolbaredChildren: PropTypes.bool,
  formId: PropTypes.string,
  titleHeader: PropTypes.bool,
  isValid: PropTypes.bool
}

Drawer.defaultProps = {
  toolbaredChildren: false,
  titleHeader: true,
  isValid: false,
  width: '900px',
  drawerTitle: 'DRAWER'
}

export default Drawer
