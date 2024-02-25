import Form from '../../../../../components/Form/Form'
import InputSelect from '../../../../../components/InputSelect/InputSelect'
import { InputText } from '../../../../../components/InputText/InputText'
import InputNumber from '../../../../../components/InputNumber/InputNumber'
import { Switcher } from '../../../../../components/Switcher/Switcher'
import Button from '../../../../../components/Button/Button'
import Avatar from '../../../../../components/Avatar/Avatar'

import { useForm } from 'react-hook-form'
import { post } from '../../../../../services/APIServices'

import {
  boxes,
  header,
  formContainer,
  superContainer,
  footer,
  form
} from './crearConsumidor.module.scss'
import { toast } from 'react-toastify'

const CrearConsumidor = ({ consumerGroups, setAlert }) => {
  const grupos = consumerGroups.map(({ name }) => name)

  const defaultValues = {
    consumerGroup: '',
    name: '',
    email: '',
    phone: '',
    CP: '',
    dni: '',
    address: '',
    KgByDefault: 3,
    active: true
  }

  const methods = useForm({
    defaultValues,
    mode: 'onChange'
  })

  const { reset } = methods

  const onSubmit = (values) => {
    const consumerGroupSelected = consumerGroups.find(({ name }) => name === values.consumerGroup)
    if (consumerGroupSelected) {
      const consumerGroupId = consumerGroupSelected._id
      post('consumer', { ...values, consumerGroup: consumerGroupId })
        .then(() => {
          toast.success('Consumidor creado')
          reset(defaultValues)
        })
        .catch((error) =>
          setAlert({
            open: true,
            title: 'Error creando consumidor',
            message: error.message,
            type: 'error'
          })
        )
    }
  }

  return (
    <div className={superContainer}>
      <header className={header}>Crear Consumidor</header>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <div className={formContainer}>
          <Form {...{ methods, onSubmit }} id="createNewConsumerForm">
            <div className={form}>
              <div className={boxes}>
                <InputSelect name="consumerGroup" label="Grupo" options={grupos} required />
                <InputNumber name="KgByDefault" label="Kgs cesta" min={3} required />
                <Switcher name="active" label="Activx" />
              </div>
              <div className={boxes}>
                <InputText name="name" label="Nombre" required />
                <InputText name="email" label="Email" required />
                <InputText name="address" label="Dirección" required />
              </div>
              <div className={boxes}>
                <InputText name="phone" label="Telefono" required />
                <InputText name="CP" label="CP" required />
                <InputText name="dni" label="DNI" required />
              </div>
            </div>
          </Form>
        </div>
        <div style={{ alignSelf: 'center', flex: 2 }}>
          <Avatar
            style={{ height: '90%', width: '90%', borderRadius: 0 }}
            src="https://cdn.pixabay.com/photo/2012/05/04/10/57/consumer-47205_1280.png"
          />
        </div>
      </div>
      <footer className={footer}>
        <Button
          form="createNewConsumerForm"
          text="Crear"
          style={{ color: 'white', border: '1px solid white' }}
        />
      </footer>
    </div>
  )
}

export default CrearConsumidor
