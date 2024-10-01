import usePatchRequest from "../../../../../hooks/usePatchRequest";
import { User } from "../../../../../models/User.interface";
import { UpdateUserInfoRequest } from "../models/UpdateUserInfoRequest.interface";

const userService = () => {
  
    const baseUrl: string = 'http://localhost:3000'
    const endpoint: string = baseUrl + '/users'

    const { 
        patchRequest: userPatchRequest, 
        response: userPatchResponse, 
        loading: userPatchLoading, 
        error: userPatchError 
    } = usePatchRequest<User>();

    const updateUser = (id: string, updatedUser: UpdateUserInfoRequest) => {
        return userPatchRequest(`${endpoint}/${id}`, updatedUser)
    }

    return {
        updateUser,
        userPatchResponse,
        userPatchLoading,
        userPatchError
    }
}
export default userService