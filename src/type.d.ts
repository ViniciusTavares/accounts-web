interface ListAccount { 
	id: number, 
	firstName,
	lastName,
	mfa,
	createdDate
}

interface IApi
{
	fetchAccounts(filter: Filter, sort: Sort, page: number): Promise < Account[] >
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
	firstName: string;
	lastName: string,
	country: string;
	email: string;
	dob ? : Date;
	mfa ? : string;
	amt ? : string,
	createdDate ? : Date;
	referredBy ? : String
};