import { api } from 'web-init'
export default api('/api/deleteTodo', async ({ req, reply, db, ext }) => {
  const { id }: any = req.query
  const deleteTodo = await db.todos.delete({
    where: {
      // id = id
      id: Number(id),
    },
  })

  reply.send(deleteTodo)
})
