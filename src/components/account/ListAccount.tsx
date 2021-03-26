import React, { useEffect, } from 'react'
import { useSelector } from 'react-redux'

import './ListAccount.css';

// let sort = 1;

type Props = {
  accounts: AccountEntity[],
  searchAccounts: (account: AccountFormProps | any) => AccountEntity[],
}

export const ListAccount: React.FC<Props> = ({ searchAccounts }) => {
  const accounts: AccountEntity[] = useSelector(
    (state: AccountState) => state.accounts
  )

  const [formProps, setFormProps] = React.useState<AccountEntity | {}>()

  const handleFormData = (e: React.FormEvent<HTMLInputElement>) => {
    const updatedProps = e.currentTarget.value 
    ? { ...formProps, [e.currentTarget.id]: e.currentTarget.value }
    : formProps

    setFormProps(updatedProps)
  }

//  const handleSort = (e: React.FormEvent<HTMLInputElement>) => {
//    sort = sort * -1;

//     setFormProps({
//       ...formProps,
//       [e.currentTarget.id]: sort ,
//     })}

  useEffect(() => {
    searchAccounts(formProps)
  }, [formProps, searchAccounts])

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault()
    searchAccounts(formProps)   
  }  

  return (
    <form  onSubmit={submitForm} className="Fetch-article">
      <input
        className="input"
        type="text"
        id="firstName"
        placeholder="First Name"
        onChange={handleFormData}
      />
      <input
        className="input"
        type="text"
        id="lastName"
        placeholder="Last Name"
        onChange={handleFormData}
      />

      <input
        className="input"
        type="text"
        id="mfa"
        placeholder="MFA"
        onChange={handleFormData}
      />

      <input
        className="input"
        type="text"
        id="country"
        placeholder="Country"
        onChange={handleFormData}
      />

      <button className="button">
        Search
      </button>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>MFA</th>
            <th>Country</th>
            <th>Email</th>
            <th>AMT</th>
            <th>DOB</th>
            <th>Created Date</th>
            <th>Referred By</th>
          </tr>
        </thead>
        {accounts.map(account => 
          <tbody>
            <tr>          
              <td>{account.firstName} {account.lastName}</td>
              <td>{account.mfa}</td>
              <td>{account.country}</td>
              <td>{account.email}</td>
              <td>{account.amt }</td>
              <td>{new Date(account.dob).toLocaleString('en-ca', { dateStyle:'short' })}</td>
              <td>{new Date(account.createdDate).toLocaleString('en-ca', { dateStyle:'short' })}</td>
              <td>{account.referredBy}</td>
            </tr>
          </tbody>
        )}
       </table>      
    </form>
  )
}