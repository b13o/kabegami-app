import { Ellipsis, Pause, Play, RefreshCw } from "lucide-react";
import { GlassCard } from "./glass-card";
import { Button } from "./ui/button";
import useTimer from "../hooks/use-timer";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useState } from "react";

const Timer = () => {
  const {
    mode,
    displayMinutes,
    displaySeconds,
    isRunning,
    handleUpdateTimer,
    handleStart,
    handleStop,
    handleReset,
    handleChangeMode,
  } = useTimer();

  const [inputWorkMinutes, setInputWorkMinutes] = useState(25);
  const [inputBreakMinutes, setInputBreakMinutes] = useState(5);

  return (
    <GlassCard className="w-[420px] h-[280px] overflow-hidden flex p-3! flex-col justify-center items-center">
      <div className="space-y-6 rounded-xl w-full">
        <div className="bg-gray-950/60 rounded-xl px-4 py-8 relative">
          <div className="absolute top-2 right-2 text-zinc-100 rounded-xl">
            <Dialog>
              <DialogTrigger>
                <Ellipsis />
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>⏰ タイマーの設定</DialogTitle>
                  <DialogDescription></DialogDescription>
                </DialogHeader>

                <div className="grid gap-4">
                  <div className="grid gap-3">
                    <Label htmlFor="name-1">作業時間</Label>
                    <Input
                      id="name-1"
                      name="work-minutes"
                      type="number"
                      defaultValue="25"
                      value={inputWorkMinutes}
                      onChange={(e) =>
                        setInputWorkMinutes(Number(e.target.value))
                      }
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="username-1">休憩時間</Label>
                    <Input
                      id="username-1"
                      name="break-minutes"
                      type="number"
                      defaultValue="5"
                      value={inputBreakMinutes}
                      onChange={(e) =>
                        setInputBreakMinutes(Number(e.target.value))
                      }
                    />
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">キャンセル</Button>
                  </DialogClose>
                  <Button
                    type="submit"
                    onClick={() =>
                      handleUpdateTimer(inputWorkMinutes, inputBreakMinutes)
                    }
                  >
                    保存
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
          <p className="text-center font-bold text-9xl text-[7.2rem] font-mono text-zinc-100">
            {displayMinutes}:{displaySeconds}
          </p>
        </div>

        {/* コントロールボタン */}
        <div className="flex w-full justify-between items-center">
          <div className="flex gap-2">
            {!isRunning ? (
              <Button
                size="lg"
                className="bg-gray-950/60 hover:bg-gray-950/80"
                onClick={handleStart}
              >
                <Play className="mx-2" />
              </Button>
            ) : (
              <Button
                size="lg"
                className="bg-gray-950/60 hover:bg-gray-950/80"
                onClick={handleStop}
              >
                <Pause className="mx-2" />
              </Button>
            )}
            <Button
              size="lg"
              className="bg-gray-950/60 hover:bg-gray-950/80"
              onClick={handleReset}
            >
              <RefreshCw className="mx-2" />
            </Button>
          </div>
          <div className="">
            {mode === "work" ? (
              <p
                className={cn(
                  "text-lg font-bold font-mono",
                  isRunning && "animate-pulse"
                )}
              >
                作業中
              </p>
            ) : (
              <p
                className={cn(
                  "text-lg font-bold font-mono",
                  isRunning && "animate-pulse"
                )}
              >
                休憩中
              </p>
            )}
          </div>
          {/* モード切り替えボタン */}
          <div className="flex gap-2">
            <Button
              disabled={mode === "work"}
              variant={mode === "work" ? "ghost" : "default"}
              size="lg"
              className="bg-gray-950/60 hover:bg-gray-950/80"
              onClick={handleChangeMode}
            >
              <p>🔥</p>
            </Button>
            <Button
              disabled={mode === "break"}
              variant={mode === "break" ? "ghost" : "default"}
              size="lg"
              className="bg-gray-950/60 hover:bg-gray-950/80"
              onClick={handleChangeMode}
            >
              <p>☕️</p>
            </Button>
          </div>
        </div>
      </div>
    </GlassCard>
  );
};

export default Timer;
