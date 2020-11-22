import PropTypes from 'prop-types';
import TransactionItem from './TransactionItem';
import styled from 'styled-components';

const Table = styled.table`
  min-width: 872px;
  margin: 0 auto;
  border-collapse: collapse;
`;
const Th = styled.th`
  color: #fff;
  font-size: 13px;
  font-weight: 700;
  line-height: 30px;
  text-transform: uppercase;
  letter-spacing: 1.17px;
  background-color: #00bcd4;
  border: 2px solid #e0e6e7;
  padding: 12px;
`;

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
