import { api } from 'web-init'
export default api('/api/updateTodo', async ({ req, reply, db, ext }) => {
  const { id }: any = req.query
  const { title, done }: any = req.body
  const updateTodo = await db.todos.update({
    where: {
      // id = id
      id: Number(id),
    },
    data: {
      title: String(title),
      done: Boolean(done),
    },
  })

  reply.send(updateTodo)
})
