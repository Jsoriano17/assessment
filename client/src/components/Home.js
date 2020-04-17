import React, { useState, useEffect, } from "react";
import axios from 'axios';
import { Card } from 'antd';

function Home() {
    const [items, setItems] = useState([])
    const { Meta } = Card;
    useEffect(() => {
        axios.get(`/api/items`).then(res => {
            setItems(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    const renderItems = () => {
        return items.map(item => (
            <Card
                key={`${item.id}`}
                hoverable
                style={{ width: 240, margin: '15px 20px' }}
                cover={<img alt="example" src={item.image} />}
            >
                <Meta title={item.name} description={item.description} />
                <br/>
                <p>{item.likes}</p>
            </Card>
        ))
    }

    return (
        <>
            {renderItems()}
        </>
    );
}

export default Home;


