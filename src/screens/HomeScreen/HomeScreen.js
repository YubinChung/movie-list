import React from 'react';
import Card from "../../components/Card";
import styled from 'styled-components';

const HomeScreen = props => {
  return (
    <Wrapper>
      {props.movies.map(prop => <Card key={prop.id} item={prop}></Card>)}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display:flex;
  flex-flow:row wrap;
  justify-content: space-between;
  align-items: stretch;
  padding-top:30px;
`
export default HomeScreen;