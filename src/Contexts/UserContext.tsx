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
            const data = users.find(u =>{
                return u.email === user.email
            })
            this.setState({idAuth:data!.id})
            
            return true
          }
          else 
          return false
        }
        return false
    }
    isUser = ()=>{
        const {users} = this.state;
        
        const data = users.find(user =>{
            return user.id === this.state.idAuth
        })
        let newData = {...data};
        if(data===undefined)
          return { email: "", id: -1, password: "", name: "" }
        else{
          console.log(this.state.users[0])
        return newData
        };
    }
    editUser:(user:User,pass:string,name:string)=>boolean= (user:User,pass:string,name:string)=>{
        const {users} = this.state;
        let newUser = {...user}
        newUser.name=name
        newUser.password=pass
        if (users && user) {
          const checker = users.find(
            (u) => u.email === user.email && u.password === user.password
          );
         
          if (checker) {
            newUser.id=checker.id+10
            this.setState({users:users.concat(newUser),idAuth:newUser.id})
            return true
          }
          else {
            return false
          }
         
        }
        return false
    }
    logout = () => {
      this.setState({idAuth:-1})
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
        const {addUser,loginUser,isUser,editUser,logout} = this;
        return (
            <UserContext.Provider value={{users,idAuth,addUser,loginUser,isUser,editUser,logout}}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}
