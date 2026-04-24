type HomeMainProps = {
  paragraphClassName: string;
};

export function HomeMain({ paragraphClassName }: HomeMainProps) {
  return (
    <p className={paragraphClassName}>
      AgentClinic helps staff and agents manage ailments, therapies, and appointments from one
      reliable system that is easy to extend in upcoming phases.
    </p>
  );
}
