import * as React from "react"
import { render } from "react-dom"
import { createStore, applyMiddleware, Store } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"

import App from "./containers/App"
import accountReducer from "./store/account/reducer"

import './index.css'

const store: Store<AccountState, AccountAction> & {
  dispatch: DispatchType
} = createStore(accountReducer, applyMiddleware(thunk))

const rootElement = document.getElementById("root")
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)