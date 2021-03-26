import './ListAccount.css'

type Props = {
    accounts:  AccountEntity[],
    handleSort: (e: React.FormEvent<HTMLAnchorElement>) => void
}
  
  export const ListAccount: React.FC<Props> = ({ accounts, handleSort }) => {
    /* TODO: create sort button to solve warning */
    return (
    <div>
       <table className="styled-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>MFA</th>
            <th>Country</th>
            <th>Email</th>
            <th>AMT</th>
            <th>DOB</th>            
            <th><a href="#" className="sort-by" onClick={handleSort}>Created Date</a></th>
            <th>Referred By</th>
          </tr>
        </thead>
        <tbody>
        {accounts.map(account =>           
            <tr key={account._id}>          
            <td>{account.firstName} {account.lastName}</td>
            <td>{account.mfa}</td>
            <td>{account.country}</td>
            <td>{account.email}</td>
            <td>{account.amt }</td>
            <td>{new Date(account.dob).toLocaleString('en-ca', { dateStyle:'short' })}</td>
            <td>{new Date(account.createdDate).toLocaleString('en-ca', { dateStyle:'short' })}</td>
            <td>{account.referredBy}</td>
          </tr>
          )}
        </tbody>
       </table>      
    </div>
    )
}