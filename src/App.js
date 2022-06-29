import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import Map from './components/Map/Map';
import People from './components/People/People';
import { Col, Row } from 'antd';
import { ApiContext } from './api/context';

const App = ({ floor }) => {
    const { getAllPeople, login } = useContext(ApiContext);

    const [people, setPeople] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            await login();
            setPeople(await getAllPeople());
        };
        fetchData();
    }, []);

    return (
        <div className="App">
            <Row className="wrapper">
                <Col span={10}>
                    <People people={[...people]} />
                </Col>
                <Col span={11}>
                    <Map floor={floor} />
                </Col>
            </Row>
        </div>
    );
};

export default App;
