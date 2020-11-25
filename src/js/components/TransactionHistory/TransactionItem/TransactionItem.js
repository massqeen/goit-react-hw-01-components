import PropTypes from 'prop-types';
import { Tr, Data, Type, Currency } from './TransactionItemStyles';

const TransactionItem = ({ type, amount = 0, currency }) => (
  <Tr>
    <Type>{type}</Type>
    <Data>{amount}</Data>
    <Currency>{currency}</Currency>
  </Tr>
);

TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionItem;
