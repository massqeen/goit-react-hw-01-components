import React from 'react';
import PropTypes from 'prop-types';
import TransactionItem from '../TransactionItem/TransactionItem';
import { transactionHistory, header } from './TransactionHistory.module.css';

const TransactionHistory = ({ transactions }) => (
  <table className={transactionHistory}>
    <thead>
      <tr>
        <th className={header}>Type</th>
        <th className={header}>Amount</th>
        <th className={header}>Currency</th>
      </tr>
    </thead>

    <tbody>
      {transactions.map(({ id, type, amount, currency }) => (
        <TransactionItem
          key={id}
          type={type}
          amount={amount}
          currency={currency}
        />
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = { transactions: PropTypes.array.isRequired };
export default TransactionHistory;
