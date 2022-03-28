const TodoItem = ({ todo, setRefresh }) => {
  const updateTodo = () => {
    todo.done = !todo.done

    fetch('http://localhost:3200/api/updateTodo?id=' + todo.id, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todo),
    }).then(() => {
      // console.log('todo updated.');
      setRefresh(true)
      // alert('update todo added.')
    })
  }

  const deleteTodo = () => {
    fetch('http://localhost:3200/api/deleteTodo?id=' + todo.id, {
      method: 'GET',
    }).then(() => {
      // console.log('todo deleted.');
      setRefresh(true)
      alert('delete todo added.')
    })
  }

  return (
    <li className={`${todo.done ? 'checked' : ''}`}>
      <div onClick={updateTodo}>{todo.title}</div>
      <span className="close" onClick={deleteTodo}>
        x
      </span>
    </li>
  )
}

export default TodoItem
