/* --- STATE --- */
export interface UserState {
    username:string;
    password: string;
    status: object;
    isAuthenicated: boolean;
}

export type ContainerState = UserState;
