import React, {useState} from 'react';
import Form from './components/Form/Form';
import UserList from './components/Users/UserList';

import styles from './components/Users/UserList.module.css';

function App() {
  
  const [userList, setUserList] = useState([]);
  
  const updateUserList = (userObject) => {
    const newKey = () => {
      if (userList.length > 0) {
        return Math.max(...userList.map(user => user.id)) + 1;
      }
      return 1;
    };

    userObject.id = newKey();

    setUserList(prevUserList => {
      return [...prevUserList, userObject];
    });
  };

  const deleteUserFromList = (userid) => {
    setUserList((prevUserList) =>
      prevUserList.filter((user) => user.id !== userid)
    );
  };

  let userContent = (
    <h2 className={styles.userlist__fallback}>Add some users.</h2>
  );

  if (userList.length > 0) {
    userContent = (
      <UserList 
        className={styles.userlist} 
        users={userList} 
        onClickUser={deleteUserFromList}/>
    );
  };
  
  return (
    <div>
      <Form onSaveUserData={updateUserList}></Form>
      {userContent}
    </div>
  );
}

export default App;
