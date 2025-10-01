import "./App.css";
import background from "./assets/background.png";
import { Timer } from "./components/timer";
import { Browser } from "./components/browser";
import { ToDoList } from "./components/todo-list";
import { Memo } from "./components/memo";
import { Comment } from "./components/comment";
import { Footer } from "./components/footer";

function App() {
  return (
    <>
      <div
        className="bg-cover bg-center h-screen w-screen p-8"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="grid grid-cols-10 gap-4 h-10/12 pb-12">
          <div className="col-span-4 pl-24 flex items-end justify-end">
            <Timer />
          </div>
          <div className="col-span-4">
            <Browser />
            <div className="flex gap-12 pt-12 justify-center">
              <ToDoList />
              <Memo />
            </div>
          </div>
          <div className="col-span-2">
            <Comment />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
