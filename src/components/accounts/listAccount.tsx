import * as React from "react"

type Props = {
  fetchAccounts: (article: AccountFormProps | any) => void
}

export const FetchAccounts: React.FC<Props> = ({ fetchAccounts }) => {
  const [accountProps] = React.useState<AccountFormProps>()

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault()
    fetchAccounts(accountProps)
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