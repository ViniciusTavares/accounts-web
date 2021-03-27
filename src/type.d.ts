interface AccountFormProps { 
	id?: number, 
	firstName?: string,
	lastName?: string,
	mfa?: string,
	country?: string,
	createdDate?: number
}

interface IApi
{
	fetchAccounts(filter: Filter, sort: Sort, page: number): Promise<AccountEntity[]>
}

type AccountState = {
	accounts: ListAccount[]
}

type AccountAction = {
	type: string
	accounts: AccountEntity[]
}

type Filter = {
	firstName: string,
	lastName: string,
	country: string,
	mfa: string
};

type Sort = {
	createdDate: -1 | 1;
};

type DispatchType = (args: AccountAction) => AccountAction

type AccountEntity = {
	_id: string,
	firstName: string;
	lastName: string,
	country: string;
	email: string;
	dob : string;
	mfa? : string;
	amt : string,
	createdDate : string;
	referredBy? : string
};