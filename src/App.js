import React, {useState} from 'react';
import Card from './components/UI/Card';
import Form from './components/Form/Form';
import UserList from './components/Users/UserList';

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
    <p>Add some users.</p>
  );

  if (userList.length > 0) {
    userContent = (
      <UserList users={userSample}/>
    );
  };
  
  return (
    <div>
      <Card>hello</Card>
      <Form onSaveUserData={updateUserList}></Form>
      {userContent}
    </div>
  );
}

export default App;
