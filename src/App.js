import Expenses from "./components/Expenses/Expenses.jsx";
import NewExpense from "./components/NewExpense/NewExpense.jsx";

function App() {
  const AddExpenseDataHandler = (AddExpenseData) => {
    const expenseData = {
      ...AddExpenseData,
    };
    console.log(expenseData);
  };
  return (
    <div>
      <NewExpense onAddExpenseData={AddExpenseDataHandler} />
      <Expenses />
    </div>
  );
}

export default App;
