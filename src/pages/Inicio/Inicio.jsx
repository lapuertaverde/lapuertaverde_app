import { useForm } from 'react-hook-form'
import { post } from '../../services/APIServices'
import { useNavigate } from 'react-router-dom'

const Inicio = () => {
  const { handleSubmit, register } = useForm()
  const navigate = useNavigate()
  const onSubmit = async (values) => {
    const response = await post('user/login', values)
    const { status, data } = response
    if (status === 200) {
      navigate('escritorio')
      localStorage.setItem('token', data.info.data)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input type="text" {...register('name')} name="name" />
      </div>
      <div>
        <input type="password" {...register('password')} name="password" />
      </div>
      <button type="submit">APPLY</button>
    </form>
  )
}

export default Inicio
