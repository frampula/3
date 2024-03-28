import { useContext } from 'react';
import { UserContext } from '../../../../../contexts/userContext';
import InnerChild from './InnerChild/InnerChild';
import styles from './Child.module.css';

const Child = (props) => {
    const {user: {avatar, firstName, lastName}}= useContext (UserContext)
    return (
                    <div className={styles.border}>
                        Child
                        <img className={styles.img} src={avatar} alt={`${firstName} ${lastName}`} />
                        <InnerChild />
                    </div>
                )
    }

export default Child;
