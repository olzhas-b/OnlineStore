import React, { useState, useEffect, useContext } from 'react'
import {CommentForm} from './CommentForm'
import {CommentList} from '../CommentList/CommentList'
import {ITodo} from '../../../Interface/Interface'
import { useSelector } from 'react-redux'
import { UserContext } from '../../../Contexts/UserContext'

interface Props{
  userEmail:string
}
declare var confirm: (question: string) => boolean

export const Comment: React.FC<Props> = (props:Props) => {
  const [todos, setTodos] = useState<ITodo[]>([])
  const context = useContext(UserContext)
  const email = context.isUser().email
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
    setTodos(saved)
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false,
      userEmail: props.userEmail
    }
    setTodos(prev => [newTodo, ...prev])
  }


  const removeHandler = (id: number) => {
    const shoudRemove = confirm('Are you sure?')
    if (shoudRemove) {
      setTodos(prev => prev.filter(todo => todo.id !== id))
    }
  }

  return (
    <React.Fragment>
      <CommentForm onAdd={addHandler} />
      <CommentList
        todos={todos}
        onRemove={removeHandler}
        isLogged = {email}
      />
    </React.Fragment>
  )
}