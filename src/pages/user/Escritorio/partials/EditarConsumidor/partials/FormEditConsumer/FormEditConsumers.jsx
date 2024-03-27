import Button from '../../../../../../../components/Button/Button'
import Form from '../../../../../../../components/Form/Form'
import InputNumber from '../../../../../../../components/InputNumber/InputNumber'
import InputSelect from '../../../../../../../components/InputSelect/InputSelect'
import { InputText } from '../../../../../../../components/InputText/InputText'
import { Switcher } from '../../../../../../../components/Switcher/Switcher'
import { handleSubmit } from './editConsumerFormControlles'

const FormEditConsumers = ({
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
}) => (
  <Form
    id="editarConsumidorForm"
    {...{ methods }}
    onSubmit={(values) =>
      handleSubmit({
        values,
        watchGroups,
        setAllConsumers,
        setConsumers,
        setAlert,
        allConsumers
      })
    }
  >
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
  </Form>
)

export default FormEditConsumers
