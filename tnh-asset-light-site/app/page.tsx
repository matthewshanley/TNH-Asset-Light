export default function Home() {
  const uniques = [
    {
      title: "Hybrid Hospitality Experience",
      text: "We combine the reliability, comfort, and service of a hotel with the charm, character, and authenticity of a residential stay. The result is a guest experience that feels elevated, flexible, and easy from booking through checkout.",
    },
    {
      title: "Thoughtful, Local Design",
      text: "Each property reflects the essence of its neighborhood through custom touches, curated details, and intentional design. Our spaces are residential in scale, locally grounded, and designed to feel memorable rather than generic.",
    },
    {
      title: "Flexible Stays for Diverse Guests",
      text: "Whether guests are traveling for business or leisure, solo or with family, for two nights or an extended stay, our spaces are designed to support a wide range of needs with autonomy, comfort, and character.",
    },
  ];

  const process = [
    {
      step: "Discover",
      text: "Guests find us through word-of-mouth, strong reviews, and seamless booking channels.",
    },
    {
      step: "Book",
      text: "A simple, hassle-free booking experience helps guests find the right space for the way they travel.",
    },
    {
      step: "Stay",
      text: "Seamless check-in, thoughtful design, and home-like comforts create an experience that feels easy from the start.",
    },
    {
      step: "Experience",
      text: "Curated neighborhood recommendations, prime locations, and personalized details help guests live like locals.",
    },
    {
      step: "Return",
      text: "Guests leave with memorable experiences and often come back again, strengthening loyalty, direct demand, and long-term brand value.",
    },
  ];

  const platform = [
    "Revenue management and pricing strategy",
    "Direct booking infrastructure",
    "Guest communications and digital access",
    "Housekeeping and maintenance workflows",
    "Marketing and review generation",
    "Local partnerships and neighborhood storytelling",
  ];

  const proofPoints = [
    { value: "79.4", label: "Net Promoter Score" },
    { value: "55%", label: "Direct bookings" },
    { value: "4.9", label: "Average review score" },
    { value: "5", label: "Locations operating or in pipeline" },
  ];

  const properties = [
    {
      name: "Lincoln Park",
      region: "Chicago",
      detail: "Our first location opened in summer 2020 near beloved restaurants, shops, and green space.",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Little Italy",
      region: "Chicago",
      detail: "An old-world neighborhood stay near UIC, Rush, the West Loop, and the United Center.",
      image:
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Grand Beach",
      region: "Michigan",
      detail: "A quick escape from the city with an ideal blend of nature, comfort, and design-forward hospitality.",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "New Buffalo",
      region: "Michigan",
      detail: "Apartment-style hospitality in the heart of a fast-growing Southwest Michigan destination.",
      image:
        "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f6f1e8] text-stone-900">
      <section className="relative isolate overflow-hidden bg-[#e9e2d6]">
        <img
          src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1800&q=80"
          alt="The Neighborhood Hotel interior"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-stone-950/35" />

        <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
          <div className="text-sm uppercase tracking-[0.35em] text-white">
            The Neighborhood Hotel
          </div>
          <nav className="hidden gap-8 text-sm text-white/90 md:flex">
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#uniques" className="transition hover:text-white">
              What Makes Us Different
            </a>
            <a href="#process" className="transition hover:text-white">
              Proven Process
            </a>
            <a href="#contact" className="transition hover:text-white">
              Partnerships
            </a>
          </nav>
        </header>

        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-14 lg:grid-cols-[1.15fr_0.85fr] lg:px-10 lg:pb-28 lg:pt-24">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-white backdrop-blur-sm">
              Boutique Hospitality Brand + Operating Platform
            </div>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-tight text-white md:text-6xl lg:text-7xl">
              A boutique hospitality brand built for distinctive buildings.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/90">
              The Neighborhood Hotel combines the reliability, comfort, and service of a hotel with the character, flexibility, and authenticity of a residential stay. We create design-forward, neighborhood-rooted hospitality experiences that guests remember and return to.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-full bg-[#bfdce6] px-6 py-3 text-sm font-medium text-stone-900 transition hover:-translate-y-0.5">
                Start a Conversation
              </button>
              <button className="rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/15">
                View Our Portfolio
              </button>
            </div>
          </div>

          <div className="self-end lg:pl-8">
            <div className="rounded-[2rem] border border-white/15 bg-white/12 p-6 text-white shadow-2xl backdrop-blur-md">
              <div className="text-xs uppercase tracking-[0.25em] text-white/70">
                A brand guests trust and return to
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {proofPoints.map((item) => (
                  <div key={item.label} className="rounded-[1.5rem] bg-white/10 p-5">
                    <div className="text-3xl font-semibold">{item.value}</div>
                    <div className="mt-2 text-sm leading-6 text-white/75">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <div className="text-sm uppercase tracking-[0.25em] text-stone-500">Who We Are</div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              Built by owners. Shaped by hospitality.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-stone-600">
            <p>
              The Neighborhood Hotel was created for travelers who want more than a standard hotel stay and for owners who believe great real estate deserves a more thoughtful operating model.
            </p>
            <p>
              We blend boutique hospitality, intentional design, and disciplined operations to create places that feel local, memorable, and built to last.
            </p>
          </div>
        </div>
      </section>

      <section id="uniques" className="border-y border-stone-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="max-w-3xl">
            <div className="text-sm uppercase tracking-[0.25em] text-stone-500">
              What Makes Us Different
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              A hybrid hospitality experience rooted in design, flexibility, and place.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {uniques.map((item) => (
              <div key={item.title} className="rounded-[2rem] border border-stone-200 bg-[#faf8f4] p-8 shadow-sm">
                <h3 className="text-2xl font-semibold tracking-tight text-stone-900">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-stone-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:items-center">
        <div>
          <div className="text-sm uppercase tracking-[0.25em] text-stone-500">Guest Experience</div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
            Hotel-quality standards. Residential-style stays.
          </h2>
          <p className="mt-6 text-lg leading-8 text-stone-600">
            Our properties are designed for the way people travel now: more flexibility, more space, more comfort, and fewer friction points. Full kitchens, thoughtful amenities, seamless digital access, and neighborhood-driven recommendations create a stay that feels both polished and personal.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <img
            src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80"
            alt="Neighborhood Hotel bedroom"
            className="h-72 w-full rounded-[2rem] object-cover shadow-sm"
          />
          <img
            src="https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80"
            alt="Neighborhood Hotel kitchen"
            className="h-72 w-full rounded-[2rem] object-cover shadow-sm sm:mt-12"
          />
        </div>
      </section>

      <section id="process" className="bg-[#e8dfd2]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="max-w-3xl">
            <div className="text-sm uppercase tracking-[0.25em] text-stone-500">Proven Process</div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              A proven process that turns first stays into repeat stays.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-5">
            {process.map((item) => (
              <div key={item.step} className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-stone-200">
                <div className="text-lg font-semibold text-stone-900">{item.step}</div>
                <p className="mt-4 text-sm leading-7 text-stone-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <div className="text-sm uppercase tracking-[0.25em] text-stone-500">Operating Platform</div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              A hospitality brand powered by a real operating platform.
            </h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-stone-600">
              Behind every Neighborhood Hotel stay is a disciplined operating model built to support consistency, guest satisfaction, and long-term performance. We bring together hospitality operations, revenue strategy, digital guest experience, local brand storytelling, and repeatable systems that help distinctive properties perform at a high level.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {platform.map((item) => (
                <div key={item} className="rounded-[1.5rem] border border-stone-200 bg-white px-5 py-4 text-sm font-medium text-stone-700 shadow-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-stone-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="max-w-3xl">
            <div className="text-sm uppercase tracking-[0.25em] text-stone-500">Portfolio</div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              Rooted in real neighborhoods.
            </h2>
            <p className="mt-6 text-lg leading-8 text-stone-600">
              Each Neighborhood Hotel is shaped by its setting, but connected by the same standards: thoughtful design, residential comfort, and a frictionless guest experience.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {properties.map((property) => (
              <div key={property.name} className="overflow-hidden rounded-[2rem] border border-stone-200 bg-[#faf8f4] shadow-sm">
                <img src={property.image} alt={property.name} className="h-56 w-full object-cover" />
                <div className="p-6">
                  <div className="text-sm uppercase tracking-[0.22em] text-stone-500">{property.region}</div>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight">{property.name}</h3>
                  <p className="mt-4 text-sm leading-7 text-stone-600">{property.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-stone-900">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-16 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div>
            <div className="text-sm uppercase tracking-[0.25em] text-stone-400">Partnerships</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Interested in whether TNH is the right fit for your building?
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-stone-300">
              We partner with owners who believe hospitality can be more thoughtful, more local, and more performance-minded. Start a conversation with our team to learn more about the brand, our operating model, and the types of properties we partner with.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <button className="rounded-full bg-white px-6 py-3 text-sm font-medium text-stone-900 transition hover:-translate-y-0.5">
              Start a Conversation
            </button>
            <button className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10">
              View Our Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
