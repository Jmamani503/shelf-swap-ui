import { LoginResponse } from "../models/LoginResponse.interface";
import { User } from "../models/User.interface";
import { AuthState, UserState } from "../redux/states/AuthState";

export const serializeDate = (date:Date) => {
    return date.toISOString();
  };
  
  // Función para convertir un formato serializable a una fecha
export const deserializeDate = (userlogin: UserState):User => {
    const newState = {
        ...userlogin,
        created_at: new Date(userlogin.created_at),
        updatedAt: new Date(userlogin.updatedAt)
    }
    return newState
};
export const serializeState = (userlogin: LoginResponse) => {
    console.log(userlogin)
    const newState = {
        ...userlogin,
        user: {
            ...userlogin.user,
            created_at: userlogin.user.created_at.toISOString()
        }
    }
    console.log(newState)
    return newState
};
