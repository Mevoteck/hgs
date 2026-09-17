const contactDetails = [
  { label: "Téléphone", value: "+229 01 50 00 02 23", href: "tel:+2290150000223" },
  { label: "E-mail", value: "hounsougroupsarl@gmail.com", href: "mailto:hounsougroupsarl@gmail.com" },
  { label: "Localisation", value: "Abomey-Calavi, Bénin", href: "#" },
];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#F8FAFA] py-20 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full bg-[#35B8D8]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-[#35B8D8]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-8 bg-[#35B8D8]" />
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#071114]">Contact</span>
            <span className="h-px w-8 bg-[#35B8D8]" />
          </div>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-[#071114] sm:text-4xl lg:text-5xl">
            Parlons de votre
            <span className="block text-[#35B8D8]">projet immobilier.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            Vous souhaitez acheter, vendre, investir ou confier la gestion d&apos;un bien ?
            Notre équipe est à votre écoute pour vous accompagner.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8">
          <div className="rounded-[28px] bg-[#071114] p-7 text-white shadow-xl shadow-[#071114]/10 sm:p-9">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#35B8D8]">
              Hounsou Group Sarl
            </p>

            <h3 className="mt-4 max-w-md text-2xl font-extrabold leading-tight sm:text-3xl">
              Un interlocuteur pour chacun de vos besoins immobiliers.
            </h3>

            <p className="mt-5 max-w-md text-sm leading-7 text-white/65 sm:text-base">
              Notre équipe vous accompagne avec une approche fondée sur la confiance,
              la transparence et le professionnalisme.
            </p>

            <div className="mt-8 space-y-3">
              {contactDetails.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group flex min-h-[68px] items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#35B8D8]/30 hover:bg-[#35B8D8]/10"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#35B8D8]/10 text-[#35B8D8]">
                    {item.label === "Téléphone" ? "☎" : item.label === "E-mail" ? "@" : "⌖"}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-white/40">
                      {item.label}
                    </span>
                    <span className="mt-1 block truncate text-sm font-semibold text-white transition-colors group-hover:text-[#35B8D8]">
                      {item.value}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-[#DDE5E7] bg-white p-7 shadow-sm sm:p-9">
            <h3 className="text-2xl font-extrabold text-[#071114]">Envoyez-nous un message</h3>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              Décrivez-nous votre besoin et nous vous répondrons dans les meilleurs délais.
            </p>

            <form className="mt-7 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-semibold text-[#071114]">
                    Nom complet
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Votre nom"
                    className="h-12 w-full rounded-xl border border-gray-200 bg-[#FAFCFC] px-4 text-sm text-[#071114] outline-none transition-all placeholder:text-gray-400 focus:border-[#35B8D8] focus:ring-4 focus:ring-[#35B8D8]/10"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-semibold text-[#071114]">
                    E-mail
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="vous@exemple.com"
                    className="h-12 w-full rounded-xl border border-gray-200 bg-[#FAFCFC] px-4 text-sm text-[#071114] outline-none transition-all placeholder:text-gray-400 focus:border-[#35B8D8] focus:ring-4 focus:ring-[#35B8D8]/10"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="mb-2 block text-sm font-semibold text-[#071114]">
                  Objet
                </label>
                <select
                  id="subject"
                  name="subject"
                  defaultValue=""
                  className="h-12 w-full rounded-xl border border-gray-200 bg-[#FAFCFC] px-4 text-sm text-[#071114] outline-none transition-all focus:border-[#35B8D8] focus:ring-4 focus:ring-[#35B8D8]/10"
                >
                  <option value="" disabled>Sélectionnez votre besoin</option>
                  <option value="achat">Achat d&apos;un bien</option>
                  <option value="vente">Vente d&apos;un bien</option>
                  <option value="gestion">Gestion immobilière</option>
                  <option value="conseil">Conseil immobilier</option>
                  <option value="autre">Autre demande</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-semibold text-[#071114]">
                  Votre message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Expliquez-nous votre projet..."
                  className="w-full resize-none rounded-xl border border-gray-200 bg-[#FAFCFC] px-4 py-3 text-sm leading-6 text-[#071114] outline-none transition-all placeholder:text-gray-400 focus:border-[#35B8D8] focus:ring-4 focus:ring-[#35B8D8]/10"
                />
              </div>

              <button
                type="submit"
                className="group inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-xl bg-[#071114] px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#35B8D8] hover:text-[#071114] hover:shadow-lg hover:shadow-[#35B8D8]/20 sm:w-auto"
              >
                Envoyer ma demande
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}