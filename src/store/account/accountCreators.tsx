import * as actionTypes from "./accountTypes"
import AccountApi from './api'

const accountApi = new AccountApi();

export const fetchAccounts = (accountProps: AccountFormProps) => {
  return async function(dispatch: DispatchType) { 
    const filter =  { 
      firstName: accountProps?.firstName,
      lastName: accountProps?.lastName,
      mfa: accountProps?.mfa,
      country: accountProps?.country
    } as Filter
  
    const sort = { 
      createdDate: accountProps?.createdDate 
    } as Sort
  
    const page = 1;
  
    const accounts = await accountApi.fetchAccounts(filter, sort, page);
  
    dispatch({ 
      type: actionTypes.FETCH_ACCOUNT,
      accounts
    });
  }
}