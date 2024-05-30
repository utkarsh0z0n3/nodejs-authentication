import { Link,useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
    const [data,setData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:""
    })
    const [error,setError] = useState("")
    const navigate = useNavigate();

    const handleChange = ({currentTarget:input}) => {
        setData({...data,[input.name]:input.value});
    }

    const handleSubmit = async(e) =>{
        e.preventDefault();
        try{
            const url ="http://localhost:8080/api/users";
            const {data:res} = await axios.post(url,data);
            console.log(res.message); 
            navigate("/login");
        }
        catch(err){
                if(err.response && err.response.status>=400 && err.response.status<500){
                        setError(err.response.data.message);
                }
        }
    }

    
    return(
        <div className={styles.signup_container}>
            <div className={styles.signup_form_container}>
                <div className={styles.left}>
                    <h1>Welcome Back</h1>
                    <Link to="/login">
                        <button type='button' className={styles.white_btn}>Sign IN</button>
                    </Link>
                </div>
                <div className={styles.right}>
                        <form className={styles.form_container} onSubmit={handleSubmit}>
                            <h1>Create Account</h1>
                            <input type='text' 
                            placeholder='First Name'
                            name='firstName' 
                            value={data.firstName} 
                            required
                            onChange={handleChange}
                            className={styles.input}
                            />
                             <input type='text' 
                            placeholder='Last Name'
                            name='lastName' 
                            value={data.lastName} 
                            required
                            onChange={handleChange}
                            className={styles.input}
                            />
                             <input type='email' 
                            placeholder='Email'
                            name='email' 
                            value={data.email} 
                            required
                            onChange={handleChange}
                            className={styles.input}
                            />
                             <input type='password' 
                            placeholder='Password'
                            name='password' 
                            value={data.password} 
                            required
                            onChange={handleChange}
                            className={styles.input}
                            />
                            {error && <div className={styles.error_msg}>{error}</div>}
                            <button type='submit' className={styles.green_btn} >Sign Up</button>
                        </form>
                </div>
            </div>
        </div>
    ) 
}
export default  SignUp;