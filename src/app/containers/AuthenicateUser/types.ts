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
        code: number,
        msg:string,
    };
    isAuthenicated: boolean;
}

export type ContainerState = UserState;
