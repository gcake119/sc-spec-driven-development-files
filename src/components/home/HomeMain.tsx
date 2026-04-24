type HomeMainProps = {
  paragraphClassName: string;
};

import { HOME_MAIN_DESCRIPTION } from "@/lib/home-content";

export function HomeMain({ paragraphClassName }: HomeMainProps) {
  return <p className={paragraphClassName}>{HOME_MAIN_DESCRIPTION}</p>;
}
