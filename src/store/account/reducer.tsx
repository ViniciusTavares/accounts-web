import * as actionTypes from "./accountTypes"

const initialState: AccountState = { accounts: [] }

const reducer = (
    state: AccountState = initialState,
    action: AccountAction
  ): AccountState => {
    switch (action.type) {      
      case actionTypes.FETCH_ACCOUNTS:
        const mergedAccounts = action.accounts.filter(e =>{      
          return !(state.accounts.includes(e));    
        });

        return {
          ...state,
          accounts: mergedAccounts,
        }
      case actionTypes.SORT_ACCOUNTS:
        return { 
          ...state,
          accounts: action.accounts
        }
      
    }
    return state
  }
  
  export default reducer