import React, { useState, useEffect, } from "react";
import axios from 'axios';

function Home() {
  const [items, setItems] = useState([])
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

export default Home;

