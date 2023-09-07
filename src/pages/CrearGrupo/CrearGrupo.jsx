import InputNumber from '../../components/InputNumber/InputNumber'
import InputSelect from '../../components/InputSelect/InputSelect'
import Form from '../../components/Form/Form'

const CrearGrupo = () => (
  <div>
    <Form
      id="firstForm" defaultValues={{ total: 20, select: '' }}
      onError={(error) => console.log(error)}
      onSubmit={(values) => console.log(values)}
      >
      <InputNumber name="total" />
      <InputSelect name="select" />
    </Form>
  </div>
)

export default CrearGrupo
