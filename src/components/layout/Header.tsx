export default function Header() {
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo / Nom de l'entreprise */}
        <div>
          <h1 className="text-xl font-bold text-gray-900">
            Hounsou Group Sarl
          </h1>
          <p className="text-xs text-gray-500">
            Immobilier & investissement
          </p>
        </div>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#"
            className="text-sm font-medium text-gray-700 hover:text-black"
          >
            Accueil
          </a>

          <a
            href="#"
            className="text-sm font-medium text-gray-700 hover:text-black"
          >
            Nos services
          </a>

          <a
            href="#"
            className="text-sm font-medium text-gray-700 hover:text-black"
          >
            Nos biens
          </a>

          <a
            href="#"
            className="text-sm font-medium text-gray-700 hover:text-black"
          >
            À propos
          </a>

          <a
            href="#"
            className="text-sm font-medium text-gray-700 hover:text-black"
          >
            Contact
          </a>
        </nav>

        {/* Bouton */}
        <a
          href="#contact"
          className="hidden rounded-lg bg-black px-5 py-3 text-sm font-medium text-white transition hover:bg-gray-800 md:block"
        >
          Nous contacter
        </a>
      </div>
    </header>
  );
}