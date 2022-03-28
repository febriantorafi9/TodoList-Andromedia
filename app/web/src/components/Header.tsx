import { useState } from 'react'

const Header = ({ setRefresh }) => {
  const [title, setTitle] = useState('')

  // fungsi untuk menambah data todo melalui API ketika tombol "Add" di klik
  const addTodo = () => {
    const newTodo = { title, done: false }

    fetch('http://localhost:3200/api/postTodo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTodo),
    }).then(() => {
      // ketika sukses menambah data, reset form dengan mengeset state title menjadi empty string

      setTitle('')

      setRefresh(true)

      setTimeout(() => {
        alert('new todo added.')
      }, 500)
    })
  }

  return (
    <div id="todo-header" className="header">
      <h2 className="text-white font-sans text-4xl">Todo App</h2>

      <input
        className="m-0"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder={'Silahkan Ketikan Listmu...'}
      />
      <span className="add-button" onClick={addTodo}>
        Add
      </span>
    </div>
  )
}

export default Header
