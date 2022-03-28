import { api } from 'web-init'
export default api('/api/postTodo', async ({ req, reply, db, ext }) => {
  const { title, done } = req.body
  // console.log({title, done})
  const postTodo = await db.todos.create({
    data: {
      title: title,
      done: done,
    },
  })

  reply.send(postTodo)
})
