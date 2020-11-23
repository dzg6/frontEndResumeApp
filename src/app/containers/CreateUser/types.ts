 /**
 *
 * Create User Types
 *
 */
export interface CreateUserState {
    username:string;
    email:string;
    password:string;
}

export type ContainerState = CreateUserState;
