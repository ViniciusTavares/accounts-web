import axios from 'axios'

const baseUrl = process.env.REACT_APP_SERVER_URL;

export default class Api implements IApi {
    async fetchAccounts(filter: Filter, sort: Sort, page: number = 1 ) : Promise<AccountEntity[]> {
        const url = `${baseUrl}/accounts?filter=${JSON.stringify(filter)}&sort=${JSON.stringify(sort)}&page=${page}`

        const result = await axios.get(url);

        return result?.data;
    }

    async downloadCSV(filter: Filter, sort: Sort, page: number = 1 ) : Promise<any> {
        const url = `${baseUrl}/accounts/csv?filter=${JSON.stringify(filter)}&sort=${JSON.stringify(sort)}&page=${page}`

        return await axios.get(url,{  responseType: 'blob' });

    }
}