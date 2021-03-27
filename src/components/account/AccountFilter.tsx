type Props = {
    searchAccounts?: (e: React.FormEvent) => void,
    handleInputData: (e: React.FormEvent<HTMLInputElement>) => void
}
  
export const AccountFilter: React.FC<Props> = ({ handleInputData }) => {
    return (
    <div className="grid">
        <label>
        <input
            className="input"
            type="text"
            id="firstName"
            onChange={handleInputData}
        />
        <span>First Name</span>
        </label>
        <label>
        <input
            className="input"
            type="text"
            id="lastName"
            onChange={handleInputData}
        />
         <span>Last Name</span>
        </label>

        <label>
        <input
            className="input"
            type="text"
            id="mfa"
            onChange={handleInputData}
        />

         <span>MFA</span>
        </label>

        <label>
        <input
            className="input"
            type="text"
            id="country"
            onChange={handleInputData}
        />
        <span>Country</span>
        </label>
    </div>
    )
}