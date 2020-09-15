import React from 'react';
import HistoryRequest from './components/HistoryRequest';
import RequestForm from './components/RequestForm';


function App() {
  return (
    <div className='container '>
      <div className='row pt-3'>
        <div className='col'>
          <h2>Создание запроса</h2>
          <RequestForm />
        </div>
        <div className='col'>
          <h2>История запросов</h2>
          <HistoryRequest />
        </div>
      </div>
    </div>
  );
}

export default App;
