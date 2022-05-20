export type ActionType = {
  type: 'login' | 'logout'
}

//type StateType = {
//  authorized: boolean
//}

export const initialState =  false;

//export const LoginReducer = (state: boolean, action: ActionType) => {
export const LoginReducer = (action: ActionType) => {
  switch(action.type) {
    case 'login':
      return {state: true};
    case 'logout':
      return { state: initialState };
    default:
      return { state: initialState };
  }
}
