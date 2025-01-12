type PulseUpProps = {
  children: React.ReactNode;
};

export default function PulseUp({ children }: PulseUpProps) {
  return <div className="animate-pulseUp">{children}</div>;
}
