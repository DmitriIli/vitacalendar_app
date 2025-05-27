import { useEffect } from 'react';
import './App.css';
import Calendar from './components/Calendar';

tg = window.Telegram.webApp;

function App() {

  useEffect(() => {
    tg.ready();
   }, [])

  const onClose = () => {
    tg.close();
  }

  return (
    <div className="App">
      <Calendar />
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default App;
