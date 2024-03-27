import { consumersFlatter } from '../../../../../utils/consumers'

import { defaultValues } from './editConsumerController'
import FormEditConsumers from './partials/FormEditConsumer/FormEditConsumers'
import CardsContainer from './partials/CardsContainer/CardsContainer'
import HeaderEditConsumer from './partials/HeaderEditConsumer/HeaderEditConsumer'
import DrawerTitle from './partials/DrawerTitle/DrawerTitle'
import MainEditConsumer from './partials/MainEditConsumer/MainEditConsumer'
import Drawer from '../../../../../components/Drawer/Drawer'
import useDrawerWidth from './hooks/useDrawerWidth'

import { useForm } from 'react-hook-form'
import { useState } from 'react'
import Button from '../../../../../components/Button/Button'

const EditConsumer = ({ consumerGroups, setAlert }) => {
  const [allConsumers, setAllConsumers] = useState(consumersFlatter(consumerGroups))
  const [consumers, setConsumers] = useState(allConsumers)
  const [open, setOpen] = useState(false)

  const grupos = consumerGroups.map((group) => group.name)

  const [width, drawerWidth, setDrawerWidth, setWidth] = useDrawerWidth({ open })

  const headerMethods = useForm({ defaultValues: { groups: 'Todos' } })

  const { watch: watchGroups } = headerMethods

  const methods = useForm({
    defaultValues,
    mode: 'onChange'
  })

  const { reset, watch, setValue } = methods

  const onClose = () => setOpen(false)

  return (
    <div>
      <HeaderEditConsumer {...{ headerMethods, setConsumers, allConsumers, grupos }} />
      <MainEditConsumer {...{ consumers, reset, watch, open, width, setOpen }} />
      <Drawer
        {...{ open, onClose }}
        width={drawerWidth}
        drawerTitle={<DrawerTitle {...{ watch }} />}
        drawerFooter={
          <>
            <Button type="button" text="Cerrar" onClick={() => onClose()} />
            <Button
              type="button"
              text={drawerWidth === '1350px' ? 'Ocultar información detallada' : 'Mostrar +'}
              onClick={() => {
                if (drawerWidth === '280px') {
                  setWidth('300px')
                  setDrawerWidth('1350px')
                } else {
                  setWidth('calc(100% - 290px)')
                  setDrawerWidth('280px')
                }
              }}
            />
            <Button text="Guardar" form={'editarConsumidorForm'} />
          </>
        }
      >
        <FormEditConsumers
          {...{
            methods,
            setWidth,
            setDrawerWidth,
            drawerWidth,
            grupos,
            allConsumers,
            setAllConsumers,
            setConsumers,
            setAlert,
            watchGroups
          }}
        />
        {drawerWidth === '1350px' && <CardsContainer {...{ setValue, watch }} />}
      </Drawer>
    </div>
  )
}

export default EditConsumer
