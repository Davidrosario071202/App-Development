
import {useState} from 'react'
import toast, {Toaster} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import store from '../Redux/Store';

const Login = () => {
    const nav = useNavigate()
    const [login,setLogin]=useState({
        email:'',
        password:''
    })
    const handleChange=(e)=>{
        e.preventDefault();
        setLogin({...login,[e.target.id]:e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        store.dispatch({
          type :  "login",
          payload : login
        })
        nav('/home')
      };
       
    const handleRoute=()=>{
       nav('/register')
    }
    
  return (
    <>
    <div className="main d-flex-c">
    <form onSubmit={handleSubmit}>
    <div className="auth-form d-flex-c">
        <input type="text" name="email" id="email" className='input-field' placeholder='Username' onChange={handleChange} autoFocus required/>
        <input type="password" name="password" id="password" className='input-field' placeholder='Password' onChange={handleChange} required minLength={8} maxLength={15}/>
        <button type="submit" className='auth-btn'>Login</button>
    <h5 className='text-linkk' onClick={handleRoute}> Don't have an Account? Register</h5>
    </div>
    </form>
    </div>
    <Toaster
         position="top-center"
         reverseOrder={false}
    />
    </>


  )
}

export default Login