/**
 *
 * Authenicate User State
 * 
 */
export interface UserState {
    username:string;
    password: string;
    email: string;
    status:{
        msg:string,
    };
    isAuthenicated: boolean;
}

export type ContainerState = UserState;
