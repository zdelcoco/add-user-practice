import styles from './User.module.css';

const User = props => {

  const clickHandler = () => {
    props.onUserClick(props.userKey);
  };
  
  return (
    <li className={styles.user} onClick={clickHandler}>
      {props.username} ({props.age} years old)
    </li>
  );
};

export default User;