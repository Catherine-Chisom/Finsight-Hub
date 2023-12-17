import TransactionHistory from "./TransactionHistoryList";
import { useState } from "react";

import { useForm } from "react-hook-form";

const Form = () => {

  const { handleSubmit, register, setValue, watch } = useForm();
//   const [totalSpending, setTotalSpending] = useState(0);
//   const maxSpendingLimit = watch("maxSpendingLimit", 0); 

  
  const handleFormSubmit = (data) => {
    // const amount = parseFloat(data.amount);
    // const transactionType = data.type;

    // if (transactionType === "expense") {
    //   const updatedTotal = totalSpending + amount;
    //   setTotalSpending(updatedTotal);

    //   if (updatedTotal > maxSpendingLimit) {
    //     console.log("Warning: You've exceeded your spending limit!");
    //   }
    // }

    console.log(data);
  };
  return (
    <div className='mx-auto w-full'>
      <form onSubmit={handleSubmit(handleFormSubmit)} className='flex flex-col gap-4'>
        <input
          {...register("transaction")}
          type='text'
          placeholder='Rent'
          className='border rounded-md py-2 px-4 focus:outline-none focus:border-green-500'
        />
        {/* <input
          {...register("maxSpendingLimit")} // Register the field with React Hook Form
          type="number"
          placeholder="Maximum Spending Limit"
          className='border rounded-md py-2 px-4 focus:outline-none focus:border-blue-500'
        /> */}
        <select {...register("type")} className='border rounded-md py-2 px-4 focus:outline-none focus:border-green-500'>
          <option value="saving">Saving</option>
          <option value="expense">Expense</option>
          <option value="investment">Investment</option>
        </select>
        <input
          {...register("amount")}
          type='text'
          placeholder='Amount'
          className='border rounded-md py-2 px-4 focus:outline-none focus:border-green-500'
        />
        
        <button
          type="submit"
          className='bg-green-400 py-2 px-4 rounded-md text-white hover:bg-green-600'>
          Continue
        </button>
      </form>
    </div>
  );
};

export default Form;
