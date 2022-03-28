import { useEffect, useState } from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ isRefresh, setRefresh }) => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    if (isRefresh) {
      fetch('http://localhost:3200/api/getTodo')
        .then((res) => {
          return res.json()
        })
        .then((data) => {
          setRefresh(false)
          setTodos(data)
        })
        .catch((err) => {
          setRefresh(false)
          if (err.name === 'AbortError') {
            console.log('fetch aborted.')
          }
        })
    }
  }, [isRefresh, setRefresh])

  return (
    <ul id="todo-list">
      {todos.map((todo, i) => (
        <TodoItem todo={todo} key={i} setRefresh={setRefresh} />
      ))}
    </ul>
  )
}

export default TodoList
