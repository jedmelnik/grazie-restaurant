import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StickyMobileCta } from "@/components/sticky-mobile-cta";
import { menuSections, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Breakfast, starters, salads, panini, pastas, and specials at Grazie Restaurant in Novato.",
};

export default function MenuPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <PageHero
          kicker="From the kitchen"
          title="Menu"
          lede="Breakfast through dinner - call (415) 897-5181 to order or ask about today's specials."
          image={{
            src: "/images/penne-pasta.jpg",
            alt: "Penne pasta at Grazie Restaurant",
            width: 750,
            height: 1000,
            focalX: 0.5,
            focalY: 0.38,
            subject: { l: 0.08, t: 0.12, r: 0.95, b: 0.72 },
            fillFrame: true,
            bleed: true,
          }}
          actions={
            <Button
              render={<a href={site.phoneHref} />}
              size="lg"
              className="h-10 rounded-md bg-chianti px-5 text-sm font-semibold text-white hover:bg-chianti/90"
            >
              Call to order
            </Button>
          }
        />

        <div className="site-wrap py-10 md:py-14">
          <nav
            aria-label="Menu sections"
            className="flex flex-wrap gap-2 border-b border-border/70 pb-6"
          >
            {menuSections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="rounded-md px-3 py-1.5 text-sm font-medium text-ink/75 transition-colors hover:bg-muted hover:text-ink"
              >
                {section.title}
              </a>
            ))}
          </nav>

          <div className="mt-10 space-y-16 md:space-y-20">
            {menuSections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-28"
              >
                <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_16rem] lg:items-start">
                  <div>
                    <h2 className="font-display text-3xl tracking-tight text-ink md:text-4xl">
                      {section.title}
                    </h2>
                    <p className="mt-3 max-w-2xl text-base leading-relaxed text-foreground/75">
                      {section.summary}
                    </p>
                    <ul className="mt-8 divide-y divide-border/70">
                      {section.items.map((item) => (
                        <li key={item.name} className="py-4">
                          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                            <p className="font-display text-xl text-ink md:text-[1.35rem]">
                              {item.name}
                            </p>
                            {item.note ? (
                              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-chianti">
                                {item.note}
                              </span>
                            ) : null}
                          </div>
                          {item.description ? (
                            <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-foreground/65 md:text-[0.95rem]">
                              {item.description}
                            </p>
                          ) : null}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative hidden aspect-[3/4] overflow-hidden lg:block">
                    <Image
                      src={section.image}
                      alt={section.imageAlt}
                      fill
                      sizes="256px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </section>
            ))}
          </div>

          <div className="mt-16 border-t border-border/70 pt-10">
            <p className="max-w-2xl text-base leading-relaxed text-foreground/75">
              Menu items and prices change with the season. {site.deliveryNote}{" "}
              Join the email list at{" "}
              <a
                href={`mailto:${site.email}`}
                className="font-medium text-chianti underline-offset-2 hover:underline"
              >
                {site.email}
              </a>
              .
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button
                render={<a href={site.phoneHref} />}
                size="lg"
                className="h-11 rounded-md bg-chianti px-5 text-sm font-semibold text-white hover:bg-chianti/90"
              >
                Call {site.phone}
              </Button>
              <Button
                render={<Link href="/visit" />}
                variant="outline"
                size="lg"
                className="h-11 rounded-md border-border px-5 text-sm font-semibold text-ink hover:bg-muted"
              >
                Hours & directions
              </Button>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
      <StickyMobileCta />
    </>
  );
}
