import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import { TransactionsProvider } from './context/TransactionContext.jsx';

ReactDOM.render(
  <TransactionsProvider>
      <App />
  </TransactionsProvider>,
  document.getElementById("root"),
);
