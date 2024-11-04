import { useState } from "react";

import { useCreateTodo } from "../hooks/todos";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { RequestTodo } from "../types";

export const CreateTodo = () => {
  const [todoFormState, setTodoFormState] = useState<RequestTodo>({
    title: "",
    content: "",
  });
  const { title, content } = todoFormState;
  const { mutate } = useCreateTodo();

  const handleChangeText: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    const { name, value } = e.target;

    setTodoFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    mutate(todoFormState);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <Label htmlFor="todo-title">Title</Label>
          <Input
            id="todo-title"
            onChange={handleChangeText}
            value={title}
            name="title"
          />
        </div>
        <div>
          <Label htmlFor="todo-content">Content</Label>
          <Textarea
            id="todo-content"
            onChange={handleChangeText}
            value={content}
            name="content"
          />
        </div>
      </form>
    </div>
  );
};
