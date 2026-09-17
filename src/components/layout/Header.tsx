export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#E8E6E1]/80 bg-[#FAFAF8]/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <a href="#" className="group flex items-center gap-3">
          <div className="relative h-12 w-12 overflow-hidden rounded-xl border border-[#E8E6E1] bg-white shadow-sm">
            <img
              src="/images/logo-hounsou-group.jpg"
              alt="Hounsou Group Sarl"
              className="h-full w-full object-contain p-1 transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          <div className="hidden sm:block">
            <p className="text-base font-bold tracking-tight text-[#173F35]">
              Hounsou Group Sarl
            </p>

            <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-gray-500">
              Immobilier & investissement
            </p>
          </div>
        </a>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          <a
            href="#"
            className="group relative py-2 text-sm font-medium text-gray-700 transition-colors duration-300 hover:text-[#173F35]"
          >
            Accueil
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#C8A96B] transition-all duration-300 group-hover:w-full" />
          </a>

          <a
            href="#services"
            className="group relative py-2 text-sm font-medium text-gray-700 transition-colors duration-300 hover:text-[#173F35]"
          >
            Nos services
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#C8A96B] transition-all duration-300 group-hover:w-full" />
          </a>

          <a
            href="#biens"
            className="group relative py-2 text-sm font-medium text-gray-700 transition-colors duration-300 hover:text-[#173F35]"
          >
            Nos biens
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#C8A96B] transition-all duration-300 group-hover:w-full" />
          </a>

          <a
            href="#a-propos"
            className="group relative py-2 text-sm font-medium text-gray-700 transition-colors duration-300 hover:text-[#173F35]"
          >
            À propos
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#C8A96B] transition-all duration-300 group-hover:w-full" />
          </a>
        </nav>

        {/* Bouton contact */}
        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-xl bg-[#173F35] px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#285C4D] hover:shadow-lg hover:shadow-[#173F35]/20 md:flex"
        >
          Nous contacter
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>

        {/* Menu mobile */}
        <button
          type="button"
          aria-label="Ouvrir le menu"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#E8E6E1] bg-white text-[#173F35] transition-colors hover:bg-[#F1F4F2] lg:hidden"
        >
          <span className="text-lg">☰</span>
        </button>
      </div>
    </header>
  );
}