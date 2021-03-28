import * as React from "react"
import { useDispatch } from "react-redux"

import { Dispatch } from "redux"
import { Account } from "./account/Account"
import { fetchAccounts, sortAccounts, downloadCSV } from '../store/account/accountCreators'

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

  const csv: any = React.useCallback(
    (accounts: AccountFormProps) => dispatch(downloadCSV(accounts)),
    [dispatch]
  )

  dispatch(fetchAccounts({}));

  return (
    <main className="grid-wrap">
      <h1>Accounts</h1>
      <Account 
        searchAccounts={search} 
        sortAccounts={sort}
        downloadCSV={csv}
      />      
    </main>
  )
}

export default App