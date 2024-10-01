import { Link, useNavigate } from 'react-router-dom'
import styles from './Register.module.css'
import { SubmitHandler, useForm } from 'react-hook-form'
import { RegisterRequest } from '../../../models/RegisterRequest'
import AuthService from '../../../services/auth.service'
import { useEffect } from 'react'

function Register() {

  const { register, handleSubmit } = useForm<RegisterRequest>()
  const {
    registerRequest,
    registerRequestResponse,
    registerRequestLoading,
    registerRequestError
  } = AuthService()
  const navigate = useNavigate()
  
  useEffect(() => {
    if(registerRequestResponse){
      navigate('/login', {replace: true})
    }
  }, [registerRequestResponse])

  const onSubmit: SubmitHandler<RegisterRequest> = (data) => {
    registerRequest(data)
  }
   
  return (
    <div className={styles.container}>
       <div>
        <h2>Sign up to exchange your books and discover new reads!</h2>
      </div>
    <div className={styles.auth_card}>
      <h3 className={styles.auth_card_title}>Register</h3>
      <form className={styles.auth_form_container} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.auth_form}>
          <div>
            <input {...register('username')} type="text" placeholder="Username" name='username'/>
          </div>
          <div>
            <input {...register('email')} type="email" placeholder="Email"/>
          </div>
          <div>
            <input {...register('password')} type="password" placeholder="Password"/>
          </div>
        </div>
        <button type='submit'>Register</button>
      </form>
      <span className={styles.redirect_text}>
        Already have an account  ? 
        <Link className={styles.accent_text} to="/auth/login"> Login</Link>
      </span>
    </div>
  </div>
  )
}
export default Register