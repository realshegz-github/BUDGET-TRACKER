import React from 'react';
import styled from 'styled-components';

import Home from './component/home';
const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 30px 0 10px;
	font-family: open sans;

`;
const Header = styled.div`
	font-size: 25px;
  font-weight: bold;
  color: white;
  border:1px solid none;
  border-radius:50px;
  background: green;
  padding: 10px 70px;

`;

const App = () =>{
  return (
    <Container>
      <Header>BUDGET TRACKER</Header>
      <Home/>
    </Container>
  );
}

export default App;
