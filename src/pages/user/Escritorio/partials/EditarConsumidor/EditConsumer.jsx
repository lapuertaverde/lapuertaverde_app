import { consumersFlatter } from '../../../../../utils/consumers'

import Drawer from '../../../../../components/Drawer/Drawer'

import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import FormEditConsumers from './partials/FormEditConsumer/FormEditConsumers'
import CardsContainer from './partials/CardsContainer/CardsContainer'
import HeaderEditConsumer from './partials/HeaderEditConsumer/HeaderEditConsumer'
import DrawerTitle from './partials/DrawerTitle/DrawerTitle'
import MainEditConsumer from './partials/MainEditConsumer/MainEditConsumer'

const EditConsumer = ({ consumerGroups, setAlert }) => {
  const [allConsumers, setAllConsumers] = useState(consumersFlatter(consumerGroups))
  const [consumers, setConsumers] = useState(allConsumers)

  const grupos = consumerGroups.map((group) => group.name)

  const [open, setOpen] = useState(false)
  const [width, setWidth] = useState('100%')
  const [drawerWidth, setDrawerWidth] = useState('280px')

  const headerMethods = useForm({ defaultValues: { groups: 'Todos' } })

  const { watch: watchGroups } = headerMethods

  const methods = useForm({
    defaultValues: {
      name: '',
      email: '',
      dni: '',
      address: '',
      CP: '',
      phone: '',
      active: false,
      groupName: '',
      KgByDefault: 0
    },
    mode: 'onChange'
  })

  const { reset, watch, setValue } = methods

  const onClose = () => setOpen(false)

  const onClick = (consumer) => {
    reset(consumer)
    if (!open) setOpen(true)
  }

  useEffect(() => {
    if (open) setWidth('calc(100% - 290px)')
    else setWidth('100%')
  }, [open])

  return (
    <div>
      <HeaderEditConsumer {...{ headerMethods, setConsumers, allConsumers, grupos }} />
      <MainEditConsumer {...{ consumers, onClick, watch, open, width }} />
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
