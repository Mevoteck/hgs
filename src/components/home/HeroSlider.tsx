"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    image: "/images/hero-terrain.jpg",
    alt: "Terrain immobilier",
    label: "Terrains & parcelles",
  },
  {
    image: "/images/hero-maison.jpg",
    alt: "Maison moderne",
    label: "Maisons & propriétés",
  },
  {
    image: "/images/hero-promotion.jpg",
    alt: "Projet immobilier",
    label: "Promotion immobilière",
  },
  {
    image: "/images/hero-promotion2.jpg",
    alt: "Développement immobilier",
    label: "Gestion immobilière",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((current) => (current + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const previousSlide = () => {
    setCurrentSlide(
      (current) => (current - 1 + slides.length) % slides.length,
    );
  };

  const nextSlide = () => {
    setCurrentSlide((current) => (current + 1) % slides.length);
  };

  return (
    <div className="group relative h-[350px] overflow-hidden rounded-3xl shadow-2xl shadow-gray-200/60 md:h-[500px]">
      {/* Images */}
      {slides.map((slide, index) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide
              ? "z-10 opacity-100"
              : "pointer-events-none z-0 opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            priority={index === 0}
            sizes="(max-width: 768px) 100vw, 50vw"
            className={`object-cover transition-transform duration-[5000ms] ${
              index === currentSlide ? "scale-105" : "scale-100"
            }`}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
        </div>
      ))}

      {/* Informations sur l'image */}
      <div className="absolute bottom-8 left-7 z-20">
        <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-gray-900 shadow-sm backdrop-blur-sm">
          {slides[currentSlide].label}
        </span>
      </div>

      {/* Flèche précédente */}
      <button
        type="button"
        onClick={previousSlide}
        aria-label="Image précédente"
        className="absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/20 text-xl text-white opacity-0 backdrop-blur-md transition-all duration-300 hover:bg-black/40 group-hover:opacity-100"
      >
        ←
      </button>

      {/* Flèche suivante */}
      <button
        type="button"
        onClick={nextSlide}
        aria-label="Image suivante"
        className="absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/20 text-xl text-white opacity-0 backdrop-blur-md transition-all duration-300 hover:bg-black/40 group-hover:opacity-100"
      >
        →
      </button>

      {/* Indicateurs */}
      <div className="absolute bottom-9 right-7 z-20 flex items-center gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.image}
            type="button"
            onClick={() => setCurrentSlide(index)}
            aria-label={`Afficher ${slide.label}`}
            aria-current={index === currentSlide ? "true" : undefined}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-8 bg-white"
                : "w-2 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}