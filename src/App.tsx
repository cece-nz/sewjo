import React from 'react';
import styled from 'styled-components';
import LoginSvg from './assets/login.svg';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Header>
        <h1 style={{ margin: 0 }}>Sewjo</h1>
        <img src={LoginSvg} alt='Your SVG' style={{ height: 16, width: 16 }} />
      </Header>
      <div>
        <ListContainer>
          <ListItem>Patterns</ListItem>
          <ListItem>Fabric</ListItem>
          <ListItem>Costs</ListItem>
          <ListItem>Measurements</ListItem>
        </ListContainer>
      </div>
      <Container>
        <div>
          <h2>Patterns</h2>
          <CardContainer>
            <Card>
              <div>
                <img src='https://placedog.net/250/300' alt='' />
              </div>
              <div>
                <h3>Nepheline Blouse</h3>
                <h4>Vivian Shao Chen</h4>
                <p>
                  <span>Top</span>
                  <span>Blouse</span>
                  <span>Shirt</span>
                </p>
              </div>
            </Card>
            <Card>
              <div>
                <img src='https://placedog.net/250/300' alt='' />
              </div>
              <div>
                <h3>Nepheline Blouse</h3>
                <h4>Vivian Shao Chen</h4>
                <p>
                  <span>Top</span>
                  <span>Blouse</span>
                  <span>Shirt</span>
                </p>
              </div>
            </Card>
            <Card>
              <div>
                <img src='https://placedog.net/250/300' alt='' />
              </div>
              <div>
                <h3>Nepheline Blouse</h3>
                <h4>Vivian Shao Chen</h4>
                <p>
                  <span>Top</span>
                  <span>Blouse</span>
                  <span>Shirt</span>
                </p>
              </div>
            </Card>
            <Card>
              <div>
                <img src='https://placedog.net/250/300' alt='' />
              </div>
              <div>
                <h3>Nepheline Blouse</h3>
                <h4>Vivian Shao Chen</h4>
                <p>
                  <span>Top</span>
                  <span>Blouse</span>
                  <span>Shirt</span>
                </p>
              </div>
            </Card>
          </CardContainer>
        </div>
      </Container>
    </div>
  );
}

export default App;

const Container = styled.div``;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
`;

const ListContainer = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;

const ListItem = styled.li`
  line-height: 1.75;
  padding: 1rem 0;
  border-right: 1px solid black;
  &:last-child {
    border-right: none;
  }
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-gap: 1rem;
  justify-content: center;
`;
const Card = styled.div``;
