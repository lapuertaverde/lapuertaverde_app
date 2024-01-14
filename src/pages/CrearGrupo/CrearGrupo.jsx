import InputNumber from '../../components/InputNumber/InputNumber'
import InputSelect from '../../components/InputSelect/InputSelect'

import Form from '../../components/Form/Form'
import { useEffect, useState } from 'react'
import Modal from '../../components/Modal/Modal'

const options = ['verde', 'marron', undefined]

const CrearGrupo = () => {
  const [defaultValues, setDefaulValues] = useState({ edad: 0, petardos: 'marron' })
  const [openModal, setOpenModal] = useState(false)

  const getDefaultValues = async () => setDefaulValues({ edad: 13, petardos: 'verde' })

  useEffect(() => {
    getDefaultValues()
  }, [])

  const handleSelectChange = (e) => {
    console.log(e)
  }

  return (
    <div style={{ padding: '1rem' }}>
      <Form
        id="firstForm"
        {...{ defaultValues }}
        onError={(error) => console.log('error', error)}
        onSubmit={(values) => console.log('onSubmit', values)}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <InputNumber name="edad" label="Edad" min={3} max={100} />
          <InputSelect
            {...{ options, name: 'petardos', label: 'color', maxOptions: 2 }}
            required
            multiple
            onChange={handleSelectChange}
          />
          <button style={{ cursor: 'pointer', border: '1px solid white', width: '52px' }}>
            SUBMIT
          </button>
        </div>
      </Form>
      <button onClick={() => setOpenModal(true)} style={{ cursor: 'pointer' }}>
        OPEN MODAL
      </button>
      <Modal {...{ openModal, setOpenModal }} />
    </div>
  )
}

export default CrearGrupo
