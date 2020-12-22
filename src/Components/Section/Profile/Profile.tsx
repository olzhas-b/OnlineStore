import React, { useContext, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {UserContext} from "../../../Contexts/UserContext";
import { User } from '../../../Interface/Interface';
import style from '../../css/Section.module.css'



function Profile() {
    const context = useContext(UserContext)
    const name = useRef<HTMLInputElement>(null);
    const pass = useRef<HTMLInputElement>(null);
    const logged = useSelector((state: any) => state.isLogged);
        let user: User = context.isUser()
        console.log(context.idAuth)
        user.password=''
        let password: string=''
        let username: string=''
        
        const checkUser = () => {
            console.log(user)
            const check = context.editUser(user,password,username)
            if(check){
                alert('Your data changed')
            } 
            else {
                alert('You entered wrong data')
            }
        }
        if(!logged){
            return <Redirect to='/login'/>
        }
        return (
            <>{
            user.id===0 ?
            <h2>Welcome Admin</h2> :
            <div className={style.authForm}>
            <form>
                <div className={style.formGroup}>
                        <span>Change your Profile details</span><br/>
                        <label htmlFor="inputEmail">Your name: {user.name} </label>
                        <input
                            ref={name}
                            type="text"
                            className="form-control"
                            id="inputEmail"
                            onChange={(e) => {
                                username = e.target.value
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
                        <label htmlFor="newPassword">New password:</label>
                        <input
                            ref={pass}
                            type="text"
                            className="form-control"
                            id="newPassword"
                            onChange={(e) => {
                                password = e.target.value
                            }}
                            placeholder="Type new password"
                            required
                        />
                    </div>
                    <button onClick={checkUser} type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            }
            </>
        )
    
}

export default Profile