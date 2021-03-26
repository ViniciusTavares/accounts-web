import axios from 'axios'
import qs from 'qs'

const baseUrl = process.env.REACT_APP_SERVER_URL;

export default class Api implements IApi {
    async fetchAccounts(filter: Filter, sort: Sort, page: number = 1 ) : Promise<AccountEntity[]> {
        const params = qs.stringify({ filter, sort, page});

        const result = await axios.get(`${baseUrl}/accounts?${params}`);

        return result?.data;
    }
}