import { useState } from "react";
import BaseLayout from "../../layouts/BaseLayout/BaseLayout";
import Button from "../../components/Button/Button";
import ValueCard from "../../components/ValueCard/ValueCard";

export default function Studio() {
  const values = [
    {
      name: "Fiducia",
      description: "Ci impegniamo a instaurare relazioni sincere, rapporti solidi, duraturi e leali attraverso la presenza, l'impegno e l'ascolto.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      name: "Etica",
      description: "Ci impegniamo a instaurare relazioni sincere, rapporti solidi, duraturi e leali attraverso la presenza, l'impegno e l'ascolto.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
    },
    {
      name: "Efficienza",
      description: "Ci impegniamo a instaurare relazioni sincere, rapporti solidi, duraturi e leali attraverso la presenza, l'impegno e l'ascolto.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
    {
      name: "Comunità",
      description: "Ci impegniamo a instaurare relazioni sincere, rapporti solidi, duraturi e leali attraverso la presenza, l'impegno e l'ascolto.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      name: "Innovazione",
      description: "Ci impegniamo a instaurare relazioni sincere, rapporti solidi, duraturi e leali attraverso la presenza, l'impegno e l'ascolto.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
  ];

  return (
    <BaseLayout>
      {/* Hero Section */}
      <section className="w-full h-fit relative">
        <img
          src="/assets/images/studio_fold.png"
          alt="Studio office"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-end text-center px-4 py-20">
          <h1 className="text-white text-5xl md:text-7xl xl:text-7xl font-medium mb-12">
            Una tradizione<br />che si rinnova
          </h1>
          <p className="text-white text-lg md:text-2xl max-w-3xl">
            Costruire e coltivare con dedizione un autentico rapporto di fiducia
            tra il cliente e il suo professionista di riferimento, un legame che ha.
          </p>
        </div>
      </section>

      {/* About Studio Section */}
      <section className="py-20 px-8 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl md:text-5xl font-medium mb-8">
              Studio Dott.<br />Riccardo Broggini
            </h2>
            <div className="space-y-4 text-2xl">
              <p>
                Nato all'inizio degli anni '70 per volontà di Riccardo Broggini,
                lo Studio Dott. Riccardo Broggini - Dottori Commercialisti Associati
                ha assunto la forma di studio associato nel 2001.
              </p>
              <p>
                Nel corso degli anni, abbiamo acquisito al nostro interno
                competenze professionali sempre più specializzate per garantire una
                consulenza e un servizio al passo coi tempi.
              </p>
              <p>
                Da oltre 40 anni assistiamo i nostri clienti, piccoli o grandi che siano,
                con competenza e dedizione curando e valorizzando anche il
                benessere dei nostri collaboratori e la comunità in cui viviamo.
              </p>
              <p>
                Crediamo nella collaborazione tra i diversi attori presenti nei settori
                in cui operiamo. Per questo, abbiamo creato un'importante rete di
                rapporti con professionisti e docenti universitari.
              </p>
            </div>
            <div className="mt-8">
              <Button text="Scopri i nostri professionisti" />
            </div>
          </div>
          <div className="hidden lg:block">
            <img 
              src="/assets/images/hand_pointing_books.png" 
              alt="Studio library" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl md:text-5xl font-medium text-center mb-16">
          I nostri valori
        </h2>
        
        {/* First row - 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto mb-6">
          {values.slice(0, 3).map((value, index) => (
            <div key={index}>
              <ValueCard
                name={value.name}
                description={value.description}
                icon={value.icon}
              />
            </div>
          ))}
        </div>
        
        {/* Second row - 2 cards, centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {values.slice(3, 5).map((value, index) => (
            <div key={index + 3}>
              <ValueCard
                name={value.name}
                description={value.description}
                icon={value.icon}
              />
            </div>
          ))}
        </div>
      </section>
    </BaseLayout>
  );
}