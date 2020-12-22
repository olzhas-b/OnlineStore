import React, { useRef, useEffect,useContext,useState } from 'react';
import { User } from '../../../Interface/Interface'
import {Link, Redirect} from "react-router-dom";
import {UserContext} from "../../../Contexts/UserContext";
import {emailRex,passRex} from '../../../Data/initialDATA'
import { useDispatch, useSelector } from 'react-redux';
import { Logged } from '../../../Enums/Logged';
import style from '../../css/Section.module.css'

function Login() {
    const context = useContext(UserContext)
    let user: User = { email: "", id: 0, password: "", name: "" }
    const [state,setState] = useState(false)
    const email = useRef<HTMLInputElement>(null);
    const pass = useRef<HTMLInputElement>(null);
    const logged = useSelector((state: any) => state.isLogged);
    const dispatch = useDispatch();
    
    useEffect(() => {
        email.current?.focus();
        
      }, []);
    useEffect(()=>
    console.log('rnder'))
    const ValidateUser = () => {
        
        if (!emailRex.test(user.email)) {
            alert("Please enter a valid email address");
            console.log('Error');
            email.current?.focus();
            email.current!.value = '';
        }
        else if(!passRex.test(user.password)) {
            alert("Please enter a valid password");
            console.log('Error');
            pass.current!.value = '';
            pass.current!.focus();
        }
        else {
            //setState(()=>context.loginUser(user))
            if(context.loginUser(user)){
                dispatch({ type: Logged.SIGN_IN })
                setState(true)
            }
            email.current!.value = '';
            pass.current!.value = '';
        }
    }
    
    if(state){
        return (<Redirect to='/'/>)
    }
    if(logged){
        dispatch({type: Logged.SIGN_OUT})
    }
    return (
    <div className={style.authForm}>
        <form>
            <div className={style.formGroup}>
            <label htmlFor="inputEmail">Your email:</label>
            <input
                ref={email}
                type="text"
                className="form-control"
                id="inputEmail"
                onChange={(e) => {
                    user.email = e.target.value
                }}
                placeholder="Type your email"
                required
            />
            <label htmlFor="inputPassword">Your password:</label>
            <input
                type="password"
                ref={pass}
                className="form-control"
                id="inputPassword"
                placeholder="Type your password"
                onChange={(e) => {
                    user.password = e.target.value
                }}
                required
            />
            
        </div>
        <button onClick={ValidateUser} type="submit" className="btn btn-primary">Submit</button>
        <p>Don't have an account? Register <Link to="/Registration">here</Link></p>
    </form>
    
    </div>
    )
            
}
export default Login;
