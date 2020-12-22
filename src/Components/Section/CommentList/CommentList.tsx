import React, { useContext } from 'react'
import { UserContext } from '../../../Contexts/UserContext'
import {ITodo} from '../../../Interface/Interface'

type CommentListProps = {
  todos: ITodo[]
  onRemove: (id: number) => void
  isLogged: string
}

export const CommentList: React.FC<CommentListProps> = ({
  todos,
  onRemove,
  isLogged,
}) => {
  if (todos.length === 0) {
    return <p className="center ml-3">Add first comment here...</p>
  }
  const removeHandler = (event: React.MouseEvent, id: number) => {
    event.preventDefault()
    onRemove(id)
  }

  return (
    <ul>
      {todos.map(todo => {
        const classes = ['todo']
        if (todo.completed) {
          classes.push('completed')
        }

        return (
          <li className="list-group" key={todo.id}>
            <label className="app-list list-group-item">
              <span>{todo.userEmail+`:`}</span><br></br>
              <span>{todo.title}</span>
              {isLogged!==todo.userEmail?``:
              <i
                className="btn"
                onClick={event => removeHandler(event, todo.id)}
              >
               delete
              </i>}
            </label>
          </li>
        )
      })}
    </ul>
  )
}