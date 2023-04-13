import styles from './UserList.module.css';
import User from './User';
import Card from '../UI/Card';

const UserList = props => {

  const passUserToApp = (userid) => {
    props.onClickUser(userid);
  }

  return (
    <Card>
      <ul className={styles.userlist}>
        {props.users.map(user => (
          <User 
            onUserClick={passUserToApp}
            key={user.id}
            username={user.username}
            age={user.age}
            userKey={user.id}
          />          
        ))}
      </ul>  
    </Card>
  );
};

export default UserList;