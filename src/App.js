import React, {useState} from 'react';
import './App.scss';

// Components
import TransactionsList from './Components/TransactionsList/TransactionsList';
import LatestTranslate from './Components/TransactionsList/LatestTranslate/LatestTranslate';
import TransactionDetail from './Components/TransactionDetail/TransactionDetail';

// Context
import { Context } from './Components/Context/Context'

function App() {
  const [activeDetalie, setActiveDetalie] = useState(false)
  const [balance, setBalance] = useState('')
  const [target, setTarget] = useState('')
  const [date, setDate] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [status, setStatus] = useState('')
  const [type, setType] = useState('')

  if(activeDetalie) {
    document.body.classList.add('look')
  } else {
    document.body.classList.remove('look')
  }

  // Получаємо дані про транзакцію.
  function getBalance(bal) {
    setBalance(bal)
  }

  function getTarget(value) {
    setTarget(value)
    console.log(value)
  }

  function getDate(value) {
    setDate(value)
    console.log(value)
  }

  function getDescription(value) {
    setDescription(value)
    console.log(value)
  }

  function getPrice(value) {
    setPrice(value)
    console.log(value)
  }

  function getStatus(value) {
    setStatus(value)
    console.log(status)
  }

  function getType(value) {
    setType(value)
    console.log(value)
  }

  return (
    <Context.Provider value={{
      getBalance,
      getTarget,
      getDate,
      getDescription,
      getPrice,
      getStatus,
      getType,
      balance,
      target,
      date,
      description,
      price,
      status,
      type,
      activeDetalie,
      setActiveDetalie
    }}>
      <div className="App">
        <TransactionsList />
        <LatestTranslate />
        <TransactionDetail/>
    </div>
    </Context.Provider>
  );
}

export default App;
