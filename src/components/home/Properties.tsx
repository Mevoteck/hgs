const properties = [
  {
    category: "Terrains & parcelles",
    title: "Des opportunités foncières pour vos projets",
    description:
      "Des terrains et parcelles sélectionnés pour accompagner vos projets résidentiels, professionnels ou d’investissement.",
    image: "/images/hero-terrain.jpg",
    href: "#contact",
  },
  {
    category: "Maisons & propriétés",
    title: "Des propriétés adaptées à vos ambitions",
    description:
      "Découvrez des maisons et propriétés répondant à différents besoins, projets et budgets.",
    image: "/images/hero-maison.jpg",
    href: "#contact",
  },
  {
    category: "Promotion immobilière",
    title: "Des projets pensés pour créer de la valeur",
    description:
      "Explorez nos projets et opportunités de promotion immobilière conçus avec une vision durable.",
    image: "/images/hero-promotion.jpg",
    href: "#contact",
  },
];

function Arrow() {
  return (
    <svg
      className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h13" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function PropertyIcon({ index }: { index: number }) {
  const icons = [
    <svg key="land" viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path d="M4 19h16M5 16l5-5 3 3 6-7M5 16v3M10 11V7M13 14v5M19 7v12" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
    <svg key="home" viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path d="m3 10 9-7 9 7M5 9v11h14V9M9 20v-6h6v6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
    <svg key="building" viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path d="M4 21V7l8-4 8 4v14M9 21v-6h6v6M8 9h1M15 9h1M8 12h1M15 12h1" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
  ];

  return icons[index];
}

export default function Properties() {
  return (
    <section
      id="biens"
      className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-16"
    >
      <div
        className="pointer-events-none absolute right-0 top-0 h-80 w-80 translate-x-1/3 -translate-y-1/3 rounded-full bg-[#35b8d8]/[0.06] blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* En-tête */}
       <header className="mx-auto max-w-3xl text-center">
  <div className="mb-5 flex items-center justify-center gap-3">
    <span className="h-px w-8 bg-[#35b8d8]" />

    <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#35b8d8]">
      Nos biens
    </span>

    <span className="h-px w-8 bg-[#35b8d8]" />
  </div>

  <h2 className="text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] text-[#07171b] sm:text-5xl lg:text-6xl">
    Des opportunités immobilières
    <span className="text-[#35b8d8]"> pour vos projets.</span>
  </h2>

  <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#526167] sm:text-lg sm:leading-8">
    Terrains, parcelles, maisons et projets immobiliers : découvrez les
    différentes opportunités proposées par Hounsou Group Sarl.
  </p>
</header>

        {/* Cartes */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {properties.map((property, index) => (
            <article
              key={property.category}
              className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-[#dce7ea] bg-white shadow-[0_10px_35px_rgba(7,23,27,0.05)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(7,23,27,0.12)]"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#edf7f9]">
                <img
                  src={property.image}
                  alt={property.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#07171b]/70 via-transparent to-transparent opacity-80" />

                <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-white/95 px-3.5 py-2 text-xs font-bold text-[#07171b] shadow-lg backdrop-blur-sm">
                  <span className="text-[#35b8d8]">
                    <PropertyIcon index={index} />
                  </span>
                  {property.category}
                </div>

                <span className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#35b8d8] text-[#07171b] shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <Arrow />
                </span>
              </div>

              {/* Contenu */}
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <div className="mb-4 flex items-center gap-3">
                  <span className="text-[11px] font-extrabold tracking-[0.18em] text-[#35b8d8]">
                    0{index + 1}
                  </span>
                  <span className="h-px flex-1 bg-[#dce7ea]" />
                </div>

                <h3 className="text-2xl font-extrabold leading-tight tracking-[-0.02em] text-[#07171b] transition-colors duration-300 group-hover:text-[#35b8d8]">
                  {property.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-[#617077]">
                  {property.description}
                </p>

                <a
                  href={property.href}
                  className="mt-auto inline-flex items-center gap-3 pt-7 text-sm font-bold text-[#07171b] transition-colors duration-300 hover:text-[#35b8d8]"
                >
                  Découvrir
                  <span className="text-[#35b8d8]">
                    <Arrow />
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Bandeau inférieur */}
        <div className="mt-6 overflow-hidden rounded-[28px] bg-[#07171b] px-6 py-8 text-white sm:px-8 lg:px-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#35b8d8]">
                Un projet en tête ?
              </p>
              <h3 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
                Parlons de votre projet immobilier.
              </h3>
            </div>

            <a
              href="#contact"
              className="group inline-flex w-fit items-center gap-4 rounded-xl bg-[#35b8d8] px-5 py-3.5 text-sm font-bold text-[#07171b] transition-all duration-300 hover:-translate-y-1 hover:bg-white"
            >
              Être accompagné
              <Arrow />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}