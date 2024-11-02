import { useQuery } from "@tanstack/react-query";

import { api } from "@/api";

import type { Todo } from "../types";

const queryKeys = {
  todos: "todos",
};

const getTodos = () =>
  api.get<{ data: Todo[] }>("/todos").then((res) => res.data);

export const useGetTodoList = () =>
  useQuery({
    queryKey: [queryKeys.todos],
    queryFn: getTodos,
  });
