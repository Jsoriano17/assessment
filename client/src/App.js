import React, { useState, useEffect, } from "react";
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [items, setItems] = useState([])
  //item = current state
  //setItem = is like setState({})
  useEffect(() => {
    axios.get(`/api/items`).then(res => {
      setItems(res.data)
    }).catch(err => {
      console.log(err)
    })
  }, [])

  const renderItems = () => {
    return items.map(item => (
      <div key={`${item.id}`}>
        <img src={item.image}/>
        <p>{item.name}</p>
        <p>{item.description}</p>
        <p>{item.likes}</p>
      </div>
    ))
  }

  return (
    <>
      {renderItems()}
    </>
  );
}

export default App;
