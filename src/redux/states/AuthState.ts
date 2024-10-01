export interface AuthState{
    token: string,
    user: UserState
}
export interface UserState {
    id:                string;
    username:          string;
    email:             string;
    password:          string;
    description:       string;
    userPhoto:         string;
    swappedQuantity:   number;
    requestsQuantity:  number;
    cancelledQuantity: number;
    created_at:        string;
    updatedAt:         string;
}
