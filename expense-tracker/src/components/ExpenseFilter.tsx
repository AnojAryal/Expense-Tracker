import React from "react";

interface Props {
  onSelectCatagory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCatagory }: Props) => {
  return (
    <select
      className="form-select "
      onChange={(event) => onSelectCatagory(event.target.value)}
    >
      <option value="">All Categories</option>
      <option value="Groceries">Groceries</option>
      <option value="Utilities">Utilities</option>
      <option value="Entertainment">Entertainment</option>
    </select>
  );
};

export default ExpenseFilter;
