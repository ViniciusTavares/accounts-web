import * as actionTypes from "./accountTypes";
import AccountApi from "./api";
import { saveFile } from '../../helpers/file-manager'

const accountApi = new AccountApi();

const sanitizeSearch = (accountProps: AccountFormProps) => {
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

    return { filter, sort, page }
}

export const fetchAccounts = (accountProps: AccountFormProps) => {
  return async function (dispatch: DispatchType) {
    const { filter, sort, page } = sanitizeSearch(accountProps);

    const accounts = await accountApi.fetchAccounts(filter, sort, page);

    dispatch({
      type: actionTypes.FETCH_ACCOUNTS,
      accounts,
    });
  };
};

export const downloadCSV = (accountProps: AccountFormProps) => {
  return async function (dispatch: DispatchType) {
    const { filter, sort, page } = sanitizeSearch(accountProps)

    const result = await accountApi.downloadCSV(filter, sort, page);

    await saveFile(result.data, `accounts_${new Date().toLocaleDateString()}.csv`);
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
