import React from 'react';
import { UserContext } from '../../../../../../contexts/userContext';

const InnerChild = (props) => {
    return (
        <UserContext.Consumer>
            {(value) => {
                return (
                    <p>{JSON.stringify(value)}</p>
                )
            }}
        </UserContext.Consumer>
    );
}

export default InnerChild;
