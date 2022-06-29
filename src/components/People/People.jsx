import React, { useEffect, useState } from 'react';
import Image from './Image';
import { Table } from 'antd';

const People = ({ people }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (people.length !== 0) {
            setLoading(false);
        }
    }, [people]);

    const columns = [
        {
            title: 'Фото',
            dataIndex: 'image_ref',
            key: 'image_ref',
            render: (text) => <Image key={text} image_ref={text} />,
        },
        {
            title: 'ФИО',
            dataIndex: 'name',
            key: 'name',
        },
    ];

    return (
        <div>
            <Table
                dataSource={people}
                columns={columns}
                pagination={{ defaultPageSize: 3 }}
                loading={loading}
            />
        </div>
    );
};

export default People;
