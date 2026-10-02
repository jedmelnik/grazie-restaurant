import {
  siFacebook,
  siYelp,
  siGooglemaps,
  type SimpleIcon,
} from "simple-icons";
import { socialLinks } from "@/lib/site";
import { cn } from "@/lib/utils";

const iconMap: Record<(typeof socialLinks)[number]["network"], SimpleIcon> = {
  facebook: siFacebook,
  yelp: siYelp,
  google: siGooglemaps,
};

type Props = {
  className?: string;
  iconClassName?: string;
};

/** Brand-accurate social marks from simple-icons (social-icons skill). */
export function SocialLinks({ className, iconClassName }: Props) {
  return (
    <ul className={cn("flex items-center gap-3", className)}>
      {socialLinks.map(({ network, href, label }) => {
        const icon = iconMap[network];
        return (
          <li key={network}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${label} (opens in new tab)`}
              className="inline-flex size-10 items-center justify-center rounded-md text-current transition-opacity hover:opacity-80"
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                className={cn("size-5", iconClassName)}
                aria-hidden
              >
                <path fill="currentColor" d={icon.path} />
              </svg>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
