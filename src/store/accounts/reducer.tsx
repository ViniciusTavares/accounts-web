import * as actionTypes from "./accountTypes"

const initialState: AccountState = { accounts: [] }

const reducer = (
    state: AccountState = initialState,
    action: AccountAction
  ): AccountState => {
    switch (action.type) {      
      case actionTypes.FETCH_ACCOUNT:
        return {
          ...state,
          accounts: state.accounts.concat(action.accounts),
        }
    }
    return state
  }
  
  export default reducer