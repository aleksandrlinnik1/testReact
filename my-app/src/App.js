import './App.css';
import React from 'react';
import { BrowserRouter} from "react-router-dom";
import Map from './components/Map/Map';
import { Col, Row } from 'antd';

const App = ({ floor }) => {


  return (
    <BrowserRouter>
    <Row>
      <Col flex={2}>people</Col>
      <Col flex={3}><Map floor={floor}/></Col>
    </Row>

    </BrowserRouter>
  );
}

export default App;
