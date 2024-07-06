import React, { useState } from 'react'; 
import { useSelector, useDispatch } from 'react-redux';
import { deposit, withdraw } from './components/bankSlice';

function App() {
  const balance = useSelector((state) => state.bank.balance);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState('');

  return (
    <div>
      <h2>Current Balance: ${balance}</h2>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="How much you like"
      />
      <button onClick={() => dispatch(deposit(Number(amount)))}>Deposit</button> {}
      <button onClick={() => dispatch(withdraw(Number(amount)))}>Withdraw</button> {}
    </div>
  );
}

export default App;