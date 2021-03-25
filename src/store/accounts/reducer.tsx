import * as actionTypes from "./accountTypes"

const initialState: AccountState = {}

const reducer = (
    state: AccountState = initialState,
    action: AccountAction
  ): AccountState => {
    switch (action.type) {      
      case actionTypes.FETCH_ACCOUNT:
        state.accounts.concat(action.accounts)
        return {
          ...state,
          accounts: updatedArticles,
        }
    }
    return state
  }
  
  export default reducer