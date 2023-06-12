import "./App.css";
import ExpenseList from "./components/ExpenseList";
import { useState } from "react";

function App() {
  const [expenses,setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "utilities" },
    { id: 2, description: "abc", amount: 10, category: "utilities" },
    { id: 3, description: "def", amount: 10, category: "utilities" },
    { id: 4, description: "ghi", amount: 10, category: "utilities" },
  ]);

  return (
    <div>
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => setExpenses(expenses.filter(e => e.id !==id))}
      />
    </div>
  );
}

export default App;
