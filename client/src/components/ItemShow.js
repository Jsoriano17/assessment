import React, { useEffect, useState } from 'react';
import Item from 'antd/lib/list/Item';
import axios from 'axios';
import styled from 'styled-components';

const ItemShow = (props) => {
    const [item, setItem] = useState({})

    useEffect(() => {
        const { id } = props.location
        axios.get(`/api/items/${id}`).then(res => {
            setItem(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <Containter>
            <img src={item.image} height="auto" width="500px"/>
            <h1>{item.name}</h1>
            <h3>{item.description}</h3>
            <p>{item.likes}</p>
        </Containter>
    )
}

export default ItemShow;

const Containter = styled.div`
width: 500px;
display: flex;
flex-direction: column;
flex-wrap: wrap;
`