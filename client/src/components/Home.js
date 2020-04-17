import React, { useState, useEffect, } from "react";
import axios from 'axios';
import { Card, Button } from 'antd';
import styled from 'styled-components';
import { Link } from "react-router-dom";

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

    const mostLiked = () => {
        console.log('clicked')
        let sortedArr = items.sort(function (a, b) {
            return a.likes - b.likes;
        });
        //needs to update?
        return setItems(sortedArr)
    }

    const leastLiked = () => {
        console.log('clicked')
        let sortedArr = items.sort(function (a, b) {
            return b.likes - a.likes;
        });
        return setItems(sortedArr)

    }

    const renderItems = () => {
        return items.map(item => (
            <>
                <Link to = {{pathname: '/item/show', id: item.id}}>
                    <Card
                        key={`${item.id}`}
                        hoverable
                        style={{ width: 240, margin: '15px 20px' }}
                        cover={<img alt="example" src={item.image} />}
                    >
                        <Meta title={item.name} description={item.description} />
                        <br />
                        <p>{item.likes}</p>
                    </Card>
                </Link>
            </>
        ))
    }

    return (
        <>
            <StyledCon>
                <Button onClick={mostLiked}>Most Popular</Button>
                <Button onClick={leastLiked}>Least Popular</Button>
            </StyledCon>
            {renderItems()}
        </>
    );
}

export default Home;

const StyledCon = styled.div`
position: absolute; 
top: 55px;
`


