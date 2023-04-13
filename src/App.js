import React, {useState} from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {

  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    const newID = () => {
      if (usersList.length > 0) {
        return Math.max(...usersList.map(user => user.id)) + 1;
      };
      return 1;
    };

    const newUserObject = {
      name: uName,
      age: uAge,
      id: newID()
    };

    console.log(newUserObject);

    setUsersList(prevUsersList => {
      return  [...prevUsersList, newUserObject];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
