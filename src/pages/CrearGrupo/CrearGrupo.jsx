import InputNumber from '../../components/InputNumber/InputNumber'
import InputSelect from '../../components/InputSelect/InputSelect'
import { CustomButton } from '../../components/ButtonCustom'

import Form from '../../components/Form/Form'
import { useEffect, useState } from 'react'

import { Switcher } from '../../components/Switcher/Switcher'

import Modal from '../../components/Modal/Modal'
import Checkbox from '../../components/Checkbox/Checkbox'

import { RadioButton } from '../../components/RadioButton/RadioButton'

const options = ['verde', 'marron', 'azul', undefined]

const CrearGrupo = () => {
  const [defaultValues, setDefaulValues] = useState({
    edad: 0,
    petardos: 'marron',
    toggle: false,
    opcion1: false,
    pago: 'verde'
  })

  const [openModal, setOpenModal] = useState(false)

  const getDefaultValues = async () =>
    setDefaulValues({ edad: 13, petardos: 'verde', toggle: 'false', opcion1: true, pago: 'verde' })

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
            onChange={handleSelectChange}
          />
          <Checkbox name="opcion1" label="Opciones" />
          <Switcher {...{ name: 'toggle', label: 'prueba' }} />
          <RadioButton
            {...{
              options,
              name: 'pago',
              label: 'pago',
              width: '50px'
              // disabledElements: [options[2], options[0]]
            }}
          />
          <button style={{ cursor: 'pointer', border: '1px solid white', width: '52px' }}>
            SUBMIT
          </button>
        </div>
      </Form>
      <button onClick={() => setOpenModal(true)} style={{ cursor: 'pointer' }}>
        OPEN MODAL
      </button>
      <Modal {...{ openModal, setOpenModal, title: 'Modal Example' }} draggable>
        <Form
          id="secondForm"
          {...{ defaultValues: { petardo: 'verde', edadB: 18 } }}
          onError={(error) => console.log('error', error)}
          onSubmit={(values) => console.log('onSubmit', values)}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <InputNumber name="edadB" label="Edad" min={3} max={100} />
            <InputSelect {...{ options, name: 'petardo', label: 'color', maxOptions: 2 }} />

            <button style={{ cursor: 'pointer', border: '1px solid white', width: '52px' }}>
              SUBMIT
            </button>
          </div>
        </Form>
        <button onClick={() => setOpenModal(true)} style={{ cursor: 'pointer' }}>
          OPEN MODAL
        </button>
      </Modal>
      <CustomButton texto="hola que ase" />
    </div>
  )
}

export default CrearGrupo
