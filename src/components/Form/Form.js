import styles from './Form.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';

const Form = props => {
  return (
    <Card>
      <div>Username</div>
      <input></input>
      <div>Age (Years)</div>
      <input></input>
      <Button>Add User</Button>
    </Card>
  );
};  

export default Form;