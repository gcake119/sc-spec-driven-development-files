type HomeHeaderProps = {
  titleClassName: string;
  subtitleClassName: string;
};

import { HOME_HEADER_SUBTITLE, HOME_HEADER_TITLE } from "@/lib/home-content";

export function HomeHeader({ titleClassName, subtitleClassName }: HomeHeaderProps) {
  return (
    <>
      <h1 className={titleClassName}>{HOME_HEADER_TITLE}</h1>
      <p className={subtitleClassName}>{HOME_HEADER_SUBTITLE}</p>
    </>
  );
}
