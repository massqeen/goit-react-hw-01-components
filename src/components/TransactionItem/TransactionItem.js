import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionItem.module.css';
const { row, type: types, data, currency: currencies } = styles;

const TransactionItem = ({ type, amount, currency }) => (
  <tr className={row}>
    <td className={types}>{type}</td>
    <td className={data}>{amount}</td>
    <td className={currencies}>{currency}</td>
  </tr>
);

TransactionItem.defaultProps = {
  type: '',
  amount: 0,
  currency: '',
};
TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionItem;
