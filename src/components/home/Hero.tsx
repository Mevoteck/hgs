export default function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 lg:py-28">

        {/* Contenu principal */}
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-gray-500">
            Immobilier & investissement
          </p>

          <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
            Investissez dans l'immobilier avec confiance.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Hounsou Group Sarl vous accompagne dans vos projets immobiliers
            avec des solutions simples, sécurisées et accessibles.
          </p>

          {/* Boutons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#biens"
              className="rounded-lg bg-black px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-gray-800"
            >
              Découvrir nos biens
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-gray-300 px-6 py-3 text-center text-sm font-semibold text-gray-900 transition hover:bg-gray-100"
            >
              Nous contacter
            </a>
          </div>
        </div>

        {/* Visuel temporaire */}
        <div className="flex min-h-[350px] items-center justify-center rounded-2xl bg-gray-100">
          <p className="text-center text-gray-400">
            Espace réservé à l'image immobilière
          </p>
        </div>

      </div>
    </section>
  );
}