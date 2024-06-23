import React, { useState } from 'react';
import User from "./components/Users"
import Sort from "./components/Sort"
import useFetch from "./hooks/useFetch"
import './App.css';


const initialState = { total: null, friends: null, chirpiness: null, influence: null };
function App() {

  const [criteria, setCriteria] = useState([initialState]);

  let { total, onRemove, setUselen, users } = useFetch(criteria);


  return (
    <div className="App">
      <Sort criteria={criteria} setCriteria={setCriteria} />
      <User users={users} onRemove={onRemove} setUselen={setUselen} total={total} />
    </div>
  );
}

export default App;
