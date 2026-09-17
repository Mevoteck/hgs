import HeroSlider from "@/components/home/HeroSlider";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FAFAF8]">
      {/* Élément décoratif */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#173F35]/5 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-12 md:grid-cols-2 lg:gap-20 lg:py-16">
        {/* Contenu */}
        <div className="relative z-10 max-w-2xl">
          {/* Badge */}
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#173F35]/10 bg-white px-4 py-2 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#C8A96B]" />

            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#173F35]">
              Votre partenaire immobilier au Bénin
            </span>
          </div>

          {/* Titre */}
          <h1 className="max-w-2xl text-4xl font-bold leading-[1.08] tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
            Donnez de la valeur à{" "}
            <span className="text-[#173F35]">
              vos projets immobiliers.
            </span>
          </h1>

          {/* Accent */}
          <div className="mt-6 h-1 w-16 rounded-full bg-[#C8A96B]" />

          {/* Description */}
          <p className="mt-7 max-w-xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            Terrains, parcelles, maisons et projets immobiliers : Hounsou Group
            Sarl vous accompagne avec des solutions fiables, transparentes et
            adaptées à vos ambitions.
          </p>

          {/* Boutons */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#biens"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#173F35] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#173F35]/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#285C4D] hover:shadow-xl"
            >
              Découvrir nos biens
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl border border-[#173F35]/20 bg-white px-6 py-3.5 text-sm font-semibold text-[#173F35] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#173F35] hover:bg-[#173F35]/5"
            >
              Parler à un conseiller
            </a>
          </div>

          {/* Réassurance */}
          <div className="mt-10 grid max-w-xl grid-cols-3 border-t border-gray-200 pt-6">
            <div className="pr-4">
              <p className="text-sm font-bold text-[#173F35]">Confiance</p>
              <p className="mt-1 text-xs leading-5 text-gray-500">
                Une relation basée sur la transparence.
              </p>
            </div>

            <div className="border-l border-gray-200 px-4">
              <p className="text-sm font-bold text-[#173F35]">Sécurité</p>
              <p className="mt-1 text-xs leading-5 text-gray-500">
                Un accompagnement à chaque étape.
              </p>
            </div>

            <div className="border-l border-gray-200 pl-4">
              <p className="text-sm font-bold text-[#173F35]">Excellence</p>
              <p className="mt-1 text-xs leading-5 text-gray-500">
                Des solutions pensées pour vos projets.
              </p>
            </div>
          </div>
        </div>

        {/* Slider */}
        <div className="relative">
          <HeroSlider />
        </div>
      </div>

      {/* Bandeau activités */}
      <div className="border-t border-[#E8E6E1] bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-6 py-5 text-xs font-semibold uppercase tracking-[0.14em] text-gray-500 sm:justify-between">
          <span className="transition-colors hover:text-[#173F35]">
            Terrains & parcelles
          </span>

          <span className="transition-colors hover:text-[#173F35]">
            Maisons
          </span>

          <span className="transition-colors hover:text-[#173F35]">
            Promotion immobilière
          </span>

          <span className="transition-colors hover:text-[#173F35]">
            Gestion immobilière
          </span>

          <span className="transition-colors hover:text-[#173F35]">
            Conseil immobilier
          </span>
        </div>
      </div>
    </section>
  );
}