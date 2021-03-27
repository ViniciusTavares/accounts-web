import React, { useEffect, } from 'react'
import { useSelector } from 'react-redux'

import { AccountFilter } from '../../components/account/AccountFilter'
import { ListAccount } from '../../components/account/ListAccount'

type Props = {
  searchAccounts: (account: AccountFormProps | any) => AccountEntity[],
  sortAccounts: (isAsc: Boolean | any, accounts: AccountEntity[]) => AccountEntity[],
}

let sort = 0;

export const Account: React.FC<Props> = ({ searchAccounts, sortAccounts }) => {
  const accounts: AccountEntity[] = useSelector(
    (state: AccountState) => state.accounts
  )

  const [formProps, setFormProps] = React.useState<AccountEntity | {}>()

  const handleInputData = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    
    const updatedProps = 
    { ...formProps, [e.currentTarget.id]: e.currentTarget.value }
    
    setFormProps(updatedProps)
    searchAccounts(updatedProps);
  }

 const handleSort = (e: React.FormEvent<HTMLAnchorElement>) => {
  e.preventDefault()
  
  if(sort === 0) { 
    sort = 1;
  } else {
    sort = sort * -1;
  }

  const isAsc = sort === 1;

  sortAccounts(isAsc, accounts);
  }

  const onSearchAccounts = (e: React.FormEvent) => {
    e.preventDefault()
    searchAccounts(formProps)   
  }  

  return (
    <div>
      <AccountFilter handleInputData={handleInputData} searchAccounts={onSearchAccounts}/>
      <ListAccount accounts={accounts} handleSort={handleSort} />
    </div>
  )
}