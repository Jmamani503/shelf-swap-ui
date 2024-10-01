export interface User {
    id:                string;
    username:          string;
    email:             string;
    password:          string;
    description:       string;
    userPhoto:         string;
    swappedQuantity:   number;
    requestsQuantity:  number;
    cancelledQuantity: number;
    created_at:        Date;
    updatedAt:         Date;
}