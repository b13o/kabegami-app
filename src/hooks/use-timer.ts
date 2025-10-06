import { useEffect, useRef, useState } from "react";
import useAudio from "./use-audio";

const useTimer = () => {
  const [workMinutes, setWorkMinutes] = useState(25);
  const [breakMinutes, setBreakMinutes] = useState(5);

  const handleUpdateTimer = (workMinutes: number, breakMinutes: number) => {
    setWorkMinutes(workMinutes);
    setBreakMinutes(breakMinutes);
  };

  // 作業/休憩モード
  const [mode, setMode] = useState<"work" | "break">("work");
  // タイマーが動いているかどうか
  const [isRunning, setIsRunning] = useState(false);
  // タイマーの開始時刻・現在時刻・一時停止時した時間
  const [startTime, setStartTime] = useState<number | null>(null);
  const [now, setNow] = useState<number | null>(null);
  const [pausedTimeRemaining, setPausedTimeRemaining] = useState<number | null>(
    null
  );
  // タイマーのインターバルのid
  const intervalRef = useRef<NodeJS.Timeout | undefined>(undefined);

  const { audioRef, playChime } = useAudio();

  // タイマー完了時の処理
  useEffect(() => {
    if (startTime && now) {
      const timePassed = now - startTime;
      const totalTime =
        mode === "work" ? workMinutes * 60 * 1000 : breakMinutes * 60 * 1000;

      if (timePassed >= totalTime) {
        playChime();
        handleChangeMode();
        handleStart();
      }
    }
  }, [now, startTime, mode]);

  function handleStart() {
    if (audioRef.current) {
      // ユーザーの操作によって音が鳴るようにしないといけない。
      audioRef.current.resume();
    }

    const currentTime = Date.now();
    // 停止中かつ、１時停止状態の場合
    if (!isRunning && pausedTimeRemaining) {
      setStartTime(currentTime - pausedTimeRemaining);
      setPausedTimeRemaining(null);
    } else {
      setStartTime(currentTime);
    }
    setNow(Date.now());
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 1000);

    setIsRunning(true);
  }

  function handleStop() {
    // インターバル処理の停止
    clearInterval(intervalRef.current);
    // 作業中のフラグをfalse
    setIsRunning(false);

    // 停止された時点の経過時間を、pausedTimeRemainingに格納
    if (startTime != null && now != null) {
      setPausedTimeRemaining(now - startTime);
    }
  }

  function handleReset() {
    clearInterval(intervalRef.current);
    setStartTime(null);
    setNow(null);
    setIsRunning(false);
    setPausedTimeRemaining(null);
  }

  function handleChangeMode() {
    handleReset();
    setMode(mode === "work" ? "break" : "work");
  }

  // 経過時間(秒)
  const secondsPassed =
    startTime != null && now != null ? Math.floor((now - startTime) / 1000) : 0;
  // 残り時間の秒数（定数で設定した時間ー経過時間）
  const calculateTime =
    mode === "work"
      ? workMinutes * 60 - secondsPassed
      : breakMinutes * 60 - secondsPassed;
  const displayMinutes = Math.floor(calculateTime / 60);
  const displaySeconds =
    calculateTime % 60 < 10 ? "0" + (calculateTime % 60) : calculateTime % 60;

  return {
    mode,
    isRunning,
    secondsPassed,
    displayMinutes,
    displaySeconds,
    handleUpdateTimer,
    handleStart,
    handleStop,
    handleReset,
    handleChangeMode,
  };
};

export default useTimer;
