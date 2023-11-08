'use client'

import { trpc } from "../_trpc/client"

function TodoList() {
  const getTodos = trpc.getTodos.useQuery();
  return (
    <div>{JSON.stringify(getTodos.data)}</div>
  )
}

export default TodoList