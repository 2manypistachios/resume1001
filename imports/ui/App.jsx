import React from 'react';
import Hello from './Hello.jsx';
import Info from './Info.jsx';
import Balloons from './BackBalloons.jsx';

import styled, { css } from 'styled-components'
import {Container, Row, Col} from 'react-bootstrap';

const Name = styled.h1 `
  margin: auto;
  position: absolute;
  height:50px;
  top: 0; left: 0; bottom: 0; right: 0;
  text-align: center;
  color: white;
`;

const Background = styled.div`
  width:100%;
  height:100%;
`;

const App = () => (
  <Background>
  <Name><h1>Maxim Podolski</h1></Name>

  <Balloons/>
  </Background>
);

export default App;
