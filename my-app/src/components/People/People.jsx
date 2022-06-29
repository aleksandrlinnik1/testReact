import React, { useEffect, useState } from 'react';
import Image from './Image';
import { Table } from 'antd';

const People = ({ allPeople, getImage, image_ref }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        allPeople.length !== 0 && setLoading(false);
    }, [allPeople]);

    const columns = [
        {
            title: 'Фото',
            dataIndex: 'image_ref',
            key: 'image_ref',
            render: (text) => (
                <Image key={text} getImage={getImage} image_ref={text} />
            ),
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
                dataSource={allPeople}
                columns={columns}
                pagination={{ defaultPageSize: 3 }}
                loading={loading}
            />
        </div>
    );
};

export default People;
