import React, { useEffect, useState } from 'react';
import User from "./components/Users"
import Sort from "./components/Sort"
import useFetch from "./hooks/useFetch"
import './App.css';

function App() {
  const [sort, setSort] = useState<string>("");

  let { total, onRemove, setUselen, users } = useFetch(sort, setSort);

  return (
    <div className="App">
      <Sort setSort={setSort} />
      <User users={users} onRemove={onRemove} setUselen={setUselen} total={total} />
    </div>
  );
}

export default App;
