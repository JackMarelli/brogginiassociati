import { useState } from "react";
import BaseLayout from "../../layouts/BaseLayout/BaseLayout";
import professionistiData from "../../data/professionisti.json";
import { Link } from "react-router-dom";

export default function Professionisti() {
  const { soci, associati } = professionistiData;

  return (
    <BaseLayout>
      {/* Hero Section */}
      <section className="w-full h-[80vh] relative bg-gray-900">
        <img
          src="/assets/images/prof_fold.png"
          alt="Studio meeting"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute bottom-16 left-16 transform">
          <h1 className="text-white text-6xl font-medium mb-6">
            I professionisti
          </h1>
          <div className="max-w-2xl">
            <p className="text-white text-lg">
              Guidiamo i nostri clienti verso la soluzione migliore con
              flessibilità ed efficienza, grazie a una solida esperienza e a
              competenze tecniche specifiche, sempre aggiornate.
            </p>
            <p className="text-white text-lg mt-4">
              Il nostro team è in grado di affrontare e gestire problematiche
              altamente complesse e di farsi carico di ogni questione che
              preoccupa chi fa impresa.
            </p>
          </div>
        </div>
      </section>

      {/* Soci Section */}
      <section className="py-16 px-8 md:px-16">
        <h2 className="text-6xl font-medium text-center mb-16">Soci</h2>
        <div className="flex flex-row flex-wrap justify-center gap-8">
          {soci.map((socio) => (
            <Link
              to={`/professionisti/${socio.slug}`}
              key={socio.id}
              className="flex flex-col w-80 group hover:opacity-90 transition-opacity"
            >
              <div className="w-full aspect-square overflow-hidden rounded-lg bg-gray-200">
                <img
                  src={socio.image}
                  alt={socio.name}
                  className="object-cover w-autogroup-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-medium mt-4">{socio.name}</h3>
              <p className="text-gray-600 mt-1">{socio.role}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Associati Section */}
      <section className="py-16 px-8 md:px-16 bg-white">
        <h2 className="text-6xl font-medium text-center mb-16">Associati</h2>
        <div className="flex flex-row flex-wrap justify-center gap-8">
          {associati.map((associato) => (
            <Link
              to={`/professionisti/${associato.slug}`}
              key={associato.id}
              className="flex flex-col w-80 group hover:opacity-90 transition-opacity"
            >
              <div className="w-full aspect-square overflow-hidden rounded-lg bg-gray-200">
                <img
                  src={associato.image}
                  alt={associato.name}
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-medium mt-4">{associato.name}</h3>
              <p className="text-gray-600 mt-1">{associato.role}</p>
            </Link>
          ))}
        </div>
      </section>
    </BaseLayout>
  );
}
