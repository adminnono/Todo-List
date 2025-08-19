type Priority = "Urgente" | "Moyenne" | "Basse";

type Todo = {
  id: number;
  text: string;
  priority: Priority;
};

type Props = {
  todo: Todo;
};

const TodoItem = ({ todo }: Props) => {
  return (
    <li className="p-3">
      <div className="flex justify-between items-center"></div>
    </li>
  );
};

export default TodoItem;
