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
import Fieldset from '../../../../../components/Fieldset/Fieldset'

import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import { patch } from '../../../../../services/APIServices'
import { toast } from 'react-toastify'
import Button from '../../../../../components/Button/Button'
import ConsumerInfoCard from './ConsumerInfoCard/ConsumerInfoCard'

const EditConsumer = ({ consumerGroups, setAlert }) => {
  const [allConsumers, setAllConsumers] = useState(consumersFlatter(consumerGroups))
  const [consumers, setConsumers] = useState(allConsumers)

  const grupos = consumerGroups.map((group) => group.name)

  const [open, setOpen] = useState(false)
  const [width, setWidth] = useState('100%')
  const [drawerWidth, setDrawerWidth] = useState('280px')

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

  const headerMethods = useForm({ defaultValues: { groups: 'Todos' } })

  const { watch: watchGroups } = headerMethods

  const methods = useForm({ defaultValues, mode: 'onChange' })

  const { reset, watch } = methods

  const onClose = () => setOpen(false)

  const onClick = (consumer) => {
    reset(consumer)
    if (!open) setOpen(true)
  }

  const onSubmit = (values) =>
    patch(`consumer/${values._id}`, {
      ...values,
      favorites: ['65d9e544112ae95f4637a63b', '65d8f16e1a57081cb8d94b9c']
    })
      .then(() => {
        toast.success('Consumidor Actualizado', { position: 'top-left' })

        const consumersUpdated = allConsumers.map((consumer) => {
          if (consumer._id === values._id) return values
          else return consumer
        })
        setAllConsumers(consumersUpdated)
        setConsumers(
          consumersUpdated.filter(({ groupName }) =>
            watchGroups('groups') === 'Todos'
              ? groupName !== watchGroups('groups')
              : groupName === watchGroups('groups')
          )
        )
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
    if (open) setWidth('calc(100% - 290px)')
    else setWidth('100%')
  }, [open])

  return (
    <div>
      <header className={header}>
        <span>Editar Consumidor</span>
      </header>
      <div>
        <Form id="headerForm" {...{ methods: headerMethods }}>
          <div style={{ fontSize: '1rem', padding: '1rem' }}>
            <InputSelect
              name="groups"
              options={['Todos', ...grupos]}
              label="Filtrar por grupo"
              onChange={({ target: { value } }) => {
                setConsumers(
                  allConsumers.filter(({ groupName }) =>
                    value === 'Todos' ? groupName !== value : groupName === value
                  )
                )
              }}
            />
          </div>
        </Form>
      </div>
      <div style={{ width }}>
        <ConsumersCard {...{ consumers, onClick, id: !open ? null : watch('_id') }} />
      </div>

      <Drawer
        {...{ open, onClose }}
        formId="editarConsumidorForm"
        width={drawerWidth}
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
              flexWrap: 'wrap',
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
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              type="button"
              text={
                drawerWidth === '1350px'
                  ? 'Ocultar Información Detallada'
                  : 'Mostrar Información Detallada'
              }
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
          </div>
        </Form>

        {drawerWidth === '1350px' && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              width: '100%',
              justifyContent: 'center'
            }}
          >
            <ConsumerInfoCard values={watch('discarded')} legend="DESCARTADOS" />

            <ConsumerInfoCard values={watch('favorites')} legend="FAVORITOS" />

            <Fieldset legend="PEDIDO EN CURSO" collapsible>
              {watch('orderInProgress')?.length > 0 && (
                <div
                  style={{
                    border: '1px solid white',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '1rem'
                  }}
                >
                  {watch('orderInProgress')?.map(({ name }) => (
                    <div key={name}>
                      <p>{name}</p>
                    </div>
                  ))}
                </div>
              )}
            </Fieldset>
            <Fieldset legend="RECIBOS DEL CONSUMIDOR" collapsible>
              {watch('bills')?.length > 0 && (
                <div
                  style={{
                    border: '1px solid white',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '1rem'
                  }}
                >
                  {watch('bills')?.map(({ name }) => (
                    <div key={name}>
                      <p>{name}</p>
                    </div>
                  ))}
                </div>
              )}
            </Fieldset>
          </div>
        )}
      </Drawer>
    </div>
  )
}

export default EditConsumer
