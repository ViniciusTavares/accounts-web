type Props = {
    searchAccounts?: (e: React.FormEvent) => void,
    handleInputData: (e: React.FormEvent<HTMLInputElement>) => void
}
  
export const AccountFilter: React.FC<Props> = ({ handleInputData }) => {
    return (
    <div>
        <input
            className="input"
            type="text"
            id="firstName"
            placeholder="First Name"
            onChange={handleInputData}
        />
        <input
            className="input"
            type="text"
            id="lastName"
            placeholder="Last Name"
            onChange={handleInputData}
        />

        <input
            className="input"
            type="text"
            id="mfa"
            placeholder="MFA"
            onChange={handleInputData}
        />

        <input
            className="input"
            type="text"
            id="country"
            placeholder="Country"
            onChange={handleInputData}
        />
    </div>
    )
}