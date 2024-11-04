export type Todo = {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type RequestTodo = Pick<Todo, "title" | "content">;
