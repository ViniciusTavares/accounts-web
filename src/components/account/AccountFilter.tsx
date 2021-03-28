type Props = {
    searchAccounts?: (e: React.FormEvent) => void,
    handleInputData: (e: React.FormEvent<HTMLInputElement>) => void,
    handleCSV: (e: React.FormEvent<HTMLButtonElement>) => void
}
  
export const AccountFilter: React.FC<Props> = ({ handleInputData, handleCSV }) => {
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
        <button 
            className="button transparent-blue"
            onClick={handleCSV}> <b>Download CSV</b>
        </button>
    </div>
    )
}