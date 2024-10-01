import styles from './EditUserInfo.module.css'
import { SubmitHandler, useForm } from "react-hook-form"
import { User } from "../../../../../../models/User.interface"
import { UpdateUserInfoRequest } from '../../models/UpdateUserInfoRequest.interface'
import { useDispatch } from 'react-redux'
import userService from '../../services/user.service'
import { useEffect } from 'react'
import { updateAuth } from '../../../../../../redux/states/AuthSlice'

interface Props {
    user: User
    closeModal : () => void
}

const EditUserInfo = ({user, closeModal}: Props) => {
    
    const dispath = useDispatch()
    const {
        updateUser,
        userPatchResponse,
        userPatchLoading,
        userPatchError
    } = userService()
    const { register, handleSubmit } = useForm<UpdateUserInfoRequest>()

    useEffect(() => {
      if(userPatchResponse){
        dispath(updateAuth(userPatchResponse))
        closeModal()
      }
    }, [userPatchResponse])
    
    const onSubmit: SubmitHandler<UpdateUserInfoRequest> = (data) => {
        updateUser(user.id, data)
    }

    return (
        <div className={styles.container}>
            <h3 className={styles.login_title}>Edit Info</h3>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form_container}>
                <div>
                    <input defaultValue={user.userPhoto} {...register('userPhoto')} type="text" placeholder="Email"/>
                </div>
                <div>
                    <textarea defaultValue={user.description} {...register('description')} placeholder="Description"></textarea>
                </div>
                <button type="submit">Save Changes</button>
            </form>
        </div>
    )
}
export default EditUserInfo