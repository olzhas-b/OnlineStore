import React, { Component } from 'react'
import {User,Users} from '../Interface/Interface'
import {initialUsers} from "../Data/initialDATA";


export const UserContext = React.createContext<Users | any>(initialUsers);

export class UserProvider extends Component {

    state: Users  = initialUsers;
    
    addUser = (newUser:User) => {
        const {users} = this.state;
        if (users && newUser) {
            const checker = users.find((u) => u.email === newUser.email);
            if (checker) {
              return;
            }
            newUser.id = users.length + 1;
            this.setState({users: users.concat(newUser),idAuth:newUser.id})
          }
    }
    loginUser = (user: User) => {
        const {users} = this.state;
        console.log('logggg')
        if (users && user) {
          const checker = users.find(
            (u) => u.email === user.email && u.password === user.password
          );
          if (checker) {
            const data = users.filter(u =>{
                return u.email === user.email
            })[0]
            this.setState({idAuth:data.id})
            return true
          }
          else 
          return false
        }
        return false
    }
    isUser = ()=>{
        const {users} = this.state;
        const data = users.filter(user =>{
            return user.id === this.state.idAuth
        })
        return data;
    }
    editUser = (user:User,pass:string,name:string)=>{
        const {users} = this.state;
        let newUser = user
        newUser.name=name
        newUser.password=pass
        if (users && user) {
          const checker = users.find(
            (u) => u.email === user.email && u.password === user.password
          );
          if (checker) {
            
            this.setState({users:users.concat(newUser),idAuth:newUser.id})
            return true
          }
          else {
            return false
          }
         
        }
        return false
    }
    componentDidUpdate(){
        localStorage.setItem('dataUser', JSON.stringify(this.state))
    };

    componentDidMount(){
        const dataUser = JSON.parse(localStorage.getItem('dataUser') as string);
        if(dataUser !== null){
            this.setState(dataUser);
        }
    }


    render() {
        const {users,idAuth} = this.state;
        const {addUser,loginUser,isUser,editUser} = this;
        return (
            <UserContext.Provider value={{users,idAuth,addUser,loginUser,isUser,editUser}}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}
