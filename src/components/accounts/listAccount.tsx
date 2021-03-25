import * as React from "react"

type Props = {
  fetchAccounts: (article: ListAccount | any) => void
}

export const FetchAccounts: React.FC<Props> = ({ fetchAccounts }) => {
  const [account] = React.useState<AccountEntity | {}>()

const { firstName, lastName, mfa, country, createdDate } = account;

const filter =  { firstName, lastName, mfa, country };
const sort = { createdDate }
// const page = account.page + 1;

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault()
    fetchAccounts(filter)
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