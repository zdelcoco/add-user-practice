import React from 'react';
import Card from './components/UI/Card';
import Form from './components/Form/Form';
import UserList from './components/Users/UserList';

function App() {
  
  const userSample = [
    {username: "Zach", age: 31, id: 1},
    {username: "Rachel", age: 32, id: 2}
  ];
  
  return (
    <div>
      <Card>hello</Card>
      <Form></Form>
      <UserList users={userSample}/>
    </div>
  );
}

export default App;
