import { useForm } from 'react-hook-form'
import { post } from '../../services/APIServices'
import { useNavigate } from 'react-router-dom'
import style from './inicio.module.scss'
import Icon from '../../components/Icon/Icon'
import { useEffect } from 'react'
import { toast } from 'react-toastify'

const Inicio = () => {
  const { handleSubmit, register } = useForm()

  const navigate = useNavigate()

  const onSubmit = async (values) => {
    const response = await post('user/login', values)
    const { status, data } = response
    if (status === 200) {
      const { role } = data.info.data
      sessionStorage.setItem('token', JSON.stringify(data.info.data))
      if (role === 'Admin') navigate('escritorio')
      if (role === 'Consumer') navigate('consumidor')
    }
  }

  useEffect(() => {
    const oldToken = sessionStorage.getItem('token')

    if (oldToken) sessionStorage.removeItem('token')
  }, [])

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.loginForm} autoComplete="off">
      <div className={style.loginCard}>
        <div className={style.inputLoginContainer}>
          <Icon icon="user" color="white" />
          <input
            type="text"
            {...register('name')}
            name="name"
            placeholder="User name"
            style={{ padding: '0.4rem', borderRadius: '4px' }}
            autoFocus
            autoComplete="off"
          />
        </div>
        <div className={style.inputLoginContainer}>
          <Icon icon="key" color="white" />
          <input
            type="password"
            {...register('password')}
            name="password"
            placeholder="Password"
            style={{ padding: '0.4rem', borderRadius: '4px' }}
            autoComplete="off"
          />
        </div>
        <button type="submit" className={style.buttonLogin}>
          APPLY
        </button>
      </div>
    </form>
  )
}

export default Inicio
