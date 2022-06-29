import React, { useEffect, useState } from 'react';
import { Avatar } from 'antd';

const Image = ({ image_ref, getImage }) => {
    const [state, setstate] = useState();

    useEffect(() => {
        async function fetchData() {
            !!image_ref && setstate(await getImage(image_ref));
        }
        fetchData();
    }, [image_ref]);

    return <Avatar size={120} src={state} />;
};

export default Image;
