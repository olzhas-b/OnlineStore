import React, { useRef, useEffect,useContext,useState } from 'react';
import { User } from '../../../Interface/Interface'
import {UserContext} from "../../../Contexts/UserContext";
import { Redirect,Link } from 'react-router-dom';
import {emailRex,passRex} from '../../../Data/initialDATA'

function Registration() {
    const context = useContext(UserContext)
    let user: User = { email: "", id: 0, password: "", name: "" };
    const [state,setState] = useState(false)
    const email = useRef<HTMLInputElement>(null);
    const pass = useRef<HTMLInputElement>(null);
    const name = useRef<HTMLInputElement>(null);
    useEffect(() => {
        name.current?.focus();
      }, []);
    
    const PressHandler = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
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
            setState(()=>!state)
            email.current!.value = '';
            pass.current!.value = '';

        }
    }
    if(state===true){
        return (<Redirect to='/'/>)
    }
    else{
    return (
    <div className="auth-form">
    <form>
        <div className="form-group">
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
        <button onClick={PressHandler} type="submit" className="btn btn-primary">Submit</button>
        
    </form>
    </div>
    )
            }
}
export default Registration;
