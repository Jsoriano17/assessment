import React, { useState, useEffect, } from "react";
import './App.css';
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ItemForm from "./components/ItemForm"
import styled from 'styled-components'
import ItemShow from "./components/ItemShow";

const App = () => (
  <>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/form" component={ItemForm} />
        <Route exact path="/item/show" component={ItemShow} />
      </Switch>
    </Container>
  </>
)

export default App;

const Container = styled.div`
margin: 34px 50px;
display: flex; 
flex-direction: row;
justify-content: center;
flex-wrap: wrap; 
`
