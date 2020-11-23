import { HomePageState } from 'app/containers/HomePage/types';
import { CreateUserState } from 'app/containers/CreateUser/types';
import { UserState } from 'app/containers/AuthenicateUser/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  createUser?: CreateUserState;
  homepage?: HomePageState;
  authenicateUser?: UserState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
