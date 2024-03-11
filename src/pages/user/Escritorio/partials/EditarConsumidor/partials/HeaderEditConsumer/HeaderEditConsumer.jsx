import Form from '../../../../../../../components/Form/Form'
import InputSelect from '../../../../../../../components/InputSelect/InputSelect'
import { header } from '../../../BorrarConsumidor/deleteConsumer.module.scss'

const HeaderEditConsumer = ({ headerMethods, setConsumers, allConsumers, grupos }) => (
  <>
    <header className={header}>
      <span>Editar Consumidor</span>
    </header>
    <div>
      <Form id="headerForm" methods={headerMethods}>
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
  </>
)

export default HeaderEditConsumer
