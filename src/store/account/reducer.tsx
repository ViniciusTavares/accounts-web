import * as actionTypes from "./accountTypes"

const initialState: AccountState = { accounts: [] }

const reducer = (
    state: AccountState = initialState,
    action: AccountAction
  ): AccountState => {
    switch (action.type) {      
      case actionTypes.FETCH_ACCOUNT:
        const mergedAccounts = action.accounts.filter(e =>{      
          return !(state.accounts.includes(e));    
        });

        return {
          ...state,
          accounts: mergedAccounts,
        }
    }
    return state
  }
  
  export default reducer