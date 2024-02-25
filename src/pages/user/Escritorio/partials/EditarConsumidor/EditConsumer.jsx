import ConsumersCard from '../ConsumerCard/ConsumersCard'
import { consumersFlatter } from '../../../../../utils/consumers'

import { header } from '../BorrarConsumidor/deleteConsumer.module.scss'
import Drawer from '../../../../../components/Drawer/Drawer'
import Form from '../../../../../components/Form/Form'
import { InputText } from '../../../../../components/InputText/InputText'
import { Switcher } from '../../../../../components/Switcher/Switcher'

import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

const EditConsumer = ({ consumerGroups }) => {
  const consumers = consumersFlatter(consumerGroups)

  const [open, setOpen] = useState(false)
  const [width, setWidth] = useState('100%')

  const defaultValues = {
    name: '',
    email: '',
    dni: '',
    address: '',
    CP: '',
    phone: '',
    active: false
  }

  const methods = useForm({ defaultValues, mode: 'onChange' })

  const { reset } = methods

  const onClose = () => setOpen(false)

  const onClick = (consumer) => {
    reset(consumer)
    if (!open) setOpen(true)
  }

  useEffect(() => {
    if (open) setWidth('calc(100% - 300px)')
    else setWidth('100%')
  }, [open])

  return (
    <div>
      <header className={header}>Editar Consumidor</header>
      <div style={{ width }}>
        <ConsumersCard {...{ consumers, onClick }} />
      </div>

      <Drawer {...{ open, onClose }} width="350px">
        <Form {...{ methods }}>
          <div
            style={{
              width: '100%',
              padding: '1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              justifyContent: 'center'
            }}
          >
            <InputText name="name" label="Name" required />
            <InputText name="email" label="Email" required />
            <InputText name="address" label="Dirección" required />
            <InputText name="CP" label="Código Postal" required />
            <InputText name="dni" label="DNI" required />
            <InputText name="phone" label="Teléfono" required />
            <Switcher name="active" label="Activo" />
          </div>
        </Form>
      </Drawer>
    </div>
  )
}

export default EditConsumer
