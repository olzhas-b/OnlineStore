import React, { Component } from 'react'
import {User,Users} from '../Interface/Interface'
import  { Redirect } from 'react-router-dom'
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
            this.setState({users: users.concat(newUser)})
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
              console.log('true')
            return true
          }
          else 
          return false
        }
        return false
    }

    /* removeProduct = (id: string) => {
        if(window.confirm("Do you want to delete this product?")){
            const {basket} = this.state;
            basket.forEach((item, index) =>{
                if(item._id === id){
                    basket.splice(index, 1)
                }
            })
            this.setState({basket: basket});
            this.getTotal();
        }

    }; */

    
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
        const {users} = this.state;
        const {addUser,loginUser} = this;
        return (
            <UserContext.Provider value={{users,addUser,loginUser}}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}
