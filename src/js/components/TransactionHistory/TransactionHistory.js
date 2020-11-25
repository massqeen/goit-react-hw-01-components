import PropTypes from 'prop-types';
import TransactionItem from './TransactionItem/TransactionItem';
import { Table, Th } from './TransactionHistoryStyles';

const TransactionHistory = ({ transactions }) => (
  <Table>
    <thead>
      <tr>
        <Th>Type</Th>
        <Th>Amount</Th>
        <Th>Currency</Th>
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
  </Table>
);

TransactionHistory.propTypes = { transactions: PropTypes.array.isRequired };
export default TransactionHistory;
