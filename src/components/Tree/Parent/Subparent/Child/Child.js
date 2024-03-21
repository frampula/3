import React from 'react';
import InnerChild from './InnerChild/InnerChild';

const Child = (props) => {
    return (
        <div style={{border: '3px solid black', padding: '25px'}}>
            <InnerChild />
        </div>
    );
}

export default Child;
