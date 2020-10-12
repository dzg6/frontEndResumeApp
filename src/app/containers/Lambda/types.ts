/* --- STATE --- */
export interface LambdaState {
    username:string;
    loading: boolean;
    IDs: array;
}

export type ContainerState = LambdaState;
