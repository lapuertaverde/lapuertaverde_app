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
        formId="editarConsumidorForm"
        width={drawerWidth}
        drawerTitle={<DrawerTitle {...{ watch }} />}
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
