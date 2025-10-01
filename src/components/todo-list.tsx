import { useState } from "react";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

export const ToDoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");

  const handleAddTodo = (title: string) => {
    if (title.trim() === "") return;
    const newTodo = { id: new Date().getTime(), title, completed: false };
    setTodos([...todos, newTodo]);
    setNewTodo("");
  };

  return (
    <>
      <div className="aspect-square h-56 p-3 bg-sky-200 -rotate-3">
        <h3 className="text-lg font-bold">ToDo</h3>

        <div className="flex items-center gap-1 mt-2">
          <Input
            className="border-gray-500"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <Button
            className="bg-gray-600 hover:bg-gray-700"
            size="icon"
            onClick={() => handleAddTodo(newTodo)}
          >
            <Plus />
          </Button>
        </div>

        <div className="pt-4 text-gray-700">
          {todos.map((todo) => (
            <div key={todo.id} className="flex items-center gap-1">
              <Checkbox className="border-gray-500" />
              <Label className="text-base" htmlFor="scales">
                {todo.title}
              </Label>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
