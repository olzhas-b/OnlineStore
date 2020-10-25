import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import {UserContext} from "../../../Contexts/UserContext";
import { User } from '../../../Interface/Interface'



class Profile extends Component{
    
    static contextType = UserContext
    name = React.createRef<HTMLInputElement>()
    pass = React.createRef<HTMLInputElement>()
    
    
    render() {
        const {isUser,editUser} = this.context
        let user: User = isUser()
        console.log(this.context.idAuth)
        user.password=''
        let pass: string=''
        let name: string=''
        
        const checkUser = () => {
            console.log(user)
            const check = editUser(user,pass,name)
            if(check){
                alert('Your data changed')
            } 
            else {
                alert('You entered wrong data')
            }
        }
        if(user.name===''){
            return <Redirect to='/login'/>
        }
        return (
            
            <div className="auth-form">
                <form>
                    <div className="form-group">
                        <span>Change your Profile details</span><br/>
                        <label htmlFor="inputEmail">Your name: {user.name} </label>
                        <input
                            ref={this.name}
                            type="text"
                            className="form-control"
                            id="inputEmail"
                            onChange={(e) => {
                                name = e.target.value
                            }}
                            placeholder="Type your email"
                            required
                        />
                        <label htmlFor="inputPassword">Your password:</label>
                        <input
                            ref={this.pass}
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
                            ref={this.pass}
                            type="text"
                            className="form-control"
                            id="newPassword"
                            onChange={(e) => {
                                pass = e.target.value
                            }}
                            placeholder="Type new password"
                            required
                        />

                    </div>
                    <button onClick={checkUser} type="submit" className="btn btn-primary">Submit</button>
                    
                </form>
            </div>
        )
    }
}

export default Profile