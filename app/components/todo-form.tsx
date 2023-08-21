import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function TodoForm() {
  return (
    <form className="flex gap-4">
      <Input type="text" className="w-96" />
      <Button type="submit">Add</Button>
    </form>
  );
}
