import { consumersFlatter } from '../../../../../utils/consumers'

import ConsumersCard from '../ConsumerCard/ConsumersCard'
import { header } from '../BorrarConsumidor/deleteConsumer.module.scss'
import Drawer from '../../../../../components/Drawer/Drawer'
import Form from '../../../../../components/Form/Form'
import { InputText } from '../../../../../components/InputText/InputText'
import InputNumber from '../../../../../components/InputNumber/InputNumber'
import { Switcher } from '../../../../../components/Switcher/Switcher'
import InputSelect from '../../../../../components/InputSelect/InputSelect'
import Avatar from '../../../../../components/Avatar/Avatar'

import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import { patch } from '../../../../../services/APIServices'
import { toast } from 'react-toastify'

const EditConsumer = ({ consumerGroups, setAlert }) => {
  const [consumers, setConsumers] = useState(consumersFlatter(consumerGroups))

  const grupos = consumerGroups.map((group) => group.name)

  const [open, setOpen] = useState(false)
  const [width, setWidth] = useState('100%')

  const defaultValues = {
    name: '',
    email: '',
    dni: '',
    address: '',
    CP: '',
    phone: '',
    active: false,
    groupName: '',
    KgByDefault: 0
  }

  const methods = useForm({ defaultValues, mode: 'onChange' })

  const { reset, watch } = methods

  const onClose = () => setOpen(false)

  const onClick = (consumer) => {
    reset(consumer)
    if (!open) setOpen(true)
  }

  const onSubmit = (values) =>
    patch(`consumer/${values._id}`, values)
      .then(() => {
        toast.success('Consumidor Actualizado', { position: 'top-left' })

        const consumersUpdated = consumers.map((consumer) => {
          if (consumer._id === values._id) return values
          else return consumer
        })
        setConsumers(consumersUpdated)
      })
      .catch((error) =>
        setAlert({
          open: true,
          type: 'error',
          title: `Error actualizando ${values.name}`,
          message: error.message
        })
      )

  useEffect(() => {
    if (open) setWidth('calc(100% - 300px)')
    else setWidth('100%')
  }, [open])

  return (
    <div>
      <header className={header}>Editar Consumidor</header>
      <div style={{ width }}>
        <ConsumersCard {...{ consumers, onClick, id: !open ? null : watch('_id') }} />
      </div>

      <Drawer
        {...{ open, onClose }}
        formId="editarConsumidorForm"
        width="350px"
        drawerTitle={
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Avatar src={watch('name') || ''} />
            {watch('name') && watch('name').toUpperCase()}
          </div>
        }
      >
        <Form id="editarConsumidorForm" {...{ methods, onSubmit }}>
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
            <InputSelect name="groupName" label="Grupo" options={grupos || []} />
            <InputNumber name="KgByDefault" label="Kg en cesta" />
            <Switcher name="active" label="Activo" />
            <p>
              orderInProgress :
              {watch('orderInProgress') && JSON.stringify(watch('orderInProgress'))}
            </p>
            <p>orderFavs : {watch('orderFavs') && JSON.stringify(watch('orderFavs'))}</p>
            <p>favorites : {watch('favorites') && JSON.stringify(watch('favorites'))}</p>
            <p>discarded : {watch('discarded') && JSON.stringify(watch('discarded'))}</p>
            <p>bills : {watch('bills') && JSON.stringify(watch('bills'))}</p>
            <p>weeklyLog : {watch('weeklyLog') && JSON.stringify(watch('weeklyLog'))}</p>
          </div>
        </Form>
      </Drawer>
    </div>
  )
}

export default EditConsumer
