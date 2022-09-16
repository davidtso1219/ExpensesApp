import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    {id: 1, date: new Date(2020, 7, 14), title: 'Car Insurance', amount: 295.67},
    {id: 2, date: new Date(2020, 7, 12), title: 'Foods', amount: 180.23},
    {id: 3, date: new Date(2020, 7, 1), title: 'Utilities', amount: 10.2},
  ];

  return (
    <div className="App">
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
