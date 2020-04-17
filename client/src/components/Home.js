import React, { useState, useEffect, } from "react";
import axios from 'axios';
import { Card, Button } from 'antd';
import styled from 'styled-components';
import { Link } from "react-router-dom";

function Home() {
    const [items, setItems] = useState([])
    const [most, setMost] = useState(false)
    const [least, setLeast] = useState(false)
    const { Meta } = Card; 

    useEffect(() => {
        axios.get(`/api/items`).then(res => {
            setItems(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    const showMost = () => (
         setMost(!most),
         setLeast(false)
    )

    const showLeast = () => (
        setLeast(!most),
         setMost(false)
    )

    const leastLiked = () => {
        console.log('clicked')
        let sortedArr = items.sort(function (a, b) {
            return a.likes - b.likes;
        })
        return sortedArr.map(item => (
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
                        <p>Likes: {item.likes}</p>
                    </Card>
                </Link>
            </>
        ))
    }

    const mostLiked = () => {
        console.log('clicked')
        let sortedArr = items.sort(function (a, b) {
            return b.likes - a.likes;
        })
        return sortedArr.map(item => (
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
                        <p>Likes: {item.likes}</p>
                    </Card>
                </Link>
            </>
        ))
    }

    const renderItems = () => {
        //render items by array index not item id? 
        //once i realised that my sortedArr was working i discovered that this is rendering the 
        //items by id and not index so i took a longer route and made contionals to render not sure if theres
        //a better way 
        //when sorting the index was being sorted corretly with the most/lease likes in console
        //still rendering by the item id
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
                        <p>Likes: {item.likes}</p>
                    </Card>
                </Link>
            </>
        ))
    }

    const showByLikes = () => {
        if( most === false && least === false){
            return renderItems()
        } else if (most === true && least === false ){
            return mostLiked()
        } else {
            return leastLiked()
        }
    }

    return (
        <>
            <StyledCon>
                <Button onClick={showMost}>Most Popular</Button>
                <Button onClick={showLeast}>Least Popular</Button>
            </StyledCon>
            {showByLikes()}
        </>
    );
}

export default Home;

const StyledCon = styled.div`
position: absolute; 
top: 55px;
`


