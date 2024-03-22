import React from 'react';
import InnerChild from './InnerChild/InnerChild';
import { UserContext } from '../../../../../contexts/userContext';
import styles from './Child.module.css';

const Child = (props) => {
    return (
        <UserContext.Consumer>
            {({user}) => {
                return (
                    <div className={styles.border}>
                        Child
                        <img className={styles.img} src={user.avatar} alt={`${user.firstName} ${user.lastName}`} />
                        <InnerChild />
                    </div>
                )
            }}
        </UserContext.Consumer>
    );
}

export default Child;
