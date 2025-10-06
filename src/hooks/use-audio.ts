import { useEffect, useRef } from "react";

const useAudio = () => {
  const audioRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    audioRef.current = window.AudioContext ? new window.AudioContext() : null;
    return () => {
      if (audioRef.current) {
        audioRef.current.close();
      }
    };
  }, []);

  const playBeep = (frequency: number, duration: number) => {
    if (!audioRef.current) return;
    const oscillator = audioRef.current.createOscillator();
    const gainNode = audioRef.current.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioRef.current.destination);

    gainNode.gain.value = 0.5;
    oscillator.frequency.value = frequency;
    oscillator.start();

    setTimeout(() => {
      oscillator.stop();
    }, duration);
  };

  const playChime = () => {
    playBeep(523.25, 200); // C5: ド
    setTimeout(() => playBeep(659.25, 200), 200); // E5: ミ
    setTimeout(() => playBeep(783.99, 400), 400); // G5: ソ
  };

  return { audioRef, playChime };
};

export default useAudio;
