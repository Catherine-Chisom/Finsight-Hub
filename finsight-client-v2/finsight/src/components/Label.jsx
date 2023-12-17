import React from 'react';

const LabelComponents = ({ type, color, percentage }) => {
  return (
    <div className="flex justify-between">
      <div className={`flex gap-2 ${color}`}>
        <h3 className="text-xl">{type}</h3>
      </div>
      <h3 className="text-xl">{percentage ?? 0}</h3>
    </div>
  );
};

const Label = () => {
  const labelObject = [
    {
      type: "Savings",
      color: "text-green-500",
      percentage: "",
    },
    {
      type: "Expenses",
      color: "text-red-500",
      percentage: "30%",
    },
    {
      type: "Investment",
      color: "text-blue-500",
      percentage: "25%",
    },
    // Add more label objects as needed
  ];

  return (
    <div>
      {labelObject.map((label, index) => (
        <LabelComponents
          key={index}
          type={label.type}
          color={label.color}
          percentage={label.percentage}
        />
      ))}
    </div>
  );
};

export default Label;
