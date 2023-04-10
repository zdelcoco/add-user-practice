import styles from './User.module.css';

const User = props => {
  return (
    <li className={styles.user}>
      {props.username} ({props.age} years old)
    </li>
  );
};

export default User;