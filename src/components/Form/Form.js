import {useState} from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import styles from './Form.module.css';

const Form = props => {

  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();
    props.onSaveUserData({username: enteredUsername, age: enteredAge});

    //reset form
    setEnteredUsername(''); 
    setEnteredAge('');
  }
  
  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <Card>
      <form onSubmit={submitHandler}>  
        <div className={styles.form__div}>   
          <label className={styles.form__label}>Username  </label>
          <input
            className={styles.form__input}
            type='text' 
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
        </div> 
        <div className={styles.form__div}> 
          <label className={styles.form__label}>Age (Years)  </label>         
          <input 
            className={styles.form__input}
            type='number'
            min='1'
            max='120'
            step='1' 
            value={enteredAge}   
            onChange={ageChangeHandler}    
          />
        </div> 
        <div className={styles.button__div}>
          <Button>Add User</Button>
        </div>
      </form>
    </Card>
  );
};  

export default Form;