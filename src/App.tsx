import "./App.css";
import background from "./assets/background.png";
import { GlassCard } from "./components/glass-card";

function App() {
  return (
    <>
      <div
        className="bg-cover bg-center h-screen w-screen p-8"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="grid grid-cols-10 gap-4 h-10/12 pb-12">
          <div className="col-span-4 pl-24 flex items-end justify-end">
            <GlassCard className="px-24 py-16">
              <h1 className="text-7xl font-bold underline">25:00</h1>
            </GlassCard>
          </div>
          <div className="col-span-4">
            <GlassCard className="aspect-video h-72">
              <h1 className="text-3xl font-bold underline">ブラウザ</h1>
            </GlassCard>{" "}
            <div className="flex gap-12 pt-20 justify-center">
              <div className="aspect-square h-48 bg-sky-200 -rotate-6">
                <p>ToDo List</p>
              </div>
              <div className="aspect-square h-48 bg-amber-200">
                <p>メモ欄</p>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <GlassCard>
              <h1 className="text-3xl font-bold underline h-96">コメント欄</h1>
            </GlassCard>{" "}
          </div>
        </div>
        <footer className="flex justify-end">
          <GlassCard className="px-36">
            <h1 className="text-6xl font-bold underline">
              ロゴ、バナー、、など
            </h1>
          </GlassCard>
        </footer>
      </div>
    </>
  );
}

export default App;
