import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export const CreateTodo = () => {
  const [text, setText] = useState("");

  const handleChangeText: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <Label htmlFor="todo-input">ADD TODO</Label>
      <Input id="todo-input" onChange={handleChangeText} value={text} />
    </div>
  );
};
