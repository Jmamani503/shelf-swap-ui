import { createSlice } from "@reduxjs/toolkit"
import { User } from "../../models/User.interface"
import { persistLocalStorage, removeLocalStorage } from "../../utilities/localStorageMangement"
import { LoginResponse } from "../../models/LoginResponse.interface";
import { deserializeDate, serializeDate, serializeState } from "../../utilities/dateManagement";
import { AuthState } from "./AuthState";

const emptyAuthState: AuthState = {
    token: '',
    user: {
      id: '',
      username: '',
      email: '',
      password: '',
      description: '',
      userPhoto: '',
      swappedQuantity: 0,
      requestsQuantity: 0,
      cancelledQuantity: 0,
      created_at: '',
      updatedAt: ''
    }
};
export const authKey = 'auth'

export const authSlice = createSlice({
    name: 'auth',
    initialState: localStorage.getItem('auth') ? 
        JSON.parse(localStorage.getItem('auth') as string) : emptyAuthState,
    reducers: {
        createUser: (state, action) => {
            persistLocalStorage<LoginResponse>(authKey, action.payload)
            return action.payload
        },
        updateAuth: (state, action) => {
            const newState = {
                ...state,
                user: {
                    ...action.payload
                }
              };
            persistLocalStorage<LoginResponse>(authKey, newState)
            return newState
        },
        resetUser: () => {
            removeLocalStorage(authKey)
            return emptyAuthState
        }
    }
})

export const { createUser, updateAuth, resetUser} = authSlice.actions
export default authSlice.reducer