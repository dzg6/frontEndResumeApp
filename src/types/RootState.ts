import { LambdaState } from 'app/containers/Lambda/types';
import { LoginState } from 'app/containers/Login/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  lambda?: LambdaState;
  login?: LoginState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
