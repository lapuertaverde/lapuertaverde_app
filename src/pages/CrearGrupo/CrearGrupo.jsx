import InputColor from '../../components/InputColor/InputColor'
import InputNumber from '../../components/InputNumber/InputNumber'
import InputSelect from '../../components/InputSelect/InputSelect'
import { CustomButton } from '../../components/ButtonCustom'

import Form from '../../components/Form/Form'
import { useEffect, useState } from 'react'

import { Switcher } from '../../components/Switcher/Switcher'

import Modal from '../../components/Modal/Modal'
import Checkbox from '../../components/Checkbox/Checkbox'

import { RadioButton } from '../../components/RadioButton/RadioButton'
import { InputText } from '../../components/InputText/InputText'

import { FlexLayout } from '../../layouts/FlexLayout/FlexLayout'
import { GridLayout } from '../../layouts/GridLayout/GridLayout'

import { InputDate } from '../../components/InputDate/InputDate'
import { dateFormat } from '../../utils/dateFormat'

import { useForm } from 'react-hook-form'
import { deleteService, get, patch, post } from '../../services/APIServices'
import { TextArea } from '../../components/TextArea/TextArea'
import Fieldset from '../../components/Fieldset/Fieldset'
import { Tooltip } from '../../components/Tooltip/Tooltip'

const options = ['verde', 'marron', 'azul', undefined]

const type = 'button'
const buttonCrudStyle = {
  cursor: 'pointer',
  border: '1px solid white',
  width: '70px',
  padding: '0.2rem',
  height: '3rem',
  textAlign: 'center',
  borderRadius: '9px',
  color: 'white'
}

const CrearGrupo = () => {
  const [defaultValues, setDefaulValues] = useState({
    edad: 0,
    petardos: 'marron',
    toggle: false,
    opcion1: false,
    pago: 'verde',
    date: dateFormat('01/02/2024'),
    example: '#00fc8f',
    puto: '#190b38'
  })

  const [openModal, setOpenModal] = useState(false)
  const [res, setRes] = useState('')

  const getDefaultValues = async () =>
    setDefaulValues({
      edad: 13,
      petardos: 'verde',
      toggle: 'false',
      opcion1: true,
      pago: 'verde',
      date: dateFormat('01/06/2024'),
      example: '#ff0000',
      puto: '#b4a4b6'
    })

  useEffect(() => {
    getDefaultValues()
  }, [])

  const handleSelectChange = (e) => {
    console.log(e)
  }

  /////////////////////////////////////////////////////////////////////
  //Logic & useFORM for CRUDForm

  const methods = useForm({
    defaultValues: {
      endpoint: 'consumer',
      consumerGroup: 'PATIO MARAVILLAS',
      KgByDefault: 13,
      active: true
    }
  })
  const { watch } = methods

  const handleGet = async () => {
    const response = await get(watch('endpoint'))
    setRes(JSON.stringify(response))

    console.log('GET', response)
  }
  const handleDelete = async () => {
    const response = await deleteService(watch('endpoint'))
    setRes(JSON.stringify(response))

    console.log('DELETE', response)
  }
  const handlePost = async ({
    endpoint,
    name,
    email,
    phone,
    consumerGroup,
    address,
    CP,
    KgByDefault,
    active
  }) => {
    const response = await post(endpoint, {
      weeklyLog: [],
      monthlyBills: [],
      name,
      email,
      phone,
      consumerGroup,
      address,
      CP,
      KgByDefault,
      active
    })
    setRes(JSON.stringify(response))

    console.log('POST', response)
  }

  const handlePatch = async () => {
    let values = {}

    if (watch('name')) values = { ...values, name: watch('name') }
    if (watch('email')) values = { ...values, email: watch('email') }
    if (watch('phone')) values = { ...values, phone: watch('phone') }
    if (watch('consumerGroup')) values = { ...values, consumerGroup: watch('consumerGroup') }
    if (watch('address')) values = { ...values, address: watch('address') }

    if (Object.keys(values).length)
      patch(watch('endpoint'), values)
        .then((res) => {
          setRes(JSON.stringify(res))
          console.log('PATCH', res)
        })
        .catch((error) => console.log(error))
  }

  ////////////////////////////////////////////////////////////////////////

  return (
    <div style={{ padding: '1rem' }}>
      <Form
        id="firstForm"
        {...{ defaultValues }}
        onError={(error) => console.log('error', error)}
        onSubmit={(values) => console.log('onSubmit', values)}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <InputColor {...{ name: 'example', label: 'Elige tu color' }} />
          <InputColor {...{ name: 'puto', label: 'Elige tu color' }} />
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

          <TextArea
            {...{
              name: 'mensaje',
              label: 'escribe tu mensaje',
              flexDirection: 'column',
              width: '300px',
              height: '150px',
              minLength: 3
            }}
            required
          />

          <GridLayout gridTemplateColumns="100px 100px" justifyContent="center">
            <p>Hola</p>
            <p>Pepe</p>
            <p>Phone</p>
          </GridLayout>
          <FlexLayout justifyContent="space-around">
            <p>Hola</p>
            <p>Pepe</p>
            <p>Phone</p>
          </FlexLayout>

          <InputText
            type="email"
            label="password"
            name="password"
            placeholder="Enter you name"
            width="40%"
          />
          <InputDate
            {...{
              name: 'date',
              label: 'date',
              justifyContent: 'start',
              gap: '0.5rem',
              alignItems: 'center',
              maxDate: dateFormat('29/01/2024')
            }}
            required
            borderB
          />
          <Tooltip text="Tonto el que lea ñññññññññññññññ ñññññññññññññññ ññññññññññññññ ñññññññññ ññññññ ññññññññññññ">
            <p>I</p>
          </Tooltip>
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

      <div style={{ marginTop: '2rem', fontVariant: 'small-caps' }}>
        <Form
          id="testingCrudForm"
          {...{ methods }}
          onError={(error) => console.log('error', error)}
          onSubmit={(values) => handlePost(values)}
        >
          <Fieldset id="fieldsetExample" legend=" CRUD TESTING:">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ width: '395px' }}>
                <InputText name="endpoint" label="Endpoint" required />
              </div>
              <div style={{ display: 'flex', gap: '2rem' }}>
                <button style={buttonCrudStyle} onClick={handleGet} {...{ type }}>
                  GetByIts...
                </button>
                <button style={buttonCrudStyle} onClick={handleDelete} {...{ type }}>
                  Delete
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ width: '395px' }}>
                  <InputText name="name" label="Name" max={100} required />
                  <InputText name="phone" label="Phone" max={100} required />
                  <InputText name="address" label="Address" max={100} required />
                  <InputText name="email" label="Email" max={100} type="email" required />
                  <InputText name="consumerGroup" label="Consumer Group" max={100} required />
                  <InputText name="CP" label="CP" max={100} required />
                  <InputNumber name="KgByDefault" label="kgByDefault" min={10} max={100} required />
                  <Switcher name="active" label="active" required />
                  <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem' }}>
                    <button style={buttonCrudStyle}>Post</button>
                    <button style={buttonCrudStyle} onClick={handlePatch} {...{ type }}>
                      Patch
                    </button>
                  </div>
                </div>
              </div>

              {res && <p style={{ fontVariant: 'historical-forms' }}>{res}</p>}
            </div>
          </Fieldset>
        </Form>
      </div>

    </div>
  )
}

export default CrearGrupo


//probando
