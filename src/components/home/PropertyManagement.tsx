const managementPoints = [
  {
    number: "01",
    title: "Gestion locative",
    description:
      "Nous assurons le suivi de vos maisons locatives et vous accompagnons dans la gestion quotidienne de vos biens.",
  },
  {
    number: "02",
    title: "Suivi du bien",
    description:
      "Nous veillons au bon suivi de votre bien et coordonnons les actions nécessaires selon les modalités de votre mandat.",
  },
  {
    number: "03",
    title: "Suivi administratif",
    description:
      "Nous vous accompagnons dans les démarches et le suivi des documents liés à la gestion de votre patrimoine immobilier.",
  },
];

export default function PropertyManagement() {
  return (
    <section
      id="gestion"
      className="relative overflow-hidden bg-[#071114] py-20 sm:py-24 lg:py-28"
    >
      {/* Éléments décoratifs */}
      <div
        className="pointer-events-none absolute -left-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[#35B8D8]/10 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#35B8D8]/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* En-tête centré */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#35B8D8]" />

            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#35B8D8]">
              Gestion immobilière
            </span>

            <span className="h-px w-10 bg-[#35B8D8]" />
          </div>

          <h2 className="mt-5 text-3xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-5xl">
            Vous possédez un bien ?
            <span className="block text-[#35B8D8]">
              Confiez-nous sa gestion.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
            Maison locative, parcelle ou autre bien immobilier : Hounsou
            Group Sarl vous accompagne dans le suivi, la valorisation et la
            gestion de votre patrimoine selon les modalités de votre mandat.
          </p>
        </div>

        {/* Image + prestations */}
        <div className="mt-12 flex flex-col gap-10 lg:flex-row lg:items-stretch lg:gap-14">

          {/* Image */}
          {/* Image */}
            <div className="relative self-start lg:w-[48%]">
            <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#0D2025] shadow-2xl shadow-black/30">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src="/images/hero-maison.jpg"
                  alt="Maison immobilière gérée par Hounsou Group Sarl"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.04]"
                />

                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#071114]/85 via-[#071114]/15 to-transparent"
                  aria-hidden="true"
                />

                {/* Carte sur l'image */}
                <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6">
                  <div className="rounded-2xl border border-white/15 bg-[#071114]/80 p-5 shadow-xl backdrop-blur-md sm:p-6">
                    <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#35B8D8]">
                      Gestion immobilière
                    </p>

                    <p className="mt-2 text-lg font-bold text-white sm:text-xl">
                      Votre bien, notre engagement.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Badge propriétaire */}
            <div className="absolute -bottom-6 right-4 max-w-[240px] rounded-2xl border border-[#35B8D8]/20 bg-white px-5 py-4 shadow-2xl shadow-black/20 sm:right-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-500">
                Pour les propriétaires
              </p>

              <p className="mt-1 text-sm font-extrabold text-[#071114]">
                Confiez-nous votre bien
              </p>
            </div>
          </div>

          {/* Prestations + boutons */}
          <div className="flex flex-col lg:w-[52%]">

            {/* Prestations */}
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025]">
              {managementPoints.map((point, index) => (
                <div
                  key={point.number}
                  className={`group flex min-h-[96px] gap-5 px-5 py-5 transition-colors duration-300 hover:bg-white/[0.045] sm:px-6 ${
                    index !== managementPoints.length - 1
                      ? "border-b border-white/10"
                      : ""
                  }`}
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#35B8D8]/25 bg-[#35B8D8]/10 text-[10px] font-extrabold tracking-wider text-[#35B8D8]">
                    {point.number}
                  </span>

                  <div className="min-w-0">
                    <h3 className="text-base font-bold text-white transition-colors duration-300 group-hover:text-[#35B8D8]">
                      {point.title}
                    </h3>

                    <p className="mt-1.5 max-w-xl text-sm leading-6 text-white/55">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Boutons en bas */}
            <div className="mt-auto pt-8">
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="group inline-flex min-h-12 flex-1 items-center justify-center gap-3 rounded-xl bg-[#35B8D8] px-6 py-3.5 text-sm font-bold text-[#071114] shadow-lg shadow-[#35B8D8]/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-xl"
                >
                  Confier mon bien
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>

                <a
                  href="#contact"
                  className="inline-flex min-h-12 flex-1 items-center justify-center rounded-xl border border-white/15 bg-white/[0.02] px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-[#35B8D8]/50 hover:bg-[#35B8D8]/10"
                >
                  Parler à un conseiller
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}