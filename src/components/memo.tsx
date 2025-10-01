import { Textarea } from "./ui/textarea";

export const Memo = () => {
  return (
    <div className="aspect-square h-56 bg-amber-200">
      <div className="flex justify-between mr-auto mb-1">
        <p className="text-4xl pl-6 rotate-35">;)</p>
        <p className="text-lg font-bold pr-2">Memo</p>
      </div>
      <Textarea placeholder="メモを入力..." className="h-43 w-56" />
    </div>
  );
};
