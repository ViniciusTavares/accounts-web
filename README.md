# Accounts Web

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). 

## Requirements 

- NodeJS
- This projects relies on data provided by [Accounts-Api](https://github.com/ViniciusTavares/accounts-api).

## Running 

After seeting up [Accounts-Api](https://github.com/ViniciusTavares/accounts-api), copy the file `env-example` to `.env.local`

```
cp .env-example .env.local
```

Change the env var ```REACT_APP_SERVER_URL``` with the proper server url.

For instance, if [Accounts-Api](https://github.com/ViniciusTavares/accounts-api) is running on ```port 3000```, it would be:

```
REACT_APP_SERVER_URL=http://localhost:3000
```

Install packages

``` npm install ``` 

Run the project 

``` npm start ``` 
