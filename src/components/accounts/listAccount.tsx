import * as React from "react"

type Props = {
  accounts: AccountEntity[],
  searchAccounts: (account: AccountFormProps | any) => void,
}

export const ListAccount: React.FC<Props> = ({ searchAccounts }) => {
  const [accountFormProps] = React.useState<AccountFormProps>()

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault()
    searchAccounts(accountFormProps)
  }

  return (
    <form onSubmit={submitForm} className="Fetch-article">
      <input
        type="text"
        id="firstName"
        placeholder="First Name"
      />
      <input
        type="text"
        id="lastName"
        placeholder="Last Name"
      />
      <button>
        Fetch accounts
      </button>

    </form>
  )
}