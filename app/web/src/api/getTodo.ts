import { api } from 'web-init'
export default api('/api/getTodo', async ({ req, reply, db, ext }) => {
  const getTodo = await db.todos.findMany()

  reply.send(getTodo)
})
