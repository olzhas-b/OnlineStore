import React, { useRef, useEffect,useContext,useState } from 'react';
import { User } from '../../../Interface/Interface'
import {UserContext} from "../../../Contexts/UserContext";
import { Redirect } from 'react-router-dom';
import {emailRex,passRex} from '../../../Data/initialDATA'
import { useDispatch, useSelector } from 'react-redux';
import { Logged } from '../../../Enums/Logged';
import style from '../../css/Section.module.css'

function Registration() {
    const context = useContext(UserContext)
    let user: User = { email: "", id: 0, password: "", name: "" };
    //const [state,setState] = useState(false)
    const email = useRef<HTMLInputElement>(null);
    const pass = useRef<HTMLInputElement>(null);
    const name = useRef<HTMLInputElement>(null);
    const logged = useSelector((state: any) => state.isLogged);
    const dispatch = useDispatch();
    
    useEffect(() => {
        name.current?.focus();
      }, []);
    
    const ValidateUser = () => {
        if (!emailRex.test(user.email)) {
            alert("Please enter a valid email address");
            console.log('Error');
            email.current!.value = '';
            email.current?.focus();
        }
        else if(!passRex.test(user.password)) {
            alert("Please enter a valid password");
            console.log('Error');
            pass.current!.value = '';
            pass.current?.focus();
        }
        else {
            context.addUser(user)
            //setState(()=>!state)
            dispatch({ type: Logged.SIGN_IN })
            email.current!.value = '';
            pass.current!.value = '';

        }
    }
    if(logged){
        return (<Redirect to='/'/>)
    }
    else{
    return (
    <div className={style.authForm}>
    <form>
        <div className={style.formGroup}>
            <span>Registration</span><br/>
            <label htmlFor="inputName">Your name:</label>
            <input
                ref={pass}
                type="text"
                className="form-control"
                id="inputName"
                onChange={(e) => {
                    user.name = e.target.value
                }}
                placeholder="Type your name"
                required
            />
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
                ref={pass}
                type="text"
                className="form-control"
                id="inputPassword"
                onChange={(e) => {
                    user.password = e.target.value
                }}
                placeholder="Type your password"
                required
            />
            
            
        </div>
        <button onClick={ValidateUser} type="submit" className="btn btn-primary">Submit</button>
        
    </form>
    </div>
    )
            }
}
export default Registration;
