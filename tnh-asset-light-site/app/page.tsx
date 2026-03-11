export default function Home() {
  const pillars = [
    {
      title: "Design-forward, operator-led",
      text: "We bring together boutique brand standards, revenue management, guest experience, and local operating discipline in one platform built for distinctive real estate.",
    },
    {
      title: "Heads in beds, fast",
      text: "Our launch playbook is built to stabilize assets quickly through tech transfer, OTA distribution, direct booking infrastructure, marketing activation, and on-site operational control.",
    },
    {
      title: "Owner-aligned economics",
      text: "The model is built around ownership outcomes: near-term cash flow, disciplined ramp-up, higher-margin direct demand, and long-term asset value creation.",
    },
    {
      title: "Boutique brand advantage",
      text: "Owners access The Neighborhood Hotel brand, systems, and audience without having to build a hospitality platform internally from scratch.",
    },
  ];

  const proofPoints = [
    { value: "79.4", label: "Net Promoter Score" },
    { value: "55%", label: "Direct bookings portfolio-wide" },
    { value: "20+", label: "OTA channels activated at launch" },
    { value: "30", label: "Days to operational go-live target" },
  ];

  const process = [
    {
      step: "01",
      title: "Assess the opportunity",
      text: "We evaluate the asset, submarket, guest demand, building condition, and positioning opportunity to determine fit.",
    },
    {
      step: "02",
      title: "Build the operating plan",
      text: "We define the launch path, commercial strategy, staffing model, tech stack, and brand expression around the property’s specific business plan.",
    },
    {
      step: "03",
      title: "Launch with control",
      text: "We transition systems, activate distribution, install TNH operating standards, and get the property guest-ready with clear accountability.",
    },
    {
      step: "04",
      title: "Drive long-term value",
      text: "We optimize pricing, marketing, channel mix, reviews, direct demand, and operational efficiency to grow NOI and strengthen asset value.",
    },
  ];

  const audience = [
    "Adaptive reuse and conversion opportunities",
    "Mixed-use buildings with hospitality potential",
    "Urban boutique and apartment-style hotel concepts",
    "Underperforming lodging assets needing repositioning",
    "Owners seeking a branded operating partner",
    "Developers who want flexibility without a hard flag",
  ];

  const faqs = [
    {
      q: "Is this a standalone website?",
      a: "Yes. The best structure is a standalone owner-facing microsite that feels native to The Neighborhood Hotel brand while speaking directly to building owners, developers, and capital partners.",
    },
    {
      q: "How should it relate to the main TNH site?",
      a: "It should borrow the same visual DNA: bold imagery, airy layouts, modern typography, neighborhood storytelling, and a warm boutique tone. But the content architecture should be purpose-built for partnerships rather than guest bookings.",
    },
    {
      q: "What should owners understand right away?",
      a: "That TNH is not just a brand. It is an operating platform with launch capability, revenue strategy, technology, guest experience systems, and owner reporting designed to create value quickly and sustainably.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f5f2eb] text-stone-900">
      <section className="relative isolate overflow-hidden bg-white">
        <img
          src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1600&q=80"
          alt="Boutique hospitality building exterior"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-stone-950/45" />

        <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
          <div className="text-sm uppercase tracking-[0.35em] text-white">
            The Neighborhood Hotel
          </div>
          <nav className="hidden gap-8 text-sm text-white/90 md:flex">
            <a href="#model" className="transition hover:text-white">
              The Model
            </a>
            <a href="#why-us" className="transition hover:text-white">
              Why Us
            </a>
            <a href="#process" className="transition hover:text-white">
              How It Works
            </a>
            <a href="#contact" className="transition hover:text-white">
              Partnerships
            </a>
          </nav>
        </header>

        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-16 lg:grid-cols-[1.15fr_0.85fr] lg:px-10 lg:pb-28 lg:pt-24">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white backdrop-blur-sm">
              Real Estate Partnerships
            </div>
            <h1 className="text-5xl font-semibold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
              A branded hospitality platform for owners who want boutique
              upside without building it all in-house.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">
              A standalone owner-facing site with The Neighborhood Hotel’s
              design DNA, focused on operator credibility, launch capability,
              and long-term asset value creation.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-full bg-[#a8dfe0] px-6 py-3 text-sm font-medium text-stone-900 transition hover:-translate-y-0.5">
                Request Owner Deck
              </button>
              <button className="rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/15">
                Explore the Platform
              </button>
            </div>
          </div>

          <div className="self-end lg:pl-8">
            <div className="rounded-[2rem] border border-white/15 bg-white/12 p-6 text-white shadow-2xl backdrop-blur-md">
              <div className="text-xs uppercase tracking-[0.25em] text-white/70">
                Why owners engage
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {proofPoints.map((item) => (
                  <div key={item.label} className="rounded-[1.5rem] bg-white/10 p-5">
                    <div className="text-3xl font-semibold">{item.value}</div>
                    <div className="mt-2 text-sm leading-6 text-white/75">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="model" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <div className="text-sm uppercase tracking-[0.25em] text-stone-500">
              The Model
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              More sophisticated than a deck. More targeted than the guest site.
            </h2>
          </div>
          <div className="text-lg leading-8 text-stone-600">
            The site should function as a standalone partnerships microsite under
            the TNH umbrella. It needs the confidence and visual warmth of the
            consumer website, but with a sharper narrative for owners: why TNH
            wins, how the operating model works, how quickly it can launch, and
            how it drives long-term asset value.
          </div>
        </div>

        <div id="why-us" className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-[2rem] border border-stone-200 bg-white p-7 shadow-sm"
            >
              <h3 className="text-xl font-semibold">{pillar.title}</h3>
              <p className="mt-4 text-sm leading-7 text-stone-600">
                {pillar.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2 lg:px-10">
          <div className="rounded-[2rem] bg-stone-900 p-8 text-white">
            <div className="text-sm uppercase tracking-[0.25em] text-stone-400">
              Recommended homepage narrative
            </div>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight">
              Stabilize fast. Then create long-term value.
            </h3>
            <p className="mt-5 text-base leading-7 text-stone-300">
              TNH should lead with immediate execution capability, then show the
              longer-term marketing and operating flywheel. That is a much
              stronger owner story than generic management language.
            </p>
          </div>
          <div className="rounded-[2rem] border border-stone-200 bg-[#ebe5d8] p-8">
            <div className="text-sm uppercase tracking-[0.25em] text-stone-500">
              Suggested page structure
            </div>
            <div className="mt-5 space-y-4 text-sm leading-7 text-stone-700">
              <div>Hero with owner-facing value proposition</div>
              <div>Proof points and operating credibility</div>
              <div>What TNH actually does as operator</div>
              <div>30-day launch and go-live playbook</div>
              <div>Demand generation and direct booking flywheel</div>
              <div>Portfolio results and case studies</div>
              <div>Who this works for and partnership CTA</div>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="border-y border-stone-200 bg-[#efeae0]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="max-w-2xl">
            <div className="text-sm uppercase tracking-[0.25em] text-stone-500">
              How it works
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              A launch playbook owners can actually understand.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-4">
            {process.map((item) => (
              <div
                key={item.step}
                className="rounded-[2rem] bg-white p-7 shadow-sm ring-1 ring-stone-200"
              >
                <div className="text-sm font-semibold text-stone-500">
                  {item.step}
                </div>
                <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-stone-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="text-sm uppercase tracking-[0.25em] text-stone-500">
              Who it’s for
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              Best for distinctive buildings, conversion opportunities, and
              owners who want flexibility.
            </h2>
            <p className="mt-6 text-lg leading-8 text-stone-600">
              The positioning should stay premium and design-led, but it also
              needs to clearly say where TNH is strongest as an operator and
              brand partner.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {audience.map((item) => (
              <div
                key={item}
                className="rounded-[2rem] border border-stone-200 bg-white p-6 text-sm font-medium text-stone-700 shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-stone-200 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-10">
          <div className="text-center">
            <div className="text-sm uppercase tracking-[0.25em] text-stone-500">
              FAQ
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              Direction for the standalone site.
            </h2>
          </div>
          <div className="mt-12 space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-[2rem] border border-stone-200 bg-stone-50 p-6"
              >
                <h3 className="text-lg font-semibold">{faq.q}</h3>
                <p className="mt-3 text-sm leading-7 text-stone-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-stone-900">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-16 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div>
            <div className="text-sm uppercase tracking-[0.25em] text-stone-400">
              Owner Partnerships
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Build the owner-facing TNH site around proof, not just positioning.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-stone-300">
              This first shell creates a strong owner-facing story. Next we can
              replace placeholder proof points, imagery, and copy with TNH
              portfolio-specific content.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <button className="rounded-full bg-white px-6 py-3 text-sm font-medium text-stone-900 transition hover:-translate-y-0.5">
              Schedule a Conversation
            </button>
            <button className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10">
              Download Partnership Materials
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}