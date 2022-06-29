import React, { useEffect, useState } from 'react';
import './App.css';
import Map from './components/Map/Map';
import People from './components/People/People';
import { Col, Row } from 'antd';

const App = ({ floor, api }) => {
    const { getAllPeople, getImage, login } = api;

    const [allPeople, setAllPeople] = useState([]);

    useEffect(() => {
        async function fetchData() {
            await login();
            setAllPeople(await getAllPeople());
        }
        fetchData();
    }, []);

    return (
        <div className="App">
            <Row className="wrapper">
                <Col span={10}>
                    <People allPeople={[...allPeople]} getImage={getImage} />
                </Col>
                <Col span={11}>
                    <Map floor={floor} />
                </Col>
            </Row>
        </div>
    );
};

export default App;
