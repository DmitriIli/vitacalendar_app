import { useEffect, useState } from 'react';
import './App.css';
import Calendar from './components/Calendar';

  
  const tg = window.Telegram.WebApp;
  
  function App() {

    useEffect(() => {
      tg.ready();
      console.log('console')
      console.log(`${tg.initDataUnsafe.user.id}`)
     }, [])

    const onClose = () => {
      tg.close();
    }

    const [date, setDate] = useState(new Date());

    const getSelectedDate = (date) => {
        console.log(date)
    }

    useEffect(() => {
      getSelectedDate(date);
  }, [date]);

    return (
      <div className="App">
        <Calendar setDate = {setDate} />
        <button onClick={onClose}>
          <h1>
            Close
          </h1>
        </button>
      </div>
    );
  }

  export default App;
