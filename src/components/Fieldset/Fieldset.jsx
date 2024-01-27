import { string, node, bool, object } from 'prop-types'

import { useId, useState } from 'react'
import Icon from '../Icon/Icon'
import { fieldsetContainer, fieldset, legendContainer, icon } from './Fieldset.module.scss'
import { useAutoAnimate } from '@formkit/auto-animate/react'

const Fieldset = ({ id: customId, legend, style, collapsible, children, collapse }) => {
  const id = customId || useId()

  const [parent] = useAutoAnimate()

  const [deploy, setDeploy] = useState(collapse)

  const handleIconClick = () => setDeploy((prev) => !prev)

  return (
    <div className={fieldsetContainer} ref={parent} {...{ style }}>
      <div className={legendContainer}>
        {collapsible && (
          <Icon
            icon={deploy ? 'caret-up' : 'caret-down'}
            className={icon}
            onClick={handleIconClick}
          />
        )}
        {legend && <legend>{legend}</legend>}
      </div>

      <fieldset className={fieldset} {...{ legend, id }}>
        {deploy && children}
      </fieldset>
    </div>
  )
}

Fieldset.propTypes = {
  legend: string,
  id: string,
  collapsible: bool,
  collapse: bool,
  children: node,
  style: object
}

Fieldset.defaultProps = {
  collapsible: true,
  collapse: false,
  style: {}
}

export default Fieldset
