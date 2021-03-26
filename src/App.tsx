import * as React from "react"
import { useSelector, shallowEqual, useDispatch } from "react-redux"

import { Dispatch } from "redux"
import { ListAccount } from "./components/accounts/listAccount"
import { fetchAccounts } from './store/accounts/accountCreators'

const App: React.FC = () => {
  const accounts: AccountEntity[] = useSelector(
    (state: AccountState) => state.accounts,
    shallowEqual
  )

  const dispatch: Dispatch<any> = useDispatch()

  const searchAccounts: any = React.useCallback(
    (account: AccountFormProps) => dispatch(fetchAccounts(account)),
    [dispatch]
  ) 

  return (
    <main>
      <h1>My Accounts</h1>
      <ListAccount searchAccounts={searchAccounts} accounts={accounts} />      
    </main>
  )
}

export default App