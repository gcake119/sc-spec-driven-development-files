type HomeHeaderProps = {
  titleClassName: string;
  subtitleClassName: string;
};

export function HomeHeader({ titleClassName, subtitleClassName }: HomeHeaderProps) {
  return (
    <>
      <h1 className={titleClassName}>AgentClinic</h1>
      <p className={subtitleClassName}>A focused workspace for agent care teams.</p>
    </>
  );
}
