const services = [
  {
    number: "01",
    title: "Terrains & parcelles",
    description:
      "Trouvez des terrains et parcelles adaptés à vos projets résidentiels, professionnels ou d’investissement.",
    href: "#biens",
    icon: "land",
  },
  {
    number: "02",
    title: "Maisons & propriétés",
    description:
      "Découvrez des maisons et propriétés sélectionnées pour répondre à différents projets et budgets.",
    href: "#biens",
    icon: "home",
  },
  {
    number: "03",
    title: "Promotion immobilière",
    description:
      "Des projets immobiliers pensés pour créer de la valeur et répondre aux besoins d’un marché en évolution.",
    href: "#biens",
    icon: "building",
  },
  {
    number: "04",
    title: "Gestion immobilière",
    description:
      "Confiez-nous la gestion de vos maisons locatives, parcelles et autres biens afin d’en assurer le suivi au quotidien.",
    href: "#contact",
    icon: "management",
  },
  {
    number: "05",
    title: "Conseil immobilier",
    description:
      "Bénéficiez d’un accompagnement pour prendre des décisions immobilières plus éclairées et adaptées à vos objectifs.",
    href: "#contact",
    icon: "advisor",
  },
  {
    number: "06",
    title: "Accompagnement administratif",
    description:
      "Nous vous accompagnons dans les démarches et le suivi administratif liés à vos opérations immobilières.",
    href: "#contact",
    icon: "document",
  },
];

const commitments = [
  {
    title: "Confiance & transparence",
    description: "Une relation basée sur l’honnêteté et la clarté.",
    icon: "shield",
  },
  {
    title: "Accompagnement personnalisé",
    description: "Un interlocuteur dédié à chaque étape de votre projet.",
    icon: "users",
  },
  {
    title: "Sécurité juridique",
    description: "Des opérations sécurisées et conformes à la réglementation.",
    icon: "check",
  },
  {
    title: "Performance & valeur",
    description: "Des solutions qui valorisent durablement votre patrimoine.",
    icon: "chart",
  },
];

function Icon({
  name,
  className = "h-6 w-6",
}: {
  name: string;
  className?: string;
}) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (name) {
    case "land":
      return (
        <svg {...common}>
          <path d="M4 19h16" />
          <path d="m5 16 5-5 3 3 6-7" />
          <path d="M5 16v3M10 11V7M13 14v5M19 7v12" />
          <path d="M4 5h5v5H4z" />
        </svg>
      );
    case "home":
      return (
        <svg {...common}>
          <path d="m3 10 9-7 9 7" />
          <path d="M5 9v11h14V9" />
          <path d="M9 20v-6h6v6" />
        </svg>
      );
    case "building":
      return (
        <svg {...common}>
          <path d="M4 21V7l8-4 8 4v14" />
          <path d="M9 21v-6h6v6" />
          <path d="M8 9h1M15 9h1M8 12h1M15 12h1" />
        </svg>
      );
    case "management":
      return (
        <svg {...common}>
          <path d="M4 21V9l8-6 8 6v12" />
          <path d="M8 21v-6h8v6" />
          <path d="M16.5 14.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
          <path d="m16.5 16 1 1-1 1" />
        </svg>
      );
    case "advisor":
      return (
        <svg {...common}>
          <circle cx="12" cy="7" r="3" />
          <path d="M5 21a7 7 0 0 1 14 0" />
          <path d="M18 5.5h2.5M19.25 4.25v2.5" />
        </svg>
      );
    case "document":
      return (
        <svg {...common}>
          <path d="M7 3h8l4 4v14H7z" />
          <path d="M15 3v5h4M10 13h6M10 17h6M10 9h2" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 3 20 6v5c0 5-3.3 8.6-8 10-4.7-1.4-8-5-8-10V6z" />
          <path d="m8.5 12 2.2 2.2 4.8-4.8" />
        </svg>
      );
    case "users":
      return (
        <svg {...common}>
          <circle cx="9" cy="8" r="3" />
          <circle cx="17" cy="9" r="2.5" />
          <path d="M3.5 20a5.5 5.5 0 0 1 11 0M15 14a5 5 0 0 1 5.5 5" />
        </svg>
      );
    case "check":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="m8 12 2.5 2.5L16 9" />
        </svg>
      );
    case "chart":
      return (
        <svg {...common}>
          <path d="M5 20V10M12 20V5M19 20v-8" />
          <path d="M3 20h18" />
        </svg>
      );
    default:
      return null;
  }
}

