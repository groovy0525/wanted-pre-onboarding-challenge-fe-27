import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { api } from "@/api";

import type { RequestTodo, Todo } from "../types";

const queryKeys = {
  todos: "todos",
};

const clearQueryCache = (queryClient: QueryClient) => {
  queryClient.invalidateQueries({ queryKey: [queryKeys.todos] });
};

const getTodos = () =>
  api.get<{ data: Todo[] }>("/todos").then((res) => res.data);

export const useGetTodoList = () =>
  useQuery({
    queryKey: [queryKeys.todos],
    queryFn: getTodos,
  });

const createTodo = (data: RequestTodo) =>
  api.post("/todos", data).then((res) => res.data);

export const useCreateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTodo,
    onSuccess: () => {
      clearQueryCache(queryClient);
    },
  });
};

const updateTodo = (data: { formState: RequestTodo; id: string }) =>
  api.put(`/todos/${data.id}`, data.formState).then((res) => res.data);

export const useUpdateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateTodo,
    onSuccess: () => {
      clearQueryCache(queryClient);
    },
  });
};

const removeTodo = (id: string) =>
  api.delete(`/todos/${id}`).then((res) => res.data);

export const useRemoveTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: removeTodo,
    onSuccess: () => {
      clearQueryCache(queryClient);
    },
  });
};
