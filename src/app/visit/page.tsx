import type { Metadata } from "next";
import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StickyMobileCta } from "@/components/sticky-mobile-cta";
import { SocialLinks } from "@/components/social-links";
import { hours, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Visit",
  description:
    "Hours, directions, and contact for Grazie Restaurant at 823 Grant Ave, Novato, CA.",
};

export default function VisitPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <PageHero
          kicker="Find us"
          title="Visit"
          lede="Downtown Novato on Grant Avenue - breakfast, lunch, and dinner."
          image={{
            src: "/images/storefront-2.jpg",
            alt: "Grazie Restaurant on Grant Avenue",
            width: 1920,
            height: 1440,
            focalX: 0.52,
            focalY: 0.4,
            subject: { l: 0.12, t: 0.15, r: 0.92, b: 0.82 },
            fillFrame: true,
            bleed: true,
          }}
          actions={
            <Button
              render={
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
              size="lg"
              className="h-10 rounded-md bg-chianti px-5 text-sm font-semibold text-white hover:bg-chianti/90"
            >
              Get directions
            </Button>
          }
        />

        <section className="site-wrap py-14 md:py-20">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="animate-rise">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand/55">
                Location
              </p>
              <h2 className="mt-3 font-display text-3xl tracking-tight text-ink md:text-4xl">
                823 Grant Avenue
              </h2>
              <ul className="mt-8 space-y-5 text-base text-foreground/80">
                <li className="flex items-start gap-3">
                  <MapPin
                    className="mt-0.5 size-5 shrink-0 text-chianti"
                    aria-hidden
                  />
                  <address className="not-italic leading-relaxed">
                    {site.address.street}
                    <br />
                    {site.address.city}, {site.address.state} {site.address.zip}
                  </address>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="size-5 shrink-0 text-chianti" aria-hidden />
                  <a
                    href={site.phoneHref}
                    className="font-medium text-ink hover:text-chianti"
                  >
                    {site.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="size-5 shrink-0 text-chianti" aria-hidden />
                  <a
                    href={`mailto:${site.email}`}
                    className="font-medium text-ink hover:text-chianti"
                  >
                    {site.email}
                  </a>
                </li>
              </ul>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-foreground/65">
                {site.deliveryNote}
              </p>
              <SocialLinks className="mt-6 text-ink/80" />
              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  render={<a href={site.phoneHref} />}
                  size="lg"
                  className="h-11 rounded-md bg-chianti px-5 text-sm font-semibold text-white hover:bg-chianti/90"
                >
                  Call {site.phone}
                </Button>
                <Button
                  render={
                    <a
                      href={site.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  }
                  variant="outline"
                  size="lg"
                  className="h-11 rounded-md border-border px-5 text-sm font-semibold text-ink hover:bg-muted"
                >
                  Open in Maps
                </Button>
              </div>
            </div>

            <div className="animate-rise-delay-1 overflow-hidden border border-border/70 bg-card">
              <table className="w-full text-sm">
                <caption className="border-b border-border/60 px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.18em] text-brand/55">
                  Restaurant hours
                </caption>
                <tbody>
                  {hours.map(({ day, slots }) => (
                    <tr
                      key={day}
                      className="border-b border-border/50 last:border-0"
                    >
                      <th
                        scope="row"
                        className="px-4 py-3.5 text-left font-semibold text-ink"
                      >
                        {day}
                      </th>
                      <td className="px-4 py-3.5 text-right text-foreground/75">
                        {slots[0]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-12 overflow-hidden border border-border/70 animate-rise-delay-2">
            <iframe
              title="Map to Grazie Restaurant"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(site.address.full)}&z=15&output=embed`}
              className="h-72 w-full md:h-96"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </main>
      <SiteFooter />
      <StickyMobileCta />
    </>
  );
}
