type HomeFooterProps = {
  textClassName: string;
};

import { HOME_FOOTER_NOTE } from "@/lib/home-content";

export function HomeFooter({ textClassName }: HomeFooterProps) {
  return <p className={textClassName}>{HOME_FOOTER_NOTE}</p>;
}
