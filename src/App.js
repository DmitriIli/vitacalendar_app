import { useEffect } from 'react';
import './App.css';
import Calendar from './components/Calendar';

  
  const tg = window.Telegram.WebApp;
  
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
        <button onClick={onClose}>
          <h1>
            Close
          </h1>
        </button>
      </div>
    );
  }

  export default App;
