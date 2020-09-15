import React from 'react';
import {useSelector} from 'react-redux';

const HistoryRequest = () => {
  const requests = useSelector(store => store.requests);
  
  const renderRequestsList = () => {
    if (requests.length) {
      return requests.map(({ id, URL, status, method }) => (
        <tr key={id}>
          <td>{method.toUpperCase()}</td>
          <td>{URL}</td>
          <td>{status}</td>
        </tr>
      ));
    };
    return (
      <tr>
        <td colSpan="3">No requests</td>
      </tr>
    );
    
  }

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col" >Method</th>
          <th scope="col" >Request</th>
          <th scope="col">Status code</th>
        </tr>
      </thead>
      <tbody>
        {renderRequestsList()}   
      </tbody>
    </table>
  );
}

export default HistoryRequest;