function Arrow() {
  return (
    <svg
      className="h-5 w-5"
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

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#f8fbfc] py-16 sm:py-16 lg:py-20"
    >
      {/* Décor discret inspiré du bleu du logo Hounsou Group Sarl */}
      <div
        className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#35b8d8]/[0.07] blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-[#35b8d8]/[0.06] blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* En-tête */}
        <header className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-3">
            <span className="h-px w-8 bg-[#35b8d8]" />
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-[#35b8d8]">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#35b8d8]/10">
                <Icon name="building" className="h-4 w-4" />
              </span>
              Nos services
            </span>
            <span className="h-px w-8 bg-[#35b8d8]" />
          </div>

          <h2 className="text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] text-[#07171b] sm:text-5xl lg:text-6xl">
            Des solutions complètes pour{" "}
            <span className="text-[#35b8d8]">vos projets immobiliers.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#526167] sm:text-lg sm:leading-8">
            Que vous souhaitiez investir dans l’immobilier ou confier la
            gestion d’un bien que vous possédez déjà, nous sommes à vos côtés
            à chaque étape.
          </p>
        </header>

        {/* Deux grandes orientations */}
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Investisseur */}
          <article className="group relative flex min-h-[390px] overflow-hidden rounded-[28px] bg-[#07171b] shadow-[0_20px_60px_rgba(7,23,27,0.12)]">
            <div className="absolute inset-0">
              <img
                src="/images/hero-maison.jpg"
                alt=""
                className="h-full w-full object-cover object-center opacity-75 transition duration-700 ease-out group-hover:scale-105 group-hover:opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#07171b] via-[#07171b]/85 to-[#07171b]/20" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07171b]/80 via-transparent to-transparent" />
            </div>

            <div className="relative flex min-h-[390px] w-full max-w-xl flex-col p-7 text-white sm:p-9 lg:p-10">
              <div className="flex-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#35b8d8] text-[#07171b] shadow-lg shadow-[#35b8d8]/20">
                  <Icon name="chart" className="h-6 w-6" />
                </div>

                <p className="mt-7 text-[11px] font-bold uppercase tracking-[0.22em] text-[#35b8d8]">
                  Vous souhaitez investir ?
                </p>

                <h3 className="mt-3 max-w-md text-3xl font-extrabold leading-tight tracking-[-0.02em] sm:text-4xl">
                  Construisez votre
                  <br />
                  projet immobilier.
                </h3>

                <p className="mt-5 max-w-md text-sm leading-6 text-white/75 sm:text-base">
                  Terrains, parcelles, maisons et projets immobiliers : nous
                  vous aidons à identifier les opportunités adaptées à vos
                  objectifs.
                </p>
              </div>

              <a
                href="#biens"
                className="mt-auto inline-flex w-fit items-center gap-5 rounded-xl bg-white px-5 py-3.5 text-sm font-bold text-[#07171b] shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#35b8d8] hover:shadow-[#35b8d8]/20"
              >
                Découvrir nos biens
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  <Arrow />
                </span>
              </a>
            </div>
          </article>

          {/* Propriétaire */}
          <article className="group relative flex min-h-[390px] overflow-hidden rounded-[28px] border border-[#dce7ea] bg-[#edf7f9] shadow-[0_20px_60px_rgba(7,23,27,0.07)]">
            <div className="absolute inset-0">
              <img
                src="/images/hero-promotion.jpg"
                alt=""
                className="h-full w-full object-cover object-right opacity-45 transition duration-700 ease-out group-hover:scale-105 group-hover:opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#edf7f9] via-[#edf7f9]/90 to-[#edf7f9]/25" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#edf7f9]/80 via-transparent to-transparent" />
            </div>

            <div className="relative flex min-h-[390px] w-full max-w-xl flex-col p-7 sm:p-9 lg:p-10">
              <div className="flex-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#07171b] text-[#35b8d8] shadow-lg shadow-black/10">
                  <Icon name="management" className="h-6 w-6" />
                </div>

                <p className="mt-7 text-[11px] font-bold uppercase tracking-[0.22em] text-[#35b8d8]">
                  Vous êtes propriétaire ?
                </p>

                <h3 className="mt-3 max-w-md text-3xl font-extrabold leading-tight tracking-[-0.02em] text-[#07171b] sm:text-4xl">
                  Confiez-nous la gestion
                  <br />
                  de votre bien.
                </h3>

                <p className="mt-5 max-w-md text-sm leading-6 text-[#526167] sm:text-base">
                  Maison locative, parcelle ou autre bien immobilier : nous
                  assurons le suivi, la valorisation et la gestion selon les
                  modalités de votre mandat.
                </p>
              </div>

              <a
                href="#contact"
                className="mt-auto inline-flex w-fit items-center gap-5 rounded-xl bg-[#07171b] px-5 py-3.5 text-sm font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#35b8d8] hover:text-[#07171b] hover:shadow-lg hover:shadow-[#35b8d8]/20"
              >
                Confier mon bien
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  <Arrow />
                </span>
              </a>
            </div>
          </article>
        </div>

        {/* Services détaillés */}
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <a
              key={service.number}
              href={service.href}
              className="group relative flex min-h-[190px] items-center gap-5 overflow-hidden rounded-2xl border border-[#dce7ea] bg-white p-6 shadow-[0_8px_30px_rgba(7,23,27,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#35b8d8]/50 hover:shadow-[0_18px_45px_rgba(7,23,27,0.09)] sm:p-7"
            >
              <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-[#35b8d8]/[0.06] transition-transform duration-500 group-hover:scale-[2]" />

              <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#edf7f9] text-[#07171b] transition-all duration-300 group-hover:bg-[#35b8d8] group-hover:text-[#07171b]">
                <Icon name={service.icon} className="h-7 w-7" />
              </div>

              <div className="relative min-w-0 flex-1">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs font-extrabold tracking-[0.15em] text-[#35b8d8]">
                    {service.number}
                  </span>
                  <span className="text-[#b7c5c9] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#35b8d8]">
                    <Arrow />
                  </span>
                </div>

                <h3 className="mt-2 text-lg font-extrabold text-[#07171b] transition-colors duration-300 group-hover:text-[#35b8d8]">
                  {service.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#617077]">
                  {service.description}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Engagements */}
        <div className="mt-6 grid gap-0 overflow-hidden rounded-2xl border border-[#dce7ea] bg-white shadow-[0_10px_35px_rgba(7,23,27,0.05)] sm:grid-cols-2 lg:grid-cols-4">
          {commitments.map((item, index) => (
            <div
              key={item.title}
              className={`group flex items-center gap-4 p-5 sm:p-6 ${
                index !== 0 ? "border-t border-[#dce7ea] sm:border-t-0 sm:border-l" : ""
              } ${index === 2 ? "lg:border-l" : ""}`}
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#07171b] text-[#35b8d8] transition-transform duration-300 group-hover:scale-105">
                <Icon name={item.icon} className="h-5 w-5" />
              </div>

              <div>
                <h4 className="text-sm font-extrabold text-[#07171b]">
                  {item.title}
                </h4>
                <p className="mt-1 text-xs leading-5 text-[#68777c]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}