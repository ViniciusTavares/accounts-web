import * as actionTypes from "./accountTypes";
import AccountApi from "./api";

const accountApi = new AccountApi();

export const fetchAccounts = (accountProps: AccountFormProps) => {
  return async function (dispatch: DispatchType) {
    const filter = {} as Filter;

    if (accountProps?.firstName) {
      filter.firstName = accountProps.firstName;
    }

    if (accountProps?.lastName) {
      filter.lastName = accountProps.lastName;
    }

    if (accountProps?.country) {
      filter.country = accountProps.country;
    }

    if (accountProps?.mfa) {
      filter.mfa = accountProps.mfa;
    }

    const sort = {
      createdDate: accountProps?.createdDate,
    } as Sort;

    const page = 1;

    const accounts = await accountApi.fetchAccounts(filter, sort, page);

    dispatch({
      type: actionTypes.FETCH_ACCOUNTS,
      accounts,
    });
  };
};

export const sortAccounts = (isAsc: Boolean, accounts: AccountEntity[]) => {
  return async function (dispatch: DispatchType) {
    const compare = (a: AccountEntity, b: AccountEntity) => {
      if (a.createdDate < b.createdDate) {
        return isAsc ? -1 : 1;
      }
      if (a.createdDate > b.createdDate) {
        return isAsc ? 1 : -1;
      }
      return 0;
    };

    dispatch({
      type: actionTypes.SORT_ACCOUNTS,
      accounts: accounts.slice(0).sort(compare),
    });
  };
};
