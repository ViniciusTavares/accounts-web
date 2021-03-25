import * as actionTypes from "./accountTypes"
import AccountApi from '../accounts/api'

const accountApi = new AccountApi();

export const fetchAccounts = async (accountProps: AccountFormProps) => {
  const filter =  { 
    firstName: accountProps?.firstName,
    lastName: accountProps?.lastName,
    mfa: accountProps?.mfa,
    country: accountProps?.country
  } as Filter

  const sort = { 
    createdDate: accountProps.createdDate 
  } as Sort

  const page = 1;

  const accounts = await accountApi.fetchAccounts(filter, sort, page);

  const action: AccountAction = { 
    type: actionTypes.FETCH_ACCOUNT,
    accounts
  }

  return (dispatch: DispatchType) => {    
      dispatch(action)
  }
}