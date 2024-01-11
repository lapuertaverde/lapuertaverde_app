import InputNumber from '../../components/InputNumber/InputNumber'

import Form from '../../components/Form/Form'
import { useEffect, useState } from 'react'

const CrearGrupo = () => {
  const [defaultValues, setDefaulValues] = useState({ edad: 0 })

  const getDefaultValues = async () => setDefaulValues({ edad: 13 })

  useEffect(() => {
    getDefaultValues()
  }, [])

  return (
    <div style={{ padding: '1rem' }}>
      <Form
        id="firstForm"
        {...{ defaultValues }}
        onError={(error) => console.log(error)}
        onSubmit={(values) => console.log('onSubmit', values)}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <InputNumber name="edad" label="Edad" min={3} max={10} />
          <button style={{ cursor: 'pointer', border: '1px solid white', width: '52px' }}>
            SUBMIT
          </button>
        </div>
      </Form>
    </div>
  )
}

export default CrearGrupo
