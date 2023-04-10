import React, {useState} from 'react';
import Form from './components/Form/Form';
import UserList from './components/Users/UserList';

import styles from './components/Users/UserList.module.css';

function App() {
  
  const [userList, setUserList] = useState('');
  
  const userSample = [
    {username: "Zach", age: 31, id: 1},
    {username: "Rachel", age: 32, id: 2}
  ];
  

  const updateUserList = (userObject) => {
    const newKey = Math.max(...userSample.map(o => o.id)) + 1;
    console.log(userObject.username + ' ' + newKey)
  };

  let userContent = (
    <h2 className={styles.userlist__fallback}>Add some users.</h2>
  );

  if (userSample.length > 0) {
    userContent = (
      <UserList users={userSample}/>
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
