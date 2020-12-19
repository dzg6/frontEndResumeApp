 /**
 *
 * Create User Types
 *
 */
export interface CreateUserState {
    username:string;
    email:string;
    password:string;
    status:{
        code:number,
        msg:string,
    };
}

export type ContainerState = CreateUserState;
