import * as actionTypes from "./accountTypes"
import AccountApi from '../accounts/api'

const accountApi = new AccountApi();

export const fetchAccounts = async (filter: Filter, sort: Sort, page: number) => { 
  const accounts = await accountApi.fetchAccounts(filter, sort, page);

  const action: AccountAction = { 
    type: actionTypes.FETCH_ACCOUNT,
    accounts
  }

  return (dispatch: DispatchType) => {    
      dispatch(action)
  }
}

// export function removeArticle(article: IArticle) {
//   const action: ArticleAction = {
//     type: actionTypes.REMOVE_ARTICLE,
//     article,
//   }
//   return simulateHttpRequest(action)
// }
