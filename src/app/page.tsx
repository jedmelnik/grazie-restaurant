import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StickyMobileCta } from "@/components/sticky-mobile-cta";
import {
  aboutCopy,
  festaSpecial,
  hours,
  menuSections,
  reviews,
  site,
} from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="top" className="flex flex-1 flex-col">
        <PageHero
          size="home"
          kicker={`Novato, California · Since ${site.since}`}
          title={site.name}
          lede="Family-run Italian-American dining on Grant Avenue - breakfast, lunch, and dinner."
          ledeOnMobile
          image={{
            src: "/images/hero-storefront.jpg",
            alt: "Grazie Restaurant storefront on Grant Avenue in Novato",
            width: 1920,
            height: 1440,
            // Landmark: restaurant entrance / awning center-right
            focalX: 0.58,
            focalY: 0.42,
            subject: { l: 0.15, t: 0.15, r: 0.95, b: 0.85 },
            fillFrame: true,
            bleed: true,
          }}
          actions={
            <>
              <Button
                render={<a href={site.phoneHref} />}
                size="lg"
                className="h-11 rounded-md bg-chianti px-5 text-sm font-semibold text-white shadow-none transition-transform hover:bg-chianti/90 hover:scale-[1.02] active:scale-[0.99] md:h-12 md:px-6 md:text-base"
              >
                Call {site.phone}
              </Button>
              <Button
                render={<Link href="/menu" />}
                variant="outline"
                size="lg"
                className="hidden h-11 rounded-md border-white/40 bg-transparent px-5 text-sm font-semibold text-white hover:bg-white/10 hover:text-white md:inline-flex md:h-12 md:px-6 md:text-base"
              >
                View the menu
              </Button>
            </>
          }
        />

        <section className="site-wrap py-14 md:py-20">
          <div className="max-w-3xl animate-rise">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand/55">
              Welcome
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-tight text-ink md:text-4xl">
              Grazie - a Novato favorite since {site.since}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-foreground/80 md:text-lg">
              {aboutCopy.lead}
            </p>
          </div>
        </section>

        <section className="border-y border-border/70 bg-card/70 py-14 md:py-20">
          <div className="site-wrap">
            <div className="max-w-2xl animate-rise">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand/55">
                Menu
              </p>
              <h2 className="mt-3 font-display text-3xl tracking-tight text-ink md:text-4xl">
                Breakfast through dinner
              </h2>
              <p className="mt-4 text-base leading-relaxed text-foreground/75 md:text-lg">
                Pasta, panini, salads, eggs Benedict, and seasonal specials -
                call to order or reserve a seat.
              </p>
            </div>

            <div className="mt-8 md:hidden">
              <Link
                href="/menu"
                className="group relative block overflow-hidden"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src="/images/penne-pasta.jpg"
                    alt="Penne pasta at Grazie"
                    fill
                    sizes="100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent"
                    aria-hidden
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="font-display text-2xl text-white">View the menu</p>
                  <p className="mt-1 text-sm text-white/75">
                    Breakfast · Lunch · Dinner · Specials
                  </p>
                </div>
              </Link>
            </div>

            <div className="mt-10 hidden divide-y divide-border/80 md:block">
              {menuSections.slice(0, 5).map((section, index) => (
                <Link
                  key={section.id}
                  href={`/menu#${section.id}`}
                  className="group grid grid-cols-[minmax(0,1fr)_14rem] items-center gap-8 py-7 transition-colors hover:bg-white/35 lg:grid-cols-[minmax(0,1fr)_18rem]"
                >
                  <div className={index === 0 ? "animate-rise-delay-1" : ""}>
                    <p className="font-display text-2xl text-ink transition-colors group-hover:text-chianti lg:text-3xl">
                      {section.title}
                    </p>
                    <p className="mt-2 max-w-xl text-base leading-relaxed text-foreground/70">
                      {section.summary}
                    </p>
                  </div>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={section.image}
                      alt={section.imageAlt}
                      fill
                      sizes="288px"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="site-wrap py-14 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="animate-rise">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand/55">
                Special
              </p>
              <h2 className="mt-3 font-display text-3xl tracking-tight text-ink md:text-4xl">
                {festaSpecial.title}
              </h2>
              <p className="mt-2 font-display text-2xl text-chianti">
                {festaSpecial.price} · {festaSpecial.days}
              </p>
              <p className="mt-4 text-base leading-relaxed text-foreground/75 md:text-lg">
                {festaSpecial.detail}
              </p>
              <Button
                render={<a href={site.phoneHref} />}
                size="lg"
                className="mt-6 h-11 rounded-md bg-ink px-5 text-sm font-semibold text-white hover:bg-ink/90"
              >
                Call to order
              </Button>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden animate-rise-delay-1">
              <Image
                src="/images/food-pasta-plate.jpg"
                alt="Pasta special at Grazie"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section className="border-y border-border/70 bg-card/60 py-14 md:py-20">
          <div className="site-wrap">
            <div className="max-w-2xl animate-rise">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand/55">
                Guests say
              </p>
              <h2 className="mt-3 font-display text-3xl tracking-tight text-ink md:text-4xl">
                From the neighborhood
              </h2>
            </div>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {reviews.map((review, i) => (
                <blockquote
                  key={review.name}
                  className={`animate-rise${i === 1 ? "-delay-1" : i === 2 ? "-delay-2" : ""}`}
                >
                  <p className="font-display text-xl leading-snug text-ink md:text-[1.35rem]">
                    &ldquo;{review.quote}&rdquo;
                  </p>
                  <footer className="mt-4 text-sm text-foreground/60">
                    {review.name} · {review.place}
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section className="site-wrap py-14 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div className="animate-rise">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand/55">
                Visit
              </p>
              <h2 className="mt-3 font-display text-3xl tracking-tight text-ink md:text-4xl">
                Hours & location
              </h2>
              <p className="mt-4 text-base leading-relaxed text-foreground/75 md:text-lg">
                {site.address.full}. {site.deliveryNote}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button
                  render={<Link href="/visit" />}
                  size="lg"
                  className="h-11 rounded-md bg-ink px-5 text-sm font-semibold text-white hover:bg-ink/90"
                >
                  Plan your visit
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
                  className="h-11 rounded-md border-border bg-transparent px-5 text-sm font-semibold text-ink hover:bg-muted"
                >
                  Get directions
                </Button>
              </div>
            </div>

            <div className="animate-rise-delay-1 overflow-hidden border border-border/70 bg-card">
              <table className="w-full text-sm">
                <caption className="sr-only">Restaurant hours</caption>
                <tbody>
                  {hours.map(({ day, slots }) => (
                    <tr
                      key={day}
                      className="border-b border-border/50 last:border-0"
                    >
                      <th
                        scope="row"
                        className="px-4 py-3 text-left font-semibold text-ink"
                      >
                        {day}
                      </th>
                      <td className="px-4 py-3 text-right text-foreground/75">
                        {slots[0]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <StickyMobileCta />
    </>
  );
}
