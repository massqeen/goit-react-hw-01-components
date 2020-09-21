import React from 'react';
import PropTypes from 'prop-types';
import TransactionItem from '../TransactionItem/TransactionItem';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({transactions}) => (
    <table className={styles.transactionHistory}>
        <thead>
        <tr>
            <th className={styles.header}>Type</th>
            <th className={styles.header}>Amount</th>
            <th className={styles.header}>Currency</th>
        </tr>
        </thead>

        <tbody>
        {transactions.map(transaction => (
                <TransactionItem
                    key={transaction.id}
                    type={transaction.type}
                    amount={transaction.amount}
                    currency={transaction.currency}
                />
            )
        )}
        </tbody>
    </table>
)

TransactionHistory.propTypes = {transactions: PropTypes.array.isRequired};
export default TransactionHistory;
