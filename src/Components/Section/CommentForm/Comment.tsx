import React, { useState, useEffect } from 'react'
import {CommentForm} from './CommentForm'
import {CommentList} from '../CommentList/CommentList'
import {ITodo} from '../../../Interface/Interface'


declare var confirm: (question: string) => boolean

export const Comment: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([])

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
      completed: false
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
      />
    </React.Fragment>
  )
}