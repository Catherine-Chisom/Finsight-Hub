import React from 'react';
import { FaTrash } from 'react-icons/fa'

const transactionObject = [
  {
    name: 'saving',
    color: 'text-green-500',
  },
  {
    name: 'expense',
    color: 'text-red-500',
  },
];

const TransactionHistoryList = () => {
  return (
    <div className="flex flex-col py-4">
      <h1>My transaction history</h1>
      {transactionObject.map((transaction, index) => (
        <TransactionHistory key={index} category={transaction} />
      ))}
    </div>
  );
};

const TransactionHistory = ({ category }) => {
  return (
    <div className="flex justify-center bg-green-200 py-2 ">
      <FaTrash className='ml-2'/>
      <p className={`block w-full ${category.color}`} >{category.name}</p>
    </div>
  );
};

export default TransactionHistoryList;
