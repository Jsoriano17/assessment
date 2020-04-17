import React, { useState, useEffect, } from "react";
import './App.css';
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ItemForm from "./components/ItemForm"
import styled from 'styled-components'

const App = () => (
  <>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/form" component={ItemForm} />
      </Switch>
    </Container>
  </>
)

export default App;

const Container = styled.div`
margin: 34px 50px;
display: flex; 
flex-direction: row; 
align-items: center;
flex-wrap: wrap; 
`
