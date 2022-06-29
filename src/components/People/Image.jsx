import React, { useContext, useEffect, useState } from 'react';
import { Avatar } from 'antd';
import { ApiContext } from '../../api/context';

const Image = ({ image_ref }) => {
    const { getImage } = useContext(ApiContext);
    const [src, setSrc] = useState();

    useEffect(() => {
        const fetchData = async () => {
            if (image_ref) {
                const image = await getImage(image_ref);
                setSrc(image);
            }
        };
        fetchData();
    }, [image_ref]);

    return <Avatar size={120} src={src} />;
};

export default Image;
