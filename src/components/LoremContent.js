import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLorem } from '../actions/loremActions';

const LoremContent = () => {
    const dispatch = useDispatch();
    const { loading, data, error } = useSelector((state) => state.lorem);

    useEffect(() => {
        dispatch(fetchLorem());
    }, [dispatch]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            <h1>{data.title}</h1>
            <p>{data.body}</p>
        </div>
    );
};

export default LoremContent;
