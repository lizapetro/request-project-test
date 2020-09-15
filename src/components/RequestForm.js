import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addRequest } from '../redux/actions';
import MethodButton from './MethodButton';

const RequestForm = () => {
  const [fieldsValue, setFielsValue] = useState({
    URL: '',
    path: '',
    body: '',
  });
  const [activeMethod, setActiveMethod] = useState('get');

  const dispatch = useDispatch();

  const changeFielsdValue = ({ target }) => {
    setFielsValue({...fieldsValue, [target.name]: target.value});
  }

  const changeActiveMethod = (e) => {
    setActiveMethod(e.target.id);
  };

  const submitRequest = (e) => {
    e.preventDefault();
    dispatch(addRequest({...fieldsValue, method: activeMethod}));
  }

  return(
    <form onSubmit={submitRequest}>
      <div className="form-group">
        <label htmlFor="requestURL">URL</label>
        <input 
          type="text" 
          className="form-control" 
          id="requestURL"
          name="URL"
          value={fieldsValue.URL}
          onChange={changeFielsdValue}
        />
      </div>
      <div className="form-group">
        <label htmlFor="requestPath">Path</label>
        <input 
          type="text" 
          className="form-control" 
          id="requestPath"
          name="path"
          value={fieldsValue.path}
          onChange={changeFielsdValue}
        />
      </div>
      <div className="form-group">
        <div className="btn-group btn-group-toggle" data-toggle="buttons">
          <MethodButton title='get' changeActiveMethod={changeActiveMethod} activeMethod={activeMethod} />
          <MethodButton title='post' changeActiveMethod={changeActiveMethod} activeMethod={activeMethod} />
          <MethodButton title='put' changeActiveMethod={changeActiveMethod} activeMethod={activeMethod} />
          <MethodButton title='delete' changeActiveMethod={changeActiveMethod} activeMethod={activeMethod} />
        </div>
      </div>
      {activeMethod !== 'get' && <div className="form-group">
        <label htmlFor="requestBody">Body request</label>
        <input 
          type="text" 
          className="form-control" 
          id="requestBody" 
          name='body'
          value={fieldsValue.body}
          onChange={changeFielsdValue}
        />
      </div>}
      <button type="submit" className="btn btn-success">
        Send request
      </button>
    </form>
  );
}

export default RequestForm;
