import React from 'react'
import { auth } from '../firebase';

const  Registration = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegistration = async (e) => {
        e.preventDefault();
    
    try { 
        await auth.createUserWithEmailandPassword(email, password);
        console.log('User Registered Successfully');
    }
    catch (error) {
        console.log('Error during Registration', error.message);
    }
};

  return (
    <div>Registration</div>
  )
}

export default Registration