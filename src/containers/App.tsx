import * as React from "react"
import { useDispatch } from "react-redux"

import { Dispatch } from "redux"
import { Account } from "./account/Account"
import { fetchAccounts, sortAccounts } from '../store/account/accountCreators'

const App: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch()

  const search: any = React.useCallback(
    (account: AccountFormProps) => dispatch(fetchAccounts(account)),
    [dispatch]
  )

  const sort: any = React.useCallback(
    (isAsc: Boolean, accounts: AccountEntity[]) => dispatch(sortAccounts(isAsc, accounts)),
    [dispatch]
  )

  return (
    <main>
      <h1>My Accounts</h1>
      <Account 
        searchAccounts={search} 
        sortAccounts={sort}
      />      
    </main>
  )
}

export default App