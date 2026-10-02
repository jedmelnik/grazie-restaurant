import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/social-links";
import { hours, navLinks, site } from "@/lib/site";

function GoogleMapsIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative mt-auto overflow-hidden bg-secondary text-secondary-foreground">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(139,30,45,0.28),transparent_50%)]"
        aria-hidden
      />

      <div className="relative site-wrap">
        <div className="flex flex-col gap-6 border-b border-white/10 py-14 md:flex-row md:items-end md:justify-between md:py-16">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/55">
              Reserve a table
            </p>
            <p className="mt-3 font-display text-3xl tracking-tight text-white md:text-4xl">
              Call ahead or stop by on Grant Avenue
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/75 md:text-lg">
              Breakfast, lunch, and dinner in downtown Novato - since{" "}
              {site.since}.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              render={<a href={site.phoneHref} />}
              size="lg"
              className="h-12 rounded-md bg-chianti px-6 text-base font-semibold text-white hover:bg-chianti/90"
            >
              Call {site.phone}
            </Button>
            <Button
              render={<Link href="/menu" />}
              variant="outline"
              size="lg"
              className="h-12 rounded-md border-white/30 bg-transparent px-6 text-base font-semibold text-white hover:bg-white/10 hover:text-white"
            >
              View the menu
            </Button>
          </div>
        </div>

        <div className="grid gap-10 py-12 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <p className="font-display text-3xl tracking-tight text-white">
              {site.wordmark}
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/65">
              Family-run Italian-American restaurant in downtown Novato,
              California.
            </p>
            <div className="mt-5 flex items-start gap-2 text-sm text-white/70">
              <MapPin
                className="mt-0.5 size-4 shrink-0 text-chianti"
                aria-hidden
              />
              <address className="not-italic">
                {site.address.street}
                <br />
                {site.address.city}, {site.address.state} {site.address.zip}
              </address>
            </div>
            <div className="mt-3 flex items-center gap-2 text-sm text-white/70">
              <Phone className="size-4 shrink-0 text-chianti" aria-hidden />
              <a href={site.phoneHref} className="hover:text-white">
                {site.phone}
              </a>
            </div>
            <SocialLinks className="mt-6 text-white/80" />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
              Navigate
            </p>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-white/75 transition-colors hover:text-white"
                >
                  Home
                </Link>
              </li>
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white/75 transition-colors hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google Maps directions (opens in new tab)"
              className="mt-5 inline-flex items-center gap-2 text-sm text-white/75 hover:text-white"
            >
              <GoogleMapsIcon className="size-5" />
              Get directions
            </a>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
              Hours
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {hours.map(({ day, slots }) => (
                <li key={day} className="flex justify-between gap-4">
                  <span className="text-white/85">{day.slice(0, 3)}</span>
                  <span className="text-right">{slots[0]}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 text-xs leading-relaxed text-white/45">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
