import Button from '../../Button/Button'

import { footerContainer } from './alertMessagePartials.module.scss'

const AlertFooter = ({ setAlert, footer }) => (
  <footer className={footerContainer}>
    {footer ? (
      footer
    ) : (
      <Button
        type="button"
        style={{
          backgroundColor: 'rgb(159, 118, 246)',
          color: 'white',
          border: '1px solid white',
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
    )}
  </footer>
)

export default AlertFooter
