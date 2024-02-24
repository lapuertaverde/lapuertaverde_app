import Button from '../../Button/Button'

import { footerContainer } from './alertMessagePartials.module.scss'

const AlertFooter = ({ setAlert }) => (
  <footer className={footerContainer}>
    <Button
      type="button"
      style={{
        backgroundColor: 'violet',
        color: 'white',
        border: 'none',
        width: '80px',
        height: '1.5rem',
        padding: '5px'
      }}
      text="OK"
      onClick={() =>
        setAlert({
          open: false
        })
      }
    />
  </footer>
)

export default AlertFooter
