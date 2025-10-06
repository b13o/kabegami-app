import { GlassCard } from "./glass-card";

const logo = "#b13oもくもくLIVE🫐🌿🎧";

export const Footer = () => {
  return (
    <footer className="flex justify-end">
      <GlassCard className="px-16">
        {/* ロゴ、バナー、、など */}
        <h1 className="text-6xl font-bold ">{logo}</h1>
      </GlassCard>
    </footer>
  );
};
