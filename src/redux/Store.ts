import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./states/AuthSlice";
import { AuthState } from "./states/AuthState";

export interface AppStore {
    auth: AuthState
}

export default configureStore<AppStore>({
    reducer: {
        auth: authSlice.reducer
    }
})