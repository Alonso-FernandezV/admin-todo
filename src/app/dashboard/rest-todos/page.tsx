import prisma from "@/lib/prisma";
import TodosGrid from "@/todos/components/TodosGrid";

export const metadata = {
 title: 'Listado de todos',
 description: 'SEO Title',
};


export default async function RestTodosPage() {

  const todos = await prisma.todo.findMany({
    orderBy:{description: 'asc'}
  });


  return (
    <div>
      <TodosGrid todos={todos}/>
    </div>
  );
}