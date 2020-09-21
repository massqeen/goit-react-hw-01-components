import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionItem.module.css';

const TransactionItem = ({type, amount, currency}) => (
    <tr className={styles.row}>
        <td className={styles.type}>{type}</td>
        <td className={styles.data}>{amount}</td>
        <td className={styles.currency}>{currency}</td>
    </tr>
)

TransactionItem.defaultProps = {
    type: '',
    amount: 0,
    currency: ''
}
TransactionItem.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
}

export default TransactionItem;
