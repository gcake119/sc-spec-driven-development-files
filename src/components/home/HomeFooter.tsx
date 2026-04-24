type HomeFooterProps = {
  textClassName: string;
};

export function HomeFooter({ textClassName }: HomeFooterProps) {
  return <p className={textClassName}>Phase 1 scaffold ready for dashboard and API expansion.</p>;
}
