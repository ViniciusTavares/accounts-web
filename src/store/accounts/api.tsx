import axios from 'axios'

const baseUrl = process.env.serverUrl;

export default class Api implements IApi {
    fetchAccounts(filter: Filter, sort: Sort, page: number = 1 ) : Promise<Account[]> {
        return axios
            .get(`${baseUrl}/accounts/filter=${filter}&sort=${sort}&page=${page}`);
    }
}